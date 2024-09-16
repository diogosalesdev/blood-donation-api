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
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Roles } from '../auth/roles.decorator';
import { RolesGuard } from '../auth/roles.guard';
import { CampaignService } from './campaign.service';
import { CreateCampaignDTO } from './dto/create-campaign.dto';
import { UpdateCampaignDTO } from './dto/update-campaign.dto';

@ApiTags('Campaigns')
@ApiBearerAuth()
@Controller('campaigns')
@UseGuards(JwtAuthGuard, RolesGuard)
export class CampaignController {
  constructor(private readonly campaignService: CampaignService) {}

  @Post()
  @Roles(Role.CLINIC, Role.ADMIN)
  @ApiOperation({ summary: 'Create a new Campaign' })
  @ApiResponse({
    status: 201,
    description: 'Campaign created successfully',
  })
  create(@Body() createCampaignDTO: CreateCampaignDTO) {
    return this.campaignService.create(createCampaignDTO);
  }

  @Get()
  @Roles(Role.CLINIC, Role.ADMIN)
  @ApiOperation({ summary: 'Get all campaigns' })
  @ApiResponse({
    status: 200,
    description: 'List of campaigns retrieved successfully',
  })
  findAll() {
    return this.campaignService.findAll();
  }

  @Get(':id')
  @Roles(Role.CLINIC, Role.ADMIN)
  @ApiOperation({ summary: 'Get campaign details by ID' })
  @ApiResponse({
    status: 200,
    description: 'Campaign details retrieved successfuly',
  })
  findOne(@Param('id') id: string) {
    return this.campaignService.findOne(id);
  }

  @Patch(':id')
  @Roles(Role.CLINIC, Role.ADMIN)
  @ApiOperation({ summary: 'Update a campaign by ID' })
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
  @Roles(Role.CLINIC, Role.ADMIN)
  @ApiOperation({ summary: 'Delete a campaign by ID' })
  @ApiResponse({
    status: 200,
    description: 'Campaign deleted successfuly',
  })
  remove(@Param('id') id: string) {
    return this.campaignService.delete(id);
  }
}
