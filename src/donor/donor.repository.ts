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

  async registerInCampaign(donorId: string, campaignId: string) {
    const user = await this.prisma.donor.findUnique({
      where: {
        id: donorId,
      },
    });

    const campaign = await this.prisma.campaign.findUnique({
      where: {
        id: campaignId,
      },
    });
    if (!user) {
      throw new NotFoundException('Usuário não cadastrado!');
    }

    if (!campaign) {
      throw new NotFoundException(
        'Esta campanha não existe, por favor escolha outra campanha.',
      );
    }

    if (user.campaignId) {
      throw new ConflictException('Você já está registrado em uma campanha.');
    }

    return this.prisma.donor.update({
      where: { id: donorId },
      data: {
        ...user,
        campaignId: campaign.id,
      },
    });
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

  async donationDone(id: string, campaignId: string) {
    const user = await this.prisma.donor.findUnique({
      where: {
        id: id,
      },
    });

    const campaign = await this.prisma.campaign.findUnique({
      where: {
        id: campaignId,
      },
    });

    if (!campaign) {
      throw new NotFoundException(
        'Esta campanha não existe, por favor escolha outra campanha.',
      );
    }

    const now = dayjs();

    const formattedLastDonorDate = dayjs(now, 'DD/MM/YYYY').toISOString();

    const unblockDate = now.add(90, 'day').toISOString();

    if (!user) {
      throw new NotFoundException('Usuário não cadastrado!');
    }

    if (user.campaignId) {
      const data: UpdateDonorDTO = {
        ...user,
        available: false,
        lastDonorDate: formattedLastDonorDate,
        unblockDonationDate: unblockDate,
      };

      return this.update(user.id, data);
    } else {
      const data: UpdateDonorDTO = {
        ...user,
        available: false,
        lastDonorDate: formattedLastDonorDate,
        unblockDonationDate: unblockDate,
        campaignId: campaign.id,
      };

      return this.update(user.id, data);
    }
  }

  async donationAvaliable(donorId: string) {
    const user = await this.prisma.donor.findUnique({
      where: {
        id: donorId,
      },
    });

    return this.prisma.donor.update({
      where: { id: user!.id },
      data: {
        ...user,
        available: true,
      },
    });
  }
}
