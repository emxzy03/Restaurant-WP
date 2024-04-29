import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMenuQueueDto } from './dto/create-menu-queue.dto';
import { Repository } from 'typeorm';
import { MenuQueue } from './entities/menu-queue.entity';
import { UpdateMenuQueueDto } from './dto/update-menu-queue.dto';
import { Receipt } from 'src/receipts/entities/receipt.entity';
import { ReceiptDetail } from 'src/receipts/entities/receiptDetail.entity';

@Injectable()
export class MenuQueuesService {
  constructor(
    @InjectRepository(MenuQueue)
    private menuQueueRepository: Repository<MenuQueue>,
    @InjectRepository(Receipt)
    private receiptRepository: Repository<Receipt>,
    @InjectRepository(ReceiptDetail)
    private receiptDetailRepository: Repository<ReceiptDetail>,
  ) {}

  create(createMenuQueueDto: CreateMenuQueueDto) {
    return this.menuQueueRepository.save(createMenuQueueDto);
  }

  findAll() {
    return this.menuQueueRepository.find({
      relations: ['chef', 'receipt', 'waitress'],
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
        relations: ['chef', 'receipt', 'waitress'],
      });
      menuHisList.push(...menus);
    }
    return menuHisList;
  }

  findOne(id: number) {
    return this.menuQueueRepository.findOne({
      where: { id: id },
      relations: ['chef', 'receipt', 'waitress'],
    });
  }

  update(id: number, updateMenuQueueDto: UpdateMenuQueueDto) {
    return `This action updates a #${id} menuQueue`;
  }

  remove(id: number) {
    return `This action removes a #${id} menuQueue`;
  }
}
