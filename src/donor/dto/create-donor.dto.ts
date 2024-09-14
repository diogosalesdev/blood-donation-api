import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Matches } from 'class-validator';

export class CreateDonorDTO {
  @ApiProperty({
    description: 'Nome completo do Doador',
    example: 'Diogo Sales',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Email do doador',
    example: 'diogosales@swagger.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'Número de telefone do doador',
    example: '81999999999',
  })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({
    description: 'Número do cpf do doador',
    example: '11111111111',
  })
  @IsString()
  @IsNotEmpty()
  cpf: string;

  @ApiProperty({
    description: 'Tipo sanguíneo do Doador',
    example: 'O-',
  })
  @IsString()
  @IsNotEmpty()
  @Matches(/^(A|B|AB|O)[+-]$/, {
    message: 'O tipo sanguíneo deve ser A+, A-, B+, B-, AB+, AB-, O+ ou O-',
  })
  bloodType: string;

  @ApiProperty({
    description: 'Endereço do Doador',
    example: 'rua da Concordia, 134',
  })
  @IsString()
  @IsNotEmpty()
  address: string;
}
