import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString, Matches } from 'class-validator';

export class UpdateDonorDTO {
  @ApiProperty({
    description: 'Nome completo do Doador',
    example: 'Diogo Sales',
  })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({
    description: 'Email do doador',
    example: 'diogosales@swagger.com',
  })
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiProperty({
    description: 'Senha do doador',
    example: 'senha12345',
  })
  @IsEmail()
  @IsOptional()
  password?: string;

  @ApiProperty({
    description: 'Número de telefone do doador',
    example: '81999999999',
  })
  @IsString()
  @IsOptional()
  phone?: string;

  @ApiProperty({
    description: 'Número do cpf do doador',
    example: '11111111111',
  })
  @IsString()
  @IsOptional()
  cpf?: string;

  @ApiProperty({
    description: 'Tipo sanguíneo do Doador',
    example: 'O-',
  })
  @IsString()
  @IsOptional()
  @Matches(/^(A|B|AB|O)[+-]$/, {
    message: 'O tipo sanguíneo deve ser A+, A-, B+, B-, AB+, AB-, O+ ou O-',
  })
  bloodType?: string;

  @ApiProperty({
    description: 'CEP do Doador',
    example: '52780080',
  })
  @IsString()
  @IsOptional()
  cep?: string;

  @ApiProperty({
    description: 'Cidade do Doador',
    example: 'Recife',
  })
  @IsString()
  @IsOptional()
  city?: string;

  @ApiProperty({
    description: 'Estado do Doador',
    example: 'Pernambuco',
  })
  @IsString()
  @IsOptional()
  state?: string;

  @ApiProperty({
    description: 'Endereço do Doador',
    example: 'rua da Concordia, 170',
  })
  @IsString()
  @IsOptional()
  address?: string;

  @ApiProperty({
    description: 'Id da campanha',
    example: '5311dc7a-8fc4-4fbf-9019-70236e8c8cf6',
  })
  @IsString()
  @IsOptional()
  campaignId?: string | null;
}
