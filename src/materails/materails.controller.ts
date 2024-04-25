import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MaterailsService } from './materails.service';
import { CreateMaterailDto } from './dto/create-materail.dto';
import { UpdateMaterailDto } from './dto/update-materail.dto';

@Controller('materials')
export class MaterailsController {
  constructor(private readonly materailsService: MaterailsService) {}

  @Post()
  create(@Body() createMaterailDto: CreateMaterailDto) {
    return this.materailsService.create(createMaterailDto);
  }

  @Get()
  findAll() {
    return this.materailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.materailsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMaterailDto: UpdateMaterailDto,
  ) {
    return this.materailsService.update(+id, updateMaterailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.materailsService.remove(+id);
  }
}
