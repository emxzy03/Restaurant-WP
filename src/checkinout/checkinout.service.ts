import { Injectable } from '@nestjs/common';
import { CreateCheckinoutDto } from './dto/create-checkinout.dto';
import { UpdateCheckinoutDto } from './dto/update-checkinout.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Checkinout } from './entities/checkinout.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CheckinoutService {
  constructor(
    @InjectRepository(Checkinout)
    private checkIORepository: Repository<Checkinout>,
  ) {}

  create(createCheckinoutDto: CreateCheckinoutDto) {
    return this.checkIORepository.save(createCheckinoutDto);
  }

  findAll() {
    return this.checkIORepository.find({
      relations: ['employee', 'salaryDetail'],
    });
  }

  findOne(id: number) {
    return this.checkIORepository.find({
      relations: ['employee', 'salaryDetail'],
      where: { id: id },
    });
  }

  update(id: number, updateCheckinoutDto: UpdateCheckinoutDto) {
    return `This action updates a #${id} checkinout`;
  }

  remove(id: number) {
    return `This action removes a #${id} checkinout`;
  }
}
