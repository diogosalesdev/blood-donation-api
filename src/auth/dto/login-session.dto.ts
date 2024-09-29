import { ApiProperty } from '@nestjs/swagger';

export class LoginSessionDTO {
  @ApiProperty({
    description: 'Email do doador',
    example: 'diogosales@swagger.com',
  })
  email!: string;

  @ApiProperty({
    description: 'Senha do doador',
    example: 'senha12345',
  })
  password!: string;
}
