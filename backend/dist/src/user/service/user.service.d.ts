import { CreateUserDto } from "../dto/create-user.dto";
import { UserRepository } from "../respository/userRepository";
import { User } from "../schema/user.schema";
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    registerUser(user: CreateUserDto): Promise<User>;
    getProfile(userId: string): Promise<{
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
    }>;
}
