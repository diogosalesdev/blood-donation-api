import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateClinicDTO {
  @ApiProperty({
    description: 'Nome da clínica',
    example: 'Hemope',
  })
  @IsString()
  @IsNotEmpty()
  name!: string;

  @ApiProperty({
    description: 'Endereço da c;ínica',
    example: 'rua Doutor José de Brito, n1200',
  })
  @IsString()
  @IsNotEmpty()
  address!: string;

  @ApiProperty({
    description: 'Número de telefone da clínica',
    example: '81999999999',
  })
  @IsString()
  @IsNotEmpty()
  phone!: string;

  @ApiProperty({
    description: 'Senha do usuário',
    example: 'senha12345',
  })
  @IsString()
  @IsNotEmpty()
  password!: string;

  @ApiProperty({
    description: 'Email da clínica',
    example: 'hemope@swagger.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email!: string;
}
