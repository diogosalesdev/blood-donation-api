import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateCampaignDTO {
  @ApiProperty({
    description: 'Título da Campanha',
    example: 'Doando pro carnaval',
  })
  @IsString()
  @IsOptional()
  title?: string;

  @ApiProperty({
    description: 'Descrição da campanha',
    example: 'Camapnha de doação para obter estoque para o carnaval',
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    description: 'Data de início da campanha',
    example: '06-01-2025',
  })
  @IsDateString()
  @IsOptional()
  startDate?: string;

  @ApiProperty({
    description: 'Data de encerramento da campanha',
    example: '20-02-2025',
  })
  @IsDateString()
  @IsOptional()
  endDate?: string;

  @ApiProperty({
    description: 'Local/Região de alcance da campanha',
    example: 'Região metropolitana do Recife',
  })
  @IsUUID()
  clinicId?: string;
}
