import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class CreateCampaignDTO {
  @ApiProperty({
    description: 'Título da Campanha',
    example: 'Doando pro carnaval',
  })
  @IsString()
  @IsNotEmpty()
  title!: string;

  @ApiProperty({
    description: 'Descrição da campanha',
    example: 'Camapnha de doação para obter estoque para o carnaval',
  })
  @IsString()
  @IsNotEmpty()
  description!: string;

  @ApiProperty({
    description: 'Data de início da campanha',
    example: '06-01-2025',
  })
  @IsDateString()
  startDate!: string;

  @ApiProperty({
    description: 'Data de encerramento da campanha',
    example: '20-02-2025',
  })
  @IsDateString()
  endDate!: string;

  @ApiProperty({
    description: 'CEP central da região da campanha',
    example: '52340080',
  })
  @IsString()
  @IsNotEmpty()
  cep!: string;

  @ApiProperty({
    description: 'Cidade central da campanha',
    example: 'Jaboatão',
  })
  @IsString()
  @IsNotEmpty()
  city!: string;

  @ApiProperty({
    description: 'Estado da campanha',
    example: 'Pernambuco',
  })
  @IsString()
  @IsNotEmpty()
  state!: string;

  @ApiProperty({
    description: 'Local/Região de alcance da campanha',
    example: 'Região metropolitana do Recife',
  })
  @IsString()
  @IsNotEmpty()
  region!: string;

  @ApiProperty({
    description: 'Id da clínica que criou a campanha',
    example: '482ddf20-1464-4912-9f2c-7561a439b2f2',
  })
  @IsString()
  @IsNotEmpty()
  clinicId!: string;
}
