import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCampaignDTO } from './dto/create-campaign.dto';
import { UpdateCampaignDTO } from './dto/update-campaign.dto';

@Injectable()
export class CampaignRepository {
  constructor(private prisma: PrismaService) {}

  create(data: CreateCampaignDTO) {
    return this.prisma.campaign.create({ data });
  }

  findAll() {
    return this.prisma.campaign.findMany();
  }

  findOne(id: string) {
    return this.prisma.campaign.findUnique({ where: { id } });
  }

  update(id: string, data: UpdateCampaignDTO) {
    return this.prisma.campaign.update({ where: { id }, data });
  }

  delete(id: string) {
    return this.prisma.campaign.delete({ where: { id } });
  }
}
