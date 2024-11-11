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
    const { email, password, isDonor } = body;

    let user;
    if (isDonor) {
      user = await this.prisma.donor.findUnique({ where: { email } });
    } else {
      user = await this.prisma.clinic.findUnique({ where: { email } });
    }

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

    if (user.cpf) {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        cpf: user.cpf,
        phone: user.phone,
        address: user.address,
        city: user.city,
        state: user.state,
        cep: user.cep,
        bloodType: user.bloodType,
        access_token: accessToken,
      };
    }

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      address: user.address,
      city: user.city,
      state: user.state,
      cep: user.cep,
      access_token: accessToken,
    };
  }
}
