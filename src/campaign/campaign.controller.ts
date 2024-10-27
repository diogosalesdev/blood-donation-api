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
import { CampaignService } from './campaign.service';
import { CreateCampaignDTO } from './dto/create-campaign.dto';
import { UpdateCampaignDTO } from './dto/update-campaign.dto';

@ApiTags('Campaigns')
@Controller('campaigns')
export class CampaignController {
  constructor(private readonly campaignService: CampaignService) {}

  @Post()
  @ApiOperation({ summary: 'Cria uma nova campanha' })
  @ApiResponse({
    status: 201,
    description: 'Campaign created successfully',
  })
  create(@Body() createCampaignDTO: CreateCampaignDTO) {
    return this.campaignService.create(createCampaignDTO);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todas as campanhas' })
  @ApiResponse({
    status: 200,
    description: 'List of campaigns retrieved successfully',
  })
  findAll() {
    return this.campaignService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca uma campanha pelo id' })
  @ApiResponse({
    status: 200,
    description: 'Campaign details retrieved successfuly',
  })
  findOne(@Param('id') id: string) {
    return this.campaignService.findOne(id);
  }

  @Get(':city')
  @ApiOperation({ summary: 'Lista campanhas por cidade' })
  @ApiResponse({
    status: 200,
    description: 'List of campaigns retrieved successfully',
  })
  findCampaignByCity(@Param('city') city: string) {
    return this.campaignService.findCampapaignByCity(city);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Altera uma camapnha específica' })
  @ApiResponse({
    status: 200,
    description: 'Campaign updated successfuly',
  })
  update(
    @Param('id') id: string,
    @Body() updateCampaignDTO: UpdateCampaignDTO,
  ) {
    return this.campaignService.update(id, updateCampaignDTO);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove uma campanha' })
  @ApiResponse({
    status: 200,
    description: 'Campaign deleted successfuly',
  })
  remove(@Param('id') id: string) {
    return this.campaignService.delete(id);
  }
}
