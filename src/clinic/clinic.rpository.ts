import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateClinicDTO } from './dto/create-clinic.dto';
import { UpdateClinicDTO } from './dto/update-clinic.dto';

@Injectable()
export class ClinicRepository {
  constructor(private prisma: PrismaService) {}

  create(data: CreateClinicDTO) {
    return this.prisma.clinic.create({ data });
  }

  findAll() {
    return this.prisma.clinic.findMany();
  }

  findOne(id: string) {
    return this.prisma.clinic.findUnique({ where: { id } });
  }

  update(id: string, data: UpdateClinicDTO) {
    return this.prisma.clinic.update({ where: { id }, data });
  }

  delete(id: string) {
    return this.prisma.clinic.delete({ where: { id } });
  }
}
