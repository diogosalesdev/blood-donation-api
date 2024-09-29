import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UpdateClinicDTO {
  @ApiProperty({
    description: 'Nome da clínica',
    example: 'Hemope',
  })
  @IsString()
  @IsNotEmpty()
  name?: string;

  @ApiProperty({
    description: 'Email da clínica',
    example: 'hemope@swagger.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email?: string;

  @ApiProperty({
    description: 'Senha da clínica',
    example: 'senha12345',
  })
  @IsString()
  @IsNotEmpty()
  password?: string;

  @ApiProperty({
    description: 'Número de telefone da clínica',
    example: '81999999999',
  })
  @IsString()
  @IsNotEmpty()
  phone?: string;

  @ApiProperty({
    description: 'CEP da clínica',
    example: '52340080',
  })
  @IsEmail()
  @IsNotEmpty()
  cep?: string;

  @ApiProperty({
    description: 'Cidade da clínica',
    example: 'Olinda',
  })
  @IsEmail()
  @IsNotEmpty()
  city?: string;

  @ApiProperty({
    description: 'Estado da clínica',
    example: 'Pernambuco',
  })
  @IsEmail()
  @IsNotEmpty()
  state?: string;

  @ApiProperty({
    description: 'Endereço da c;ínica',
    example: 'rua Doutor José de Brito, n1200',
  })
  @IsString()
  @IsNotEmpty()
  address?: string;
}
