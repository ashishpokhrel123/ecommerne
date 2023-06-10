import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Res,
  Response,
} from "@nestjs/common";
import { AuthService } from "../service/auth.service";
import { CreateUserDto } from "src/user/dto/create-user.dto";
import { User } from "src/user/schema/user.schema";
import { CookieOptions } from "express";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("login")
  async login(
    @Body("email") email: string,
    @Body("password") password: string,
    @Res({ passthrough: true }) response: Response
  ) {
    const user = await this.authService.login(email, password, response);
    return user;
  }

  @Post("register")
  async register(@Body() body: CreateUserDto) {
    const registerUser = await this.authService.register(body);
    return {
      status: HttpStatus.CREATED,
      message: "User created successfully",
      data: registerUser,
    };
  }

  @Get("hello")
  async getHello(): Promise<{ status: number; message: string; data: User }> {
    let email = "aashishpokhrel146@gmail.com";
    const user = await this.authService.getEmail(email);
    return {
      status: HttpStatus.OK,
      message: "User fteched",
      data: user,
    };
  }

  @Post("logout")
  async logout(@Res({ passthrough: true }) response: Response) {
    const logout = await this.authService.logout(response);
    return logout;
  }
}
