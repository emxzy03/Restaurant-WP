import { Injectable } from '@nestjs/common';
import { CreateCheckMaterialDto } from './dto/create-check-material.dto';
import { UpdateCheckMaterialDto } from './dto/update-check-material.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CheckMaterial } from './entities/check-material.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CheckMaterialsService {
  constructor(
    @InjectRepository(CheckMaterial)
    private cmRepository: Repository<CheckMaterial>,
  ) {}
  create(createCheckMaterialDto: CreateCheckMaterialDto) {
    return this.cmRepository.save(createCheckMaterialDto);
  }

  findAll() {
    return this.cmRepository.find({ relations: ['checkItems', 'employee'] });
  }

  findOne(id: number) {
    return this.cmRepository.findOne({ where: { id: id } });
  }

  update(id: number, updateCheckMaterialDto: UpdateCheckMaterialDto) {
    return `This action updates a #${id} checkMaterial`;
  }

  remove(id: number) {
    return `This action removes a #${id} checkMaterial`;
  }
}
