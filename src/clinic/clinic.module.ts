import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ClinicController } from './clinic.controller';
import { ClinicService } from './clinic.service';

@Module({
  imports: [ClinicController],
  providers: [ClinicService, PrismaService],
})
export class ClinicModule {}
