import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { CampaignModule } from './campaign/campaign.module';
import { ClinicModule } from './clinic/clinic.module';
import { DonorModule } from './donor/donor.module';
import { envSchema } from './env';
import { PrismaService } from './prisma/prisma.service';
import { UtilsModule } from './utils/utils.module';
import { UtilsService } from './utils/utils.service';

@Module({
  imports: [
    CampaignModule,
    ClinicModule,
    DonorModule,
    UtilsModule,
    AuthModule,
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
  ],
  providers: [PrismaService, UtilsService],
})
export class AppModule {}
