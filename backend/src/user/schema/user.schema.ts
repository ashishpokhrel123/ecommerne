import { Schema, Document, model } from 'mongoose';

interface User extends Document {
  name: string;
  email: string;
  password: string;
  photo?: string;
  gender: string;
  phone:string;
}

const userSchema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  photo: { type: String },
  gender: { type: String, required: true },
  phone: { type: String, required: true },
});

const UserModel = model<User>('User', userSchema);

export { User, UserModel, userSchema };
