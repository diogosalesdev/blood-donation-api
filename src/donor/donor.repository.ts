import { ConflictException, Injectable } from '@nestjs/common';
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
    const { email, password, cpf } = data;

    const user = await this.prisma.donor.findUnique({ where: { email } });

    const existsCPF = await this.prisma.donor.findUnique({ where: { cpf } });

    if (existsCPF) {
      throw new ConflictException('Este CPF já existe');
    }

    if (user) {
      throw new ConflictException('Este email já foi cadastrado!');
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
