import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMenuQueueDto } from './dto/create-menu-queue.dto';
import { Repository } from 'typeorm';
import { MenuQueue } from './entities/menu-queue.entity';
import { UpdateMenuQueueDto } from './dto/update-menu-queue.dto';
import { Receipt } from 'src/receipts/entities/receipt.entity';
import { ReceiptDetail } from 'src/receipts/entities/receiptDetail.entity';
import { Table } from 'src/tables/entities/table.entity';

@Injectable()
export class MenuQueuesService {
  constructor(
    @InjectRepository(MenuQueue)
    private menuQueueRepository: Repository<MenuQueue>,
    @InjectRepository(Receipt)
    private receiptRepository: Repository<Receipt>,
    @InjectRepository(Table)
    private tableRepository: Repository<Table>,
    @InjectRepository(ReceiptDetail)
    private receiptDetailRepository: Repository<ReceiptDetail>,
  ) {}

  create(createMenuQueueDto: CreateMenuQueueDto) {
    return this.menuQueueRepository.save(createMenuQueueDto);
  }

  async findAll() {
    return this.menuQueueRepository.find({
      relations: ['chef', 'receipt', 'receipt.table', 'waitress'],
    });
  }

  async findByConditionId(con: number) {
    // const menu = await
    return await this.menuQueueRepository.find({
      where: [{ menuId: con }, { menuId: 3 }],
      relations: ['chef', 'receipt', 'receipt.table', 'waitress', 'table'],
    });
  }
  async findMenuHistory() {
    const receipts: Receipt[] = await this.receiptRepository.find({
      where: [{ status: 'รอชำระเงิน' }, { status: 'เสร็จสิ้น' }],
    });
    const menuHisList: MenuQueue[] = [];
    for (const i of receipts) {
      const menus: MenuQueue[] = await this.menuQueueRepository.find({
        where: { receipt: i.menuQueue, status: 'เสร็จสิ้น' },
        relations: ['chef', 'receipt', 'receipt.table', 'waitress'],
      });
      menuHisList.push(...menus);
    }
    return menuHisList;
  }

  async findMenuQueueServ() {
    return await this.menuQueueRepository.find({
      where: { status: 'รอเสิร์ฟ' },
    });
  }
  async findMenuQueueServByTableNum(num: number) {
    // const table = await this.tableRepository.findOne({ where: { num: num } });
    return await this.menuQueueRepository.find({
      where: {
        status: 'รอเสิร์ฟ',
        receipt: {
          table: { num: num },
        },
      },
    });
  }

  findOne(id: number) {
    return this.menuQueueRepository.findOne({
      where: { id: id },
      relations: ['chef', 'receipt', 'receipt.table', 'waitress'],
    });
  }

  async updateStatusMQ(id: number, st: string) {
    const menuQueue = await this.menuQueueRepository.findOne({
      where: { id: id },
    });
    menuQueue.status = st;
    return this.menuQueueRepository.save(menuQueue);
  }

  async update(id: number, updateMenuQueueDto: UpdateMenuQueueDto) {
    const menu = await this.menuQueueRepository.findOne({ where: { id: id } });
    const receipt = await this.receiptDetailRepository.findOne({
      where: { id: updateMenuQueueDto.receiptId },
    });
    const menuQueueUpdate = { ...menu, updateMenuQueueDto };
    menuQueueUpdate.receipt = receipt;
    return await this.menuQueueRepository.save(menuQueueUpdate);
  }

  async remove(id: number) {
    const item = await this.menuQueueRepository.findOne({ where: { id: id } });
    if (!item) {
      throw new NotFoundException();
    }
    return this.menuQueueRepository.delete(item);
  }
}
