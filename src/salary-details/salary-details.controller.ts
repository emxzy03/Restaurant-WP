import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SalaryDetailsService } from './salary-details.service';
import { CreateSalaryDetailDto } from './dto/create-salary-detail.dto';
import { UpdateSalaryDetailDto } from './dto/update-salary-detail.dto';

@Controller('salary-details')
export class SalaryDetailsController {
  constructor(private readonly salaryDetailsService: SalaryDetailsService) {}

  @Post()
  create(@Body() createSalaryDetailDto: CreateSalaryDetailDto) {
    return this.salaryDetailsService.create(createSalaryDetailDto);
  }

  @Get()
  findAll() {
    return this.salaryDetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.salaryDetailsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSalaryDetailDto: UpdateSalaryDetailDto,
  ) {
    return this.salaryDetailsService.update(+id, updateSalaryDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.salaryDetailsService.remove(+id);
  }
}
