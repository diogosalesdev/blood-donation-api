import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(createUserDTO: CreateUserDTO) {
    return this.prisma.user.create({ data: createUserDTO });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  update(id: string, updateUserDTO: UpdateUserDTO) {
    return this.prisma.user.update({ where: { id }, data: updateUserDTO });
  }

  delete(id: string) {
    return this.prisma.user.delete({ where: { id } });
  }
}
