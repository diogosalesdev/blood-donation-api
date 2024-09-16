import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { ClinicController } from './clinic.controller';
import { ClinicRepository } from './clinic.rpository';
import { ClinicService } from './clinic.service';

@Module({
  imports: [JwtModule],
  controllers: [ClinicController],
  providers: [ClinicRepository, ClinicService, PrismaService],
})
export class ClinicModule {}
