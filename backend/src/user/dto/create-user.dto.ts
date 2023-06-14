import { IsNotEmpty, IsEmail, MinLength, IsEmpty, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  gender: string;

  @IsNotEmpty()
  phone: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @IsOptional()
  photo?: string;

  @IsOptional()
  role?: string;
}
