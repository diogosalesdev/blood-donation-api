import { Module } from '@nestjs/common';
import { CampaignModule } from './campaign/campaign.module';
import { ClinicModule } from './clinic/clinic.module';
import { DonorModule } from './donor/donor.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [CampaignModule, ClinicModule, DonorModule],
  providers: [PrismaService],
})
export class AppModule {}
