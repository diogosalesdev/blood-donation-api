import { IsDateString, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class UpdateCampaignDTO {
  @IsString()
  @IsNotEmpty()
  title?: string;

  @IsString()
  @IsNotEmpty()
  description?: string;

  @IsDateString()
  startDate?: string;

  @IsDateString()
  endDate?: string;

  @IsUUID()
  clinicId?: string;
}
