import { HttpStatus } from "@nestjs/common";
import { AuthService } from "../service/auth.service";
import { CreateUserDto } from "src/user/dto/create-user.dto";
import { User } from "src/user/schema/user.schema";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(email: string, password: string, response: Response): Promise<{
        status: number;
        message: string;
        access_token: string;
    }>;
    register(body: CreateUserDto): Promise<{
        status: HttpStatus;
        message: string;
        data: {
            status: number;
            message: string;
            data: User;
        };
    }>;
    getHello(): Promise<{
        status: number;
        message: string;
        data: User;
    }>;
    logout(response: Response): Promise<{
        status: number;
        message: string;
    }>;
}
