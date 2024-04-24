import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Table } from './entities/table.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TablesService {
  constructor(
    @InjectRepository(Table)
    private tableRepository: Repository<Table>,
  ) {}
  create(createTableDto: CreateTableDto) {
    return this.tableRepository.save(createTableDto);
  }

  findAll() {
    return this.tableRepository.find();
  }

  findOne(id: number) {
    return this.tableRepository.findOneBy({ id: id });
  }

  async update(id: number, updateTableDto: UpdateTableDto) {
    const table = await this.tableRepository.findOneBy({ id: id });
    try {
      let editTable = new Table();
      editTable = table;
      editTable.status = updateTableDto.status;
      return this.tableRepository.save(editTable);
    } catch (e) {
      throw new NotFoundException();
    }
  }
  // update(id: number, updateTableDto: UpdateTableDto) {
  //   return 'test';
  // }

  remove(id: number) {
    return `This action removes a #${id} table`;
  }
}
