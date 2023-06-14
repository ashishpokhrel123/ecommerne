import { UserRole } from '../user/schema/user.schema';
export declare const ROLES_KEY = "roles";
export declare const Roles: (...roles: UserRole[]) => import("@nestjs/common").CustomDecorator<string>;
