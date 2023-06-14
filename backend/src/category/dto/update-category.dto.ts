import { IsNotEmpty, IsEmail, MinLength, IsEmpty, IsOptional } from 'class-validator';

export class UpdateCategoryDto {
  @IsNotEmpty()
  name: string;


}
