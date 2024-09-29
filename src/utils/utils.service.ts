import { Injectable } from '@nestjs/common';
import { hash } from 'bcryptjs';

@Injectable()
export class UtilsService {
  async hashPassword(password: string) {
    const hashedPassword = await hash(password, 8);

    return hashedPassword;
  }
}
