import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CurrentUser } from '../auth/current-user-decorator';
import { DonorService } from './donor.service';
import { CreateDonorDTO } from './dto/create-donor.dto';
import { UpdateDonorDTO } from './dto/update-donor.dto';

@ApiTags('Donors')
@ApiBearerAuth()
@Controller('donors')
@UseGuards(JwtAuthGuard, RolesGuard)
export class DonorController {
  constructor(private readonly donorService: DonorService) {}

  @Post()
  @Roles(Role.USER, Role.ADMIN)
  @ApiOperation({ summary: 'Create a new donor' })
  @ApiResponse({
    status: 201,
    description: 'Create a new donor',
  })
  create(@CurrentUser() @Body() createDonorDTO: CreateDonorDTO) {
    return this.donorService.create(createDonorDTO);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Get all donors' })
  @ApiResponse({
    status: 200,
    description: 'Get all donors',
  })
  findAll() {
    return this.donorService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Get a donor by ID' })
  @ApiResponse({
    status: 200,
    description: 'Get a donor by ID',
  })
  findOne(@Param('id') id: string) {
    return this.donorService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Update a donor by ID' })
  @ApiResponse({
    status: 200,
    description: 'Update a donor by ID',
  })
  update(@Param('id') id: string, @Body() updateDonorDTO: UpdateDonorDTO) {
    return this.donorService.update(id, updateDonorDTO);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Remove a donor' })
  @ApiResponse({
    status: 200,
    description: 'Remove a donor',
  })
  remove(@Param('id') id: string) {
    return this.donorService.delete(id);
  }
}
