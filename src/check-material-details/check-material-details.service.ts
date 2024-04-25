import { Injectable } from '@nestjs/common';
import { CreateCheckMaterialDetailDto } from './dto/create-check-material-detail.dto';
import { UpdateCheckMaterialDetailDto } from './dto/update-check-material-detail.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CheckMaterial } from 'src/check-materials/entities/check-material.entity';
import { CheckMaterialDetail } from './entities/check-material-detail.entity';

@Injectable()
export class CheckMaterialDetailsService {
  constructor(
    @InjectRepository(CheckMaterialDetail)
    private cmdRepository: Repository<CheckMaterial>,
  ) {}
  create(createCheckMaterialDetailDto: CreateCheckMaterialDetailDto) {
    return this.cmdRepository.save(createCheckMaterialDetailDto);
  }

  findAll() {
    return this.cmdRepository.find({ relations: ['material', 'bill'] });
  }

  findOne(id: number) {
    return this.cmdRepository.findOne({ where: { id: id } });
  }

  update(
    id: number,
    updateCheckMaterialDetailDto: UpdateCheckMaterialDetailDto,
  ) {
    return `This action updates a #${id} checkMaterialDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} checkMaterialDetail`;
  }
}
