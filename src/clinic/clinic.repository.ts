import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UtilsService } from 'src/utils/utils.service';
import { PrismaService } from '../prisma/prisma.service';
import { CreateClinicDTO } from './dto/create-clinic.dto';
import { UpdateClinicDTO } from './dto/update-clinic.dto';

@Injectable()
export class ClinicRepository {
  constructor(
    private prisma: PrismaService,
    private readonly utils: UtilsService,
  ) {}

  async create(data: CreateClinicDTO) {
    const { email, password } = data;

    const userWithSameEmail = await this.prisma.donor.findUnique({
      where: {
        email,
      },
    });

    if (userWithSameEmail) {
      throw new ConflictException(
        'Clinic with same e-mail address already exists!',
      );
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

  async findOne(id: string) {
    const existClinic = await this.prisma.clinic.findUnique({ where: { id } });

    if (!existClinic) {
      throw new NotFoundException('Clinic not found!');
    }

    return existClinic;
  }

  async update(id: string, data: UpdateClinicDTO) {
    const existClinic = await this.prisma.clinic.findUnique({ where: { id } });

    if (!existClinic) {
      throw new NotFoundException('Clinic not found!');
    }

    return this.prisma.clinic.update({ where: { id }, data });
  }

  async delete(id: string) {
    const existClinic = await this.prisma.clinic.findUnique({ where: { id } });

    if (!existClinic) {
      throw new NotFoundException('Clinic not found!');
    }

    return this.prisma.clinic.delete({ where: { id } });
  }
}
