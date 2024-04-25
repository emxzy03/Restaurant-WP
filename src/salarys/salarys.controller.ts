import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SalarysService } from './salarys.service';
import { CreateSalaryDto } from './dto/create-salary.dto';
import { UpdateSalaryDto } from './dto/update-salary.dto';

@Controller('salarys')
export class SalarysController {
  constructor(private readonly salarysService: SalarysService) {}

  @Post()
  create(@Body() createSalaryDto: CreateSalaryDto) {
    return this.salarysService.create(createSalaryDto);
  }

  @Get()
  findAll() {
    return this.salarysService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.salarysService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSalaryDto: UpdateSalaryDto) {
    return this.salarysService.update(+id, updateSalaryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.salarysService.remove(+id);
  }
}
