import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { CampaignController } from './campaign.controller';
import { CampaignRepository } from './campaign.repository';
import { CampaignService } from './campaign.service';

@Module({
  imports: [JwtModule],
  controllers: [CampaignController],
  providers: [CampaignRepository, CampaignService, PrismaService],
})
export class CampaignModule {}
