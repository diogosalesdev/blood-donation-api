import { Injectable } from '@nestjs/common';
import { DonorRepository } from './donor.repository';
import { CreateDonorDTO } from './dto/create-donor.dto';
import { DonationDoneDTO } from './dto/donationDone-donor.dto';
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

  donationDone(data: DonationDoneDTO) {
    return this.donorRepository.donationDone(data);
  }
}
