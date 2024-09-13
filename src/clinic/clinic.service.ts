import { Injectable } from '@nestjs/common';
import { ClinicRepository } from './clinic.rpository';
import { CreateClinicDTO } from './dto/create-clinic.dto';
import { UpdateClinicDTO } from './dto/update-clinic.dto';

@Injectable()
export class ClinicService {
  constructor(private readonly clinicRepository: ClinicRepository) {}

  create(data: CreateClinicDTO) {
    return this.clinicRepository.create(data);
  }

  findAll() {
    return this.clinicRepository.findAll();
  }

  findOne(id: string) {
    return this.clinicRepository.findOne(id);
  }

  update(id: string, data: UpdateClinicDTO) {
    return this.clinicRepository.update(id, data);
  }

  delete(id: string) {
    return this.clinicRepository.delete(id);
  }
}
