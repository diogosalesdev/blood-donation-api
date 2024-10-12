import { Module } from '@nestjs/common';
import { DonorRepository } from 'src/donor/donor.repository';
import { DonorService } from 'src/donor/donor.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { UtilsService } from 'src/utils/utils.service';
import { EmailService } from '../email/email.service';
import { ScheduleService } from './schedule.service';

@Module({
  providers: [
    PrismaService,
    UtilsService,
    DonorRepository,
    DonorService,
    ScheduleService,
    EmailService,
  ],
})
export class ScheduleModule {}
