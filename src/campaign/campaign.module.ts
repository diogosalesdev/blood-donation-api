import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CampaignController } from './campaign.controller';
import { CampaignRepository } from './campaign.repository';
import { CampaignService } from './campaign.service';

@Module({
  controllers: [CampaignController],
  providers: [CampaignRepository, CampaignService, PrismaService],
})
export class CampaignModule {}
