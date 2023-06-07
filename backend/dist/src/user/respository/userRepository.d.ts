import { User } from '../schema/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from '../dto/create-user.dto';
export declare class UserRepository {
    private userModel;
    constructor(userModel: Model<User>);
    createUser(user: CreateUserDto): Promise<User>;
    findUserByEmail(email: string): Promise<User>;
    findUserById(id: string): Promise<User>;
}
