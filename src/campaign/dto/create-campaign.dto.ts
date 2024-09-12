import { IsDateString, IsNotEmpty, IsString, isUUID } from 'class-validator';

export class CreateCampaignDTO {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsDateString()
  startDate: string;

  @IsDateString()
  endDate: string;

  @isUUID()
  @IsNotEmpty()
  clinicId: string;
}
