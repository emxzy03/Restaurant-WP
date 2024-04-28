import { Injectable } from '@nestjs/common';
import { CreateBillMaterialDto } from './dto/create-bill-material.dto';
import { UpdateBillMaterialDto } from './dto/update-bill-material.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BillMaterial } from './entities/bill-material.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BillMaterialsService {
  constructor(
    @InjectRepository(BillMaterial)
    private billMaterialRepository: Repository<BillMaterial>,
  ) {}
  create(createBillMaterialDto: CreateBillMaterialDto) {
    return 'This action adds a new billMaterial';
  }

  findAll() {
    return this.billMaterialRepository.find({
      relations: ['employee', 'billItems'],
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} billMaterial`;
  }

  update(id: number, updateBillMaterialDto: UpdateBillMaterialDto) {
    return `This action updates a #${id} billMaterial`;
  }

  remove(id: number) {
    return `This action removes a #${id} billMaterial`;
  }
}
