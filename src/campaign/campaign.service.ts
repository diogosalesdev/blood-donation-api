import { Injectable } from '@nestjs/common';
import { CampaignRepository } from './campaign.repository';
import { CreateCampaignDTO } from './dto/create-campaign.dto';
import { UpdateCampaignDTO } from './dto/update-campaign.dto';

@Injectable()
export class CampaignService {
  constructor(private readonly campaignRepository: CampaignRepository) {}

  create(data: CreateCampaignDTO) {
    return this.campaignRepository.create(data);
  }

  findAll() {
    return this.campaignRepository.findAll();
  }

  findOne(id: string) {
    return this.campaignRepository.findOne(id);
  }

  findCampapaignByCity(city: string) {
    return this.campaignRepository.findCampaignByCity(city);
  }

  update(id: string, data: UpdateCampaignDTO) {
    return this.campaignRepository.update(id, data);
  }

  delete(id: string) {
    return this.campaignRepository.delete(id);
  }
}
