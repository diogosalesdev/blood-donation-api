import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UtilsModule } from 'src/utils/utils.module';
import { UtilsService } from 'src/utils/utils.service';
import { DonorController } from './donor.controller';
import { DonorRepository } from './donor.repository';
import { DonorService } from './donor.service';

@Module({
  imports: [UtilsModule],
  controllers: [DonorController],
  providers: [DonorRepository, DonorService, PrismaService, UtilsService],
})
export class DonorModule {}
