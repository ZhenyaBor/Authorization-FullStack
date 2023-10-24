import { IsEmail, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @MinLength(7, { message: 'password cannot be less than 7 characters' })
  password: string;
}
