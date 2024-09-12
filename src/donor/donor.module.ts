import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { DonorController } from './donor.controller';
import { DonorService } from './donor.service';

@Module({
  imports: [DonorController],
  providers: [DonorService, PrismaService],
})
export class DonorModule {}
