import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginSessionDTO } from './dto/login-session.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwt: JwtService,
    private readonly prisma: PrismaService,
  ) {}

  async authenticate(body: LoginSessionDTO) {
    const { email, password } = body;

    const donor = await this.prisma.donor.findUnique({ where: { email } });
    const clinic = await this.prisma.clinic.findUnique({ where: { email } });
    const user = donor ? donor : clinic;

    if (!user) {
      throw new UnauthorizedException('Credinciais não encontradas');
    }

    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Credinciais não encontradas');
    }

    const accessToken = this.jwt.sign({
      sub: user.id,
    });

    return {
      access_token: accessToken,
    };
  }
}
