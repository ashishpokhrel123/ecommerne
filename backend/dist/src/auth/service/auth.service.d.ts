import { JwtService } from "@nestjs/jwt";
import { UserRepository } from "src/user/respository/userRepository";
import { CreateUserDto } from "src/user/dto/create-user.dto";
import { User } from "src/user/schema/user.schema";
export declare class AuthService {
    private readonly userRepository;
    private readonly jwtService;
    constructor(userRepository: UserRepository, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<any>;
    getToken(payload: {
        email: string;
        id: string;
    }): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    login(email: string, password: string, response: any): Promise<{
        status: number;
        message: string;
        access_token: string;
    }>;
    register(body: CreateUserDto): Promise<{
        status: number;
        message: string;
        data: User;
    }>;
    registerUserFromInput(body: CreateUserDto): Promise<User>;
    private isPasswordStrong;
    private passwordHashFunction;
    getEmail(email: string): Promise<User | null>;
    refreshAccessToken(refreshToken: string): Promise<string>;
    logout(response: any): Promise<{
        status: number;
        message: string;
    }>;
}
