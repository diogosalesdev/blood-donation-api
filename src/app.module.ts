import { Module } from '@nestjs/common';
import { CampaignModule } from './campaign/campaign.module';
import { ClinicModule } from './clinic/clinic.module';
import { DonorModule } from './donor/donor.module';
import { PrismaService } from './prisma/prisma.service';
import { UsersModule } from './user/user.module';

@Module({
  imports: [CampaignModule, ClinicModule, DonorModule, UsersModule],
  providers: [PrismaService],
})
export class AppModule {}
