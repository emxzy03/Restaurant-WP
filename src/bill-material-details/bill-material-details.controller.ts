import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BillMaterialDetailsService } from './bill-material-details.service';
import { CreateBillMaterialDetailDto } from './dto/create-bill-material-detail.dto';
import { UpdateBillMaterialDetailDto } from './dto/update-bill-material-detail.dto';

@Controller('bill-material-details')
export class BillMaterialDetailsController {
  constructor(
    private readonly billMaterialDetailsService: BillMaterialDetailsService,
  ) {}

  @Post()
  create(@Body() createBillMaterialDetailDto: CreateBillMaterialDetailDto) {
    return this.billMaterialDetailsService.create(createBillMaterialDetailDto);
  }

  @Get()
  findAll() {
    return this.billMaterialDetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.billMaterialDetailsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBillMaterialDetailDto: UpdateBillMaterialDetailDto,
  ) {
    return this.billMaterialDetailsService.update(
      +id,
      updateBillMaterialDetailDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.billMaterialDetailsService.remove(+id);
  }
}
