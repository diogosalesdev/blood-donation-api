import { Module } from '@nestjs/common';
import { UtilsModule } from 'src/utils/utils.module';
import { UtilsService } from 'src/utils/utils.service';
import { PrismaService } from '../prisma/prisma.service';
import { ClinicController } from './clinic.controller';
import { ClinicRepository } from './clinic.rpository';
import { ClinicService } from './clinic.service';

@Module({
  imports: [UtilsModule],
  controllers: [ClinicController],
  providers: [ClinicRepository, ClinicService, PrismaService, UtilsService],
})
export class ClinicModule {}
