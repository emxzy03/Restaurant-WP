import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMenuQueueDto } from './dto/create-menu-queue.dto';
import { Repository } from 'typeorm';
import { MenuQueue } from './entities/menu-queue.entity';
import { UpdateMenuQueueDto } from './dto/update-menu-queue.dto';

@Injectable()
export class MenuQueuesService {
  constructor(
    @InjectRepository(MenuQueue)
    private menuQueueRepository: Repository<MenuQueue>,
  ) {}

  create(createMenuQueueDto: CreateMenuQueueDto) {
    return this.menuQueueRepository.save(createMenuQueueDto);
  }

  findAll() {
    return this.menuQueueRepository.find({ relations: ['chef', 'receipt'] });
  }

  findOne(id: number) {
    return this.menuQueueRepository.findOne({
      where: { id: id },
      relations: ['chef', 'receipt'],
    });
  }

  update(id: number, updateMenuQueueDto: UpdateMenuQueueDto) {
    return `This action updates a #${id} menuQueue`;
  }

  remove(id: number) {
    return `This action removes a #${id} menuQueue`;
  }
}
