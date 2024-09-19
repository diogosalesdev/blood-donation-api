import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UtilsModule } from '../utils/utils.module';
import { DonorController } from './donor.controller';
import { DonorRepository } from './donor.repository';
import { DonorService } from './donor.service';

@Module({
  imports: [UtilsModule],
  controllers: [DonorController],
  providers: [DonorRepository, DonorService, PrismaService],
})
export class DonorModule {}
