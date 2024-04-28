import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BillMaterialsService } from './bill-materials.service';
import { CreateBillMaterialDto } from './dto/create-bill-material.dto';
import { UpdateBillMaterialDto } from './dto/update-bill-material.dto';

@Controller('bill-materials')
export class BillMaterialsController {
  constructor(private readonly billMaterialsService: BillMaterialsService) {}

  @Post()
  create(@Body() createBillMaterialDto: CreateBillMaterialDto) {
    return this.billMaterialsService.create(createBillMaterialDto);
  }

  @Get()
  findAll() {
    return this.billMaterialsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.billMaterialsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBillMaterialDto: UpdateBillMaterialDto) {
    return this.billMaterialsService.update(+id, updateBillMaterialDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.billMaterialsService.remove(+id);
  }
}
