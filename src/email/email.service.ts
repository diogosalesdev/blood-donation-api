import { Injectable } from '@nestjs/common';
import * as sgMail from '@sendgrid/mail';

@Injectable()
export class EmailService {
  constructor() {
    if (process.env.SENDGRID_API_KEY) {
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    } else {
      throw new Error(
        'SENDGRID_API_KEY is not defined in the environment variables.',
      );
    }
  }

  async sendDonationReminder(email: string, name: string) {
    const msg = {
      to: email,
      from: process.env.EMAIL_FROM!,
      sbject: 'Está na hora de doar sangue novamente!',
      text: `Olá ${name}, já se passaram 90 dias desde sua última doação. Que tal ajudar novamente?`,
      html: `<strong>Olá ${name}, já se passaram 90 dias desde sua última doação. Que tal ajudar novamente?</strong>`,
    };

    try {
      await sgMail.send(msg);
      console.log(`Email enviado para ${email}`);
    } catch (error) {
      console.error(`Erro ao enviar o email para ${email}`, error);
    }
  }
}
