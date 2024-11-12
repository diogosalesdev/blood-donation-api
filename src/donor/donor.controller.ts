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
import { CurrentUser } from '../auth/current-user-decorator';
import { DonorService } from './donor.service';
import { CreateDonorDTO } from './dto/create-donor.dto';
import { UpdateDonorDTO } from './dto/update-donor.dto';

@ApiTags('Donors')
@Controller('donors')
export class DonorController {
  constructor(private readonly donorService: DonorService) {}

  @Post()
  @ApiOperation({ summary: 'Cadastra um(a) novo(a) doador(a)' })
  @ApiResponse({
    status: 201,
    description: 'Cadastra um(a) novo(a) doador(a)',
  })
  create(@CurrentUser() @Body() createDonorDTO: CreateDonorDTO) {
    return this.donorService.create(createDonorDTO);
  }

  @Get()
  // @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Lista todos os doadores' })
  @ApiResponse({
    status: 200,
    description: 'Get all donors',
  })
  findAll() {
    return this.donorService.findAll();
  }

  @Get('all')
  @ApiOperation({
    summary: 'Lista todos os doadores suas campanhas registradas e clinicas',
  })
  @ApiResponse({
    status: 200,
    description: 'All donors listed',
  })
  findWithCampaignsAndClinics() {
    return this.donorService.findWithCampaignsAndClinics();
  }

  @Get(':id')
  // @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Busca um(a) doador(a) pelo id' })
  @ApiResponse({
    status: 200,
    description: 'Get a donor by ID',
  })
  findOne(@Param('id') id: string) {
    return this.donorService.findOne(id);
  }

  @Get('all/:id')
  // @UseGuards(AuthGuard('jwt'))
  @ApiOperation({
    summary: 'Busca um(a) doador(a) pelo id, sua campanha e respectiva clínica',
  })
  @ApiResponse({
    status: 200,
    description: 'Donor listed',
  })
  findWithCapaignsAndClinicsById(@Param('id') id: string) {
    return this.donorService.findWithCapaignsAndClinicsById(id);
  }

  @Patch(':id')
  // @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Atualiza um(a) doador(a)' })
  @ApiResponse({
    status: 200,
    description: 'Update a donor by ID',
  })
  update(@Param('id') id: string, @Body() updateDonorDTO: UpdateDonorDTO) {
    return this.donorService.update(id, updateDonorDTO);
  }

  @Patch('register/:id/:campaignId')
  // @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Se registra em uma campanha' })
  @ApiResponse({
    status: 200,
    description: 'Register done successfuly!',
  })
  registerInCampaign(
    @Param('id') id: string,
    @Param('campaignId') campaignId: string,
  ) {
    return this.donorService.registerInCampaign(id, campaignId);
  }

  @Patch('donation/:id/:campaignId')
  // @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Realiza a doação' })
  @ApiResponse({
    status: 200,
    description: 'Do donation',
  })
  donationDone(
    @Param('id') id: string,
    @Param('campaignId') campaignId: string,
  ) {
    return this.donorService.donationDone(id, campaignId);
  }

  @Delete(':id')
  // @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Exclui um(a) doador(a)' })
  @ApiResponse({
    status: 200,
    description: 'Remove a donor',
  })
  remove(@Param('id') id: string) {
    return this.donorService.delete(id);
  }
}
