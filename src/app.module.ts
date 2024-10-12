import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { CampaignModule } from './campaign/campaign.module';
import { ClinicModule } from './clinic/clinic.module';
import { DonorModule } from './donor/donor.module';
import { EmailModule } from './email/email.module';
import { EmailService } from './email/email.service';
import { envSchema } from './env';
import { PrismaService } from './prisma/prisma.service';
import { ScheduleModule } from './schedule/schedule.module';
import { UtilsModule } from './utils/utils.module';
import { UtilsService } from './utils/utils.service';
@Module({
  imports: [
    CampaignModule,
    ClinicModule,
    DonorModule,
    UtilsModule,
    AuthModule,
    EmailModule,
    ScheduleModule,
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
  ],
  providers: [PrismaService, UtilsService, EmailService],
})
export class AppModule {}
