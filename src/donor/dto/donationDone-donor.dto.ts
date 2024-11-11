import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsOptional, IsString } from 'class-validator';

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
  @IsString()
  lastDonorDate?: string;

  @ApiProperty({
    description: 'Data para uma nova doação',
    example: '25/08/2024',
  })
  @IsString()
  unblockDonationDate?: string;

  @ApiProperty({
    description: 'Id da campanha',
    example: '5311dc7a-8fc4-4fbf-9019-70236e8c8cf6',
  })
  @IsString()
  @IsOptional()
  campaignId?: string | null;
}
