import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UpdateClinicDTO {
  @IsString()
  @IsNotEmpty()
  name?: string;

  @IsString()
  @IsNotEmpty()
  address?: string;

  @IsString()
  @IsNotEmpty()
  phone?: string;

  @IsEmail()
  @IsNotEmpty()
  email?: string;
}
