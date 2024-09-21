import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UtilsModule } from '../utils/utils.module';
import { UtilsService } from '../utils/utils.service';
import { ClinicController } from './clinic.controller';
import { ClinicRepository } from './clinic.rpository';
import { ClinicService } from './clinic.service';

@Module({
  imports: [UtilsModule],
  controllers: [ClinicController],
  providers: [ClinicRepository, ClinicService, PrismaService, UtilsService],
})
export class ClinicModule {}
