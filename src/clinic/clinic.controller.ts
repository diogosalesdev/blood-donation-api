import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ClinicService } from './clinic.service';
import { CreateClinicDTO } from './dto/create-clinic.dto';
import { UpdateClinicDTO } from './dto/update-clinic.dto';

@ApiTags('Clinics')
@Controller('clinics')
export class ClinicController {
  constructor(private readonly clinicService: ClinicService) {}

  @Post()
  @ApiOperation({ summary: 'Cria uma nova clínica.' })
  @ApiResponse({
    status: 201,
    description: 'Clinic created successfuly.',
  })
  create(@Body() createClinicDTO: CreateClinicDTO) {
    return this.clinicService.create(createClinicDTO);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todas as clínicas' })
  @ApiResponse({
    status: 200,
    description: 'List of cliinics retrieved successfuly.',
  })
  findAll() {
    return this.clinicService.findAll();
  }

  @Get('all')
  @ApiOperation({
    summary: 'Lista todas as clínicas e suas campanhas e usuários',
  })
  @ApiResponse({
    status: 200,
    description: 'List of cliinics retrieved successfuly.',
  })
  findAllCampaignsAndUsers() {
    return this.clinicService.findAllCampaignsAndUsers();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca uma clínica específica' })
  @ApiResponse({
    status: 200,
    description: 'Clinic details retrieved successfuly',
  })
  findOne(@Param('id') id: string) {
    return this.clinicService.findOne(id);
  }

  @Get('all/:id')
  @ApiOperation({
    summary: 'Busca uma clínica específica e sesu usuários e campanhas',
  })
  @ApiResponse({
    status: 200,
    description: 'Clinic details retrieved successfuly',
  })
  findAllUsers(@Param('id') id: string) {
    return this.clinicService.findAllUsers(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Altera uma clínica específica' })
  @ApiResponse({
    status: 200,
    description: 'Update a clinic by ID',
  })
  update(@Param('id') id: string, @Body() updateClinicDTO: UpdateClinicDTO) {
    return this.clinicService.update(id, updateClinicDTO);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove uma clínica.' })
  @ApiResponse({
    status: 200,
    description: 'Remove a clinic',
  })
  remove(@Param('id') id: string) {
    return this.clinicService.delete(id);
  }
}
