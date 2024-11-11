import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import * as dayjs from 'dayjs';
import { DonorService } from 'src/donor/donor.service';
import { EmailService } from '../email/email.service';

@Injectable()
export class ScheduleService {
  constructor(
    private readonly donorService: DonorService,
    private readonly emailService: EmailService,
  ) {}

  @Cron(CronExpression.EVERY_DAY_AT_1PM)
  async handleCron() {
    const donors = await this.donorService.findAllEligibleForNotification();

    donors.forEach(async (donor) => {
      const now = dayjs();
      const lastDonation = dayjs(donor.lastDonorDate);

      if (now.diff(lastDonation, 'day') >= 90) {
        await this.emailService.sendDonationReminder(donor.email, donor.name);
        await this.donorService.donationAvailable(donor);
      }
    });
  }
}
