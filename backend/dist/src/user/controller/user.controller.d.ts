import { UserService } from '../service/user.service';
import { CreateUserDto } from '../dto/create-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<import("../schema/user.schema").User>;
    getProfile(req: any): Promise<{
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
