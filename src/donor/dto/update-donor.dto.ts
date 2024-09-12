import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UpdateDonorDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  cpf: string;

  @IsString()
  @IsNotEmpty()
  bloodType: string;

  @IsString()
  @IsNotEmpty()
  address: string;
}
