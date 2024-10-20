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
import { DonationDoneDTO } from './dto/donationDone-donor.dto';
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

  @Patch(':id')
  // @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Realiza a doação' })
  @ApiResponse({
    status: 200,
    description: 'Do donation',
  })
  donationDone(
    @Param('id') id: string,
    @Body() donationDoneDTO: DonationDoneDTO,
  ) {
    return this.donorService.donationDone(id, donationDoneDTO);
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
