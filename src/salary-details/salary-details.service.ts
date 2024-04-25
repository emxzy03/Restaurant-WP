import { Injectable } from '@nestjs/common';
import { CreateSalaryDetailDto } from './dto/create-salary-detail.dto';
import { UpdateSalaryDetailDto } from './dto/update-salary-detail.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SalaryDetail } from './entities/salary-detail.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SalaryDetailsService {
  constructor(
    @InjectRepository(SalaryDetail)
    private salaryDerailRepository: Repository<SalaryDetail>,
  ) {}

  create(createSalaryDetailDto: CreateSalaryDetailDto) {
    return this.salaryDerailRepository.save(createSalaryDetailDto);
  }

  findAll() {
    return this.salaryDerailRepository.find({
      relations: ['salary', 'employee'],
    });
  }

  findOne(id: number) {
    return this.salaryDerailRepository.findOne({ where: { id: id } });
  }

  update(id: number, updateSalaryDetailDto: UpdateSalaryDetailDto) {
    return `This action updates a #${id} salaryDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} salaryDetail`;
  }
}
