import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ClinicController } from './clinic.controller';
import { ClinicRepository } from './clinic.rpository';
import { ClinicService } from './clinic.service';

@Module({
  imports: [],
  controllers: [ClinicController],
  providers: [ClinicRepository, ClinicService, PrismaService],
})
export class ClinicModule {}
