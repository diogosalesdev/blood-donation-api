import { IsDateString, IsNotEmpty, IsString, isUUID } from 'class-validator';

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

  @isUUID()
  clinicId?: string;
}
