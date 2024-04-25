import { Injectable } from '@nestjs/common';
import { CreateMaterailDto } from './dto/create-materail.dto';
import { UpdateMaterailDto } from './dto/update-materail.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Materail } from './entities/materail.entity';

@Injectable()
export class MaterailsService {
  constructor(
    @InjectRepository(Materail)
    private matertailRepository: Repository<Materail>,
  ) {}
  create(createMaterailDto: CreateMaterailDto) {
    return this.matertailRepository.save(createMaterailDto);
  }

  findAll() {
    return this.matertailRepository.find();
  }

  findOne(id: number) {
    return this.matertailRepository.findOne({ where: { id: id } });
  }

  update(id: number, updateMaterailDto: UpdateMaterailDto) {
    return `This action updates a #${id} materail`;
  }

  remove(id: number) {
    return `This action removes a #${id} materail`;
  }
}
