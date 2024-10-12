import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsOptional } from 'class-validator';

export class DonationDoneDTO {
  @ApiProperty({
    description: 'Email do doador',
    example: 'diogosales@swagger.com',
  })
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiProperty({
    description: 'Disponibilidade para doar',
    example: 'false',
  })
  @IsBoolean()
  available!: boolean;

  @ApiProperty({
    description: 'Data da última doação',
    example: '25/08/2024',
  })
  lastDonorDate!: Date;
}
