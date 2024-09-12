import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { DonorController } from './donor.controller';
import { DonorRepository } from './donor.repository';
import { DonorService } from './donor.service';

@Module({
  imports: [],
  controllers: [DonorController],
  providers: [DonorRepository, DonorService, PrismaService],
})
export class DonorModule {}
