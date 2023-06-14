import { JwtService } from "@nestjs/jwt";
import { UserRepository } from "src/user/respository/userRepository";
import * as bcrypt from "bcrypt";
import { isEmail } from "class-validator";
import {
  HttpException,
  HttpStatus,
  Injectable,
  Res,
  UnauthorizedException,
} from "@nestjs/common";
import { CreateUserDto } from "src/user/dto/create-user.dto";
import { User, UserModel } from "src/user/schema/user.schema";
import { JwtPayload } from "src/interface/jwt-payload.interface";

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userRepository.findUserByEmail(email);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async getToken(payload: {
    email: string;
    id: string;
  }): Promise<{ access_token: string; refresh_token: string }> {
    const [access_token, refresh_token] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: process.env.JWT_SECRET,
        expiresIn: "7d",
      }),
      this.jwtService.signAsync(payload, {
        secret: process.env.JWT_REFRESH,
        expiresIn: "7d",
      }),
    ]);
    return { access_token, refresh_token };
  }

  async login(
    email: string,
    password: string,
    @Res({ passthrough: true }) response: any
  ): Promise<{ status: number; message: string; access_token: string}> {
    if (!isEmail(email)) {
      throw new HttpException("Email is not valid", HttpStatus.NOT_ACCEPTABLE);
    }
    if (password.length < 1) {
      throw new HttpException(
        "Password is required",
        HttpStatus.NOT_ACCEPTABLE
      );
    }
    const user = await this.userRepository.findUserByEmail(email);
    if (!user) {
      throw new HttpException("Invalid email", HttpStatus.FORBIDDEN);
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new HttpException(
        "Invalid email or password",
        HttpStatus.FORBIDDEN
      );
    }

    const payload = { email: user.email, id: user.id };
    const { access_token, refresh_token } = await this.getToken(payload);
    response.cookie("token", "Bearer " + refresh_token, {
      httpOnly: true,
      secure: true,
    });
    return {
      status: HttpStatus.CREATED,
      message: "Login successful",
      access_token,
    };
  }

  async register(
    body: CreateUserDto
  ): Promise<{ status: number; message: string; data: User }> {
    const doesEmailAlreadyExist = await this.userRepository.findUserByEmail(
      body.email
    );
    if (doesEmailAlreadyExist) {
      throw new HttpException("Email already exists", HttpStatus.CONFLICT);
    }

    const user = await this.registerUserFromInput(body);
    const savedUser = await this.userRepository.createUser(user);
    if (savedUser) {
      return {
        status: HttpStatus.CREATED,
        message: "User created successfully",
        data: savedUser,
      };
    } else {
      return {
        status: HttpStatus.EXPECTATION_FAILED,
        message: "Internal Server Error",
        data: null,
      };
    }
  }

  async registerUserFromInput(body: CreateUserDto): Promise<User> {
    const { name, email, password, photo, gender, phone, role } = body;
    if (!(await this.isPasswordStrong(password))) {
      throw new HttpException("Password is weak", HttpStatus.BAD_REQUEST);
    }
    const user = new UserModel({
      name,
      email,
      password: await this.passwordHashFunction(password),
      photo,
      gender,
      phone,
      role
    });
    return user;
  }

  private async isPasswordStrong(password: string): Promise<boolean> {
    const passwordRegex =
      /^.*(?=.{6,})(?=.*\d)(?=.*[a-zA-Z])(?=.*[@#$%^&+=]).*$/;
    return passwordRegex.test(password);
  }

  private async passwordHashFunction(password: string): Promise<string> {
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  }

  async getEmail(email: string): Promise<User | null> {
    return this.userRepository.findUserByEmail(email);
  }

  async refreshAccessToken(refreshToken: string): Promise<string> {
    return;
  }

  async logout(
    @Res({ passthrough: true }) response: any
  ): Promise<{ status: number; message: string }> {
    response.cookie("token", null),
      {
        httpOnly: true,
        secure: true,
      };
    return {
      status: HttpStatus.OK,
      message: "Logout successful",
    };
  }
}
