import { Module } from '@nestjs/common';
import { CampaignModule } from './campaign/campaign.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [CampaignModule],
  providers: [PrismaService],
})
export class AppModule {}
