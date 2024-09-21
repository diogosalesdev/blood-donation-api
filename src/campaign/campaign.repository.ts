import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCampaignDTO } from './dto/create-campaign.dto';
import { UpdateCampaignDTO } from './dto/update-campaign.dto';

@Injectable()
export class CampaignRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateCampaignDTO) {
    return this.prisma.campaign.create({ data });
  }

  findAll() {
    return this.prisma.campaign.findMany();
  }

  async findOne(id: string) {
    const existsCampaign = await this.prisma.campaign.findUnique({
      where: { id },
    });

    if (existsCampaign) {
      throw new NotFoundException('Campaign not found!');
    }

    return existsCampaign;
  }

  async update(id: string, data: UpdateCampaignDTO) {
    const existsCampaign = await this.prisma.campaign.findUnique({
      where: { id },
    });

    if (existsCampaign) {
      throw new NotFoundException('Campaign not found!');
    }
    return this.prisma.campaign.update({ where: { id }, data });
  }

  async delete(id: string) {
    const existsCampaign = await this.prisma.campaign.findUnique({
      where: { id },
    });

    if (existsCampaign) {
      throw new NotFoundException('Campaign not found!');
    }

    return this.prisma.campaign.delete({ where: { id } });
  }
}
