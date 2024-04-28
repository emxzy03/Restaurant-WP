import { Injectable } from '@nestjs/common';
import { CreateBillMaterialDetailDto } from './dto/create-bill-material-detail.dto';
import { UpdateBillMaterialDetailDto } from './dto/update-bill-material-detail.dto';

@Injectable()
export class BillMaterialDetailsService {
  create(createBillMaterialDetailDto: CreateBillMaterialDetailDto) {
    return 'This action adds a new billMaterialDetail';
  }

  findAll() {
    return `This action returns all billMaterialDetails`;
  }

  findOne(id: number) {
    return `This action returns a #${id} billMaterialDetail`;
  }

  update(id: number, updateBillMaterialDetailDto: UpdateBillMaterialDetailDto) {
    return `This action updates a #${id} billMaterialDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} billMaterialDetail`;
  }
}
