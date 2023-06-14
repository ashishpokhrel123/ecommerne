import { IsNotEmpty, IsEmail, MinLength, IsEmpty, IsOptional } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty()
  name: string;


}
