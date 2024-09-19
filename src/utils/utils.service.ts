import { hash } from 'bcryptjs';

export class UtilsService {
  async hashPassword(password: string) {
    return await hash(password, 8);
  }
}
