import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { UsersController } from './user.controller';
import { UsersRepository } from './user.repository';
import { UsersService } from './user.service';

@Module({
  imports: [JwtModule],
  controllers: [UsersController],
  providers: [UsersRepository, UsersService, PrismaService],
})
export class UsersModule {}
