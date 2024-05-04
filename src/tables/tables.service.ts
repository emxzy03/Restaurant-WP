import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Table } from './entities/table.entity';
import { In, Repository } from 'typeorm';
import { MenuQueue } from 'src/menu-queues/entities/menu-queue.entity';
import { Receipt } from 'src/receipts/entities/receipt.entity';

@Injectable()
export class TablesService {
  constructor(
    @InjectRepository(Table)
    private tableRepository: Repository<Table>,
    @InjectRepository(MenuQueue)
    private menuQueueRepository: Repository<MenuQueue>,
    @InjectRepository(Receipt)
    private receiptRepository: Repository<Receipt>,
  ) {}
  create(createTableDto: CreateTableDto) {
    return this.tableRepository.save(createTableDto);
  }

  findAll() {
    return this.tableRepository.find();
  }

  async findMenuQueueInReceiptOnTable(id: number) {
    const table = await this.tableRepository.findOne({ where: { id: id } });
    const receipt = await this.receiptRepository.find({
      where: { table: { id: table.id }, status: 'รอทำ' },
    });
    if (!receipt) {
      return [];
    }
    return await this.menuQueueRepository.find({
      where: {
        receipt: { id: receipt[0].id },
      },
    });
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
