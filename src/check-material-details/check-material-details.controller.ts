import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CheckMaterialDetailsService } from './check-material-details.service';
import { CreateCheckMaterialDetailDto } from './dto/create-check-material-detail.dto';
import { UpdateCheckMaterialDetailDto } from './dto/update-check-material-detail.dto';

@Controller('check-material-details')
export class CheckMaterialDetailsController {
  constructor(private readonly checkMaterialDetailsService: CheckMaterialDetailsService) {}

  @Post()
  create(@Body() createCheckMaterialDetailDto: CreateCheckMaterialDetailDto) {
    return this.checkMaterialDetailsService.create(createCheckMaterialDetailDto);
  }

  @Get()
  findAll() {
    return this.checkMaterialDetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.checkMaterialDetailsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCheckMaterialDetailDto: UpdateCheckMaterialDetailDto) {
    return this.checkMaterialDetailsService.update(+id, updateCheckMaterialDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.checkMaterialDetailsService.remove(+id);
  }
}
