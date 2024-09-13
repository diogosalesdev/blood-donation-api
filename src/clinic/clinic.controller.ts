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
  @ApiOperation({ summary: 'Create a new clinic.' })
  @ApiResponse({
    status: 201,
    description: 'Clinic created successfuly.',
  })
  create(@Body() createClinicDTO: CreateClinicDTO) {
    return this.clinicService.create(createClinicDTO);
  }

  @Get()
  @ApiOperation({ summary: 'Get all clinics.' })
  @ApiResponse({
    status: 200,
    description: 'List of cliinics retrieved successfuly.',
  })
  findAll() {
    return this.clinicService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a clinic details by ID' })
  @ApiResponse({
    status: 200,
    description: 'Clinic details retrieved successfuly',
  })
  findOne(@Param('id') id: string) {
    return this.clinicService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a clinic by ID' })
  @ApiResponse({
    status: 200,
    description: 'Update a clinic by ID',
  })
  update(@Param('id') id: string, @Body() updateClinicDTO: UpdateClinicDTO) {
    return this.clinicService.update(id, updateClinicDTO);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove a clinic.' })
  @ApiResponse({
    status: 200,
    description: 'Remove a clinic',
  })
  remove(@Param('id') id: string) {
    return this.clinicService.delete(id);
  }
}
