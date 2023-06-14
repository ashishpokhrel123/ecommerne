/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Schema, Document } from "mongoose";
export declare enum UserRole {
    CUSTOMER = "customer",
    ADMIN = "admin",
    SUPER_ADMIN = "superadmin",
    DELIVERY_PERSON = "deliveryPerson"
}
interface User extends Document {
    name: string;
    email: string;
    password: string;
    photo?: string;
    gender: string;
    phone: string;
    role: UserRole.CUSTOMER;
}
declare const userSchema: Schema<User, import("mongoose").Model<User, any, any, any, Document<unknown, any, User> & Omit<User & {
    _id: import("mongoose").Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, User, Document<unknown, {}, import("mongoose").FlatRecord<User>> & Omit<import("mongoose").FlatRecord<User> & {
    _id: import("mongoose").Types.ObjectId;
}, never>>;
declare const UserModel: import("mongoose").Model<User, {}, {}, {}, Document<unknown, {}, User> & Omit<User & {
    _id: import("mongoose").Types.ObjectId;
}, never>, any>;
export { User, UserModel, userSchema };
