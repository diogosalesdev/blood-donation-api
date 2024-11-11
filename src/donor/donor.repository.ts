import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import * as dayjs from 'dayjs';
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

  async findWithCampaignsAndClinics() {
    return this.prisma.donor.findMany({
      include: {
        campaign: {
          include: {
            Clinic: true,
          },
        },
      },
    });
  }

  async findWithCapaignsAndClinicsById(id: string) {
    const user = await this.prisma.donor.findUnique({
      where: {
        id: id,
      },
    });

    if (user?.campaignId) {
      const campaign = await this.prisma.campaign.findUnique({
        where: {
          id: user.campaignId,
        },
      });

      const clinic = await this.prisma.clinic.findUnique({
        where: {
          id: campaign?.clinicId,
        },
      });

      return {
        user,
        campaign,
        clinic,
      };
    }
  }

  async registerInCampaign(
    donorId: string,
    campaignId: string,
    data: UpdateDonorDTO,
  ) {
    const campaign = await this.prisma.campaign.findUnique({
      where: {
        id: campaignId,
      },
    });

    data = {
      ...data,
      campaignId: campaign!.id,
    };

    return await this.update(donorId, data);
  }

  async findAllEligibleForNotification() {
    return await this.prisma.donor.findMany({
      where: {
        lastDonorDate: {
          not: null,
        },
        unblockDonationDate: null,
      },
    });
  }

  async donationDone(id: string) {
    const user = await this.prisma.donor.findUnique({
      where: {
        id: id,
      },
    });

    const now = dayjs();

    const formattedLastDonorDate = dayjs(now, 'DD/MM/YYYY').toISOString();

    const unblockDate = now.add(90, 'day').toISOString();

    if (!user) {
      throw new NotFoundException('Usuário não cadastrado!');
    }

    return this.prisma.donor.update({
      where: { id },
      data: {
        available: false,
        lastDonorDate: formattedLastDonorDate,
        unblockDonationDate: unblockDate,
      },
    });
  }

  donationAvaliable(data: UpdateDonorDTO) {
    const { email } = data;

    return this.prisma.donor.update({
      where: { email },
      data: {
        ...data,
        available: true,
      },
    });
  }
}
