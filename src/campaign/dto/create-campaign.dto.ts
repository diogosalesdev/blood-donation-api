import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class CreateCampaignDTO {
  @ApiProperty({
    description: 'Título da Campanha',
    example: 'Doando pro carnaval',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: 'Descrição da campanha',
    example: 'Camapnha de doação para obter estoque para o carnaval',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    description: 'Data de início da campanha',
    example: '06-01-2025',
  })
  @IsDateString()
  startDate: string;

  @ApiProperty({
    description: 'Data de encerramento da campanha',
    example: '20-02-2025',
  })
  @IsDateString()
  endDate: string;

  @ApiProperty({
    description: 'Local/Região de alcance da campanha',
    example: 'Região metropolitana do Recife',
  })
  @IsString()
  @IsNotEmpty()
  location: string;

  @ApiProperty({
    description: 'Id da clínica que criou a campanha',
    example: '482ddf20-1464-4912-9f2c-7561a439b2f2',
  })
  @IsString()
  @IsNotEmpty()
  clinicId: string;
}
