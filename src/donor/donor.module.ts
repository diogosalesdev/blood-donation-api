import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UtilsModule } from '../utils/utils.module';
import { UtilsService } from '../utils/utils.service';
import { DonorController } from './donor.controller';
import { DonorRepository } from './donor.repository';
import { DonorService } from './donor.service';

@Module({
  imports: [UtilsModule],
  controllers: [DonorController],
  providers: [DonorRepository, DonorService, PrismaService, UtilsService],
  exports: [DonorService],
})
export class DonorModule {}
