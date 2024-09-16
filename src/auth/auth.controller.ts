import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDTO } from 'src/user/dto/create-user.dto';
import { AuthService } from './auth.service';
import { LoginUserDTO } from './dto/login-user.dtos';

@ApiTags('auth')
@Controller('auth')
export class AuthContoller {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'Login in the app' })
  @ApiResponse({
    status: 200,
    description: 'Login executed successfuly',
  })
  async login(@Body() loginUserDTO: LoginUserDTO) {
    const user = await this.authService.validateUser(
      loginUserDTO.email,
      loginUserDTO.password,
    );
    if (!user) {
      throw new UnauthorizedException('Invalid credentials!');
    }
    return this.authService.login(user);
  }

  @Post('register')
  @ApiOperation({ summary: 'User login register' })
  @ApiResponse({
    status: 200,
    description: 'User login register',
  })
  async register(@Body() createUserDTO: CreateUserDTO) {
    return this.authService.register(createUserDTO);
  }
}
