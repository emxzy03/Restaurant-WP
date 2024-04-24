import { IsNotEmpty, Length, IsEmail, Matches } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @Length(3, 32)
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  )
  password: string;
}
