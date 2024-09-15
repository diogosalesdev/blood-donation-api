import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UsersController } from './user.controller';
import { UsersRepository } from './user.repository';
import { UsersService } from './user.service';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersRepository, UsersService, PrismaService],
})
export class UsersModule {}
