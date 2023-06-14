import { Schema, Document, model } from "mongoose";

export enum UserRole {
  CUSTOMER = "customer",
  ADMIN = "admin",
  SUPER_ADMIN = "superadmin",
  DELIVERY_PERSON = "deliveryPerson",
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

const userSchema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  photo: { type: String },
  gender: { type: String, required: true },
  phone: { type: String, required: true },
  role: {
    type: String,
    enum: Object.values(UserRole),
    default: UserRole.CUSTOMER,
  },
});

const UserModel = model<User>("User", userSchema);

export { User, UserModel, userSchema };
