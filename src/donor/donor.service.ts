import { Injectable } from '@nestjs/common';
import { DonorRepository } from './donor.repository';
import { CreateDonorDTO } from './dto/create-donor.dto';
import { UpdateDonorDTO } from './dto/update-donor.dto';

@Injectable()
export class DonorService {
  constructor(private readonly donorRepository: DonorRepository) {}

  create(data: CreateDonorDTO) {
    return this.donorRepository.create(data);
  }

  findAll() {
    return this.donorRepository.findAll();
  }

  findOne(id: string) {
    return this.donorRepository.findOne(id);
  }

  update(id: string, data: UpdateDonorDTO) {
    return this.donorRepository.update(id, data);
  }

  delete(id: string) {
    return this.donorRepository.delete(id);
  }

  findAllEligibleForNotification() {
    return this.donorRepository.findAllEligibleForNotification();
  }

  donationDone(id: string, campaignId: string) {
    return this.donorRepository.donationDone(id, campaignId);
  }

  donationAvailable(id: string) {
    return this.donorRepository.donationAvaliable(id);
  }

  findWithCampaignsAndClinics() {
    return this.donorRepository.findWithCampaignsAndClinics();
  }

  findWithCapaignsAndClinicsById(id: string) {
    return this.donorRepository.findWithCapaignsAndClinicsById(id);
  }

  registerInCampaign(id: string, campaignId: string) {
    return this.donorRepository.registerInCampaign(id, campaignId);
  }
}
