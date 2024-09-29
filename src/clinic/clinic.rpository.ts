import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UtilsService } from '../utils/utils.service';
import { CreateClinicDTO } from './dto/create-clinic.dto';
import { UpdateClinicDTO } from './dto/update-clinic.dto';

@Injectable()
export class ClinicRepository {
  constructor(
    private readonly prisma: PrismaService,
    private readonly utils: UtilsService,
  ) {}

  async create(data: CreateClinicDTO) {
    const { email, password } = data;

    const clinic = await this.prisma.clinic.findUnique({ where: { email } });

    if (clinic) {
      throw new ConflictException('Este email já foi cadastrado!');
    }

    const hashedPassword = await this.utils.hashPassword(password);

    return this.prisma.clinic.create({
      data: {
        ...data,
        password: hashedPassword,
      },
    });
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
