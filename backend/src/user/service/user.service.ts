import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateUserDto } from "../dto/create-user.dto";
import { UpdateUserDto } from "../dto/update-user.dto";
import { UserRepository } from "../respository/userRepository";
import { User } from "../schema/user.schema";
import { randomBytes } from "crypto";
import nodemailer from "nodemailer";

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async registerUser(user: CreateUserDto): Promise<User> {
    const createdUser = await this.userRepository.createUser(user);
    return createdUser;
  }

  async getProfile(userId: string): Promise<{
    status: number;
    message: string;
    data: {
      name: string;
      email: string;
      photo: string;
      gender: string;
      phone: string;
      role: string;
    };
  }> {
    const user = await this.userRepository.findUserById(userId);

    const { name, email, photo, gender, phone, role } = user;
    return {
      status: HttpStatus.OK,
      message: "Profile fetech succesfully",
      data: {
        name: name ? name : null,
        email: email ? email : null,
        photo: photo ? photo : null,
        gender: gender ? gender : null,
        phone: phone ? phone : null,
        role: role ? role : null,
      },
    };
  }
}
