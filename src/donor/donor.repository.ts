import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDonorDTO } from './dto/create-donor.dto';
import { UpdateDonorDTO } from './dto/update-donor.dto';

@Injectable()
export class DonorRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateDonorDTO) {
    return this.prisma.donor.create({ data });
  }

  findAll() {
    return this.prisma.donor.findMany();
  }

  findOne(id: string) {
    return this.prisma.donor.findUnique({ where: { id } });
  }

  update(id: string, data: UpdateDonorDTO) {
    return this.prisma.donor.update({ where: { id }, data });
  }

  delete(id: string) {
    return this.prisma.donor.delete({ where: { id } });
  }
}
