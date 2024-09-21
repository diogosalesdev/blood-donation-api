import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UtilsService } from '../utils/utils.service';
import { CreateDonorDTO } from './dto/create-donor.dto';
import { UpdateDonorDTO } from './dto/update-donor.dto';

@Injectable()
export class DonorRepository {
  constructor(
    private readonly prisma: PrismaService,
    private readonly utils: UtilsService,
  ) {}

  async create(data: CreateDonorDTO) {
    const { email, password } = data;

    const userWithSameEmail = await this.prisma.donor.findUnique({
      where: {
        email,
      },
    });

    if (userWithSameEmail) {
      throw new ConflictException(
        'User with same e-mail address already exists!',
      );
    }

    const hashedPassword = await this.utils.hashPassword(password);

    return this.prisma.donor.create({
      data: {
        ...data,
        password: hashedPassword,
      },
    });
  }

  findAll() {
    return this.prisma.donor.findMany();
  }

  async findOne(id: string) {
    const existsDonor = await this.prisma.donor.findUnique({ where: { id } });

    if (!existsDonor) {
      throw new NotFoundException('Donor not found!');
    }

    return existsDonor;
  }

  async update(id: string, data: UpdateDonorDTO) {
    const existsDonor = await this.prisma.donor.findUnique({ where: { id } });

    if (!existsDonor) {
      throw new NotFoundException('Donor not found!');
    }

    return this.prisma.donor.update({ where: { id }, data });
  }

  async delete(id: string) {
    const existsDonor = await this.prisma.donor.findUnique({ where: { id } });

    if (!existsDonor) {
      throw new NotFoundException('Donor not found!');
    }

    return this.prisma.donor.delete({ where: { id } });
  }
}
