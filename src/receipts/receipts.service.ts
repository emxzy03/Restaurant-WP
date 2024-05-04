import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Receipt } from './entities/receipt.entity';
import { Repository } from 'typeorm';
import { ReceiptDetail } from './entities/receiptDetail.entity';
import { Employee } from 'src/employees/entities/employee.entity';
import { Menu } from 'src/menus/entities/menu.entity';
import { CreateReceiptDto } from './dto/create-receipt.dto';
import { Table } from 'src/tables/entities/table.entity';
import { UpdateReceiptDto } from './dto/update-receipt.dto';
import { MenuQueue } from 'src/menu-queues/entities/menu-queue.entity';

@Injectable()
export class ReceiptsService {
  constructor(
    @InjectRepository(Receipt)
    private receiptRepository: Repository<Receipt>,
    @InjectRepository(ReceiptDetail)
    private receiptDetailRepository: Repository<ReceiptDetail>,
    @InjectRepository(Menu)
    private menuRepository: Repository<Menu>,
    @InjectRepository(Table)
    private tableRepoeitory: Repository<Table>,
    @InjectRepository(MenuQueue)
    private menuQueueRepoeitory: Repository<MenuQueue>,
  ) {}

  async create(createReceiptDto: CreateReceiptDto) {
    const table = await this.tableRepoeitory.findOne({
      where: { id: createReceiptDto.table.id },
    });
    if (!table) {
      throw new Error('Table Id not found');
    }
    const receipt = new Receipt();
    receipt.table = table;
    await this.receiptRepository.save(receipt);

    for (const od of createReceiptDto.receiptDetail) {
      const receiptDetail = new ReceiptDetail();
      receiptDetail.quantity = od.quantity;
      receiptDetail.menu = await this.menuRepository.findOneBy({
        id: od.menuId,
      });
      if (!receiptDetail.menu) {
        throw new Error('Menu ID not found');
      }
      receiptDetail.name = receiptDetail.menu.name;
      receiptDetail.price = receiptDetail.menu.price;
      receiptDetail.total = receiptDetail.price * receiptDetail.quantity;
      receiptDetail.receipt = receipt; // อ้างกลับ
      await this.receiptDetailRepository.save(receiptDetail);
      receipt.subtotal += receiptDetail.total;
      // receipt.total = receipt.total - receipt.discount;

      // POST MenuQueue
      // const menuQueue = new MenuQueue();
      // menuQueue.menu = receiptDetail.menu;
      // menuQueue.name = receiptDetail.name;
      // menuQueue.quantity = receiptDetail.quantity;
      // menuQueue.menuId = receiptDetail.menu.id;
      // menuQueue.receipt = receiptDetail.receipt;
      // await this.menuQueueRepoeitory.save(menuQueue);
    }
    // await this.menuQueueRepoeitory.save()

    return await this.receiptRepository.save(receipt);
  }

  findAll() {
    return this.receiptRepository.find({
      relations: ['table', 'receiptDetail'],
    });
  }

  findOne(id: number) {
    return this.receiptRepository.findOne({
      where: { id: id },
      relations: ['table', 'receiptDetail'],
    });
  }

  findOneByTableId(id: number) {
    return this.receiptRepository
      .createQueryBuilder('receipt')
      .andWhere('table.id = :id', { id: id })
      .andWhere('receipt.status NOT IN (:...statuses)', {
        statuses: ['เสร็จสิ้น'],
      })
      .leftJoinAndSelect('receipt.table', 'table')
      .leftJoinAndSelect('receipt.receiptDetail', 'receiptDetail')
      .getOne();
  }
  findOneByUuid(id: string) {
    return this.receiptRepository.findOne({
      where: { uuidI: id },
      relations: ['table', 'receiptDetail'],
    });
  }

  async update(id: number, updateReceiptDto: UpdateReceiptDto) {
    const receipt = await this.receiptRepository.findOne({ where: { id: id } });
    if (!receipt) {
      throw new NotFoundException();
    }

    receipt.discount = updateReceiptDto.discount;
    receipt.total = updateReceiptDto.total;
    receipt.received = updateReceiptDto.received;
    receipt.empid = updateReceiptDto.empid;
    receipt.payment = updateReceiptDto.payment;
    receipt.status = updateReceiptDto.status;
    return this.receiptRepository.save(receipt);
  }

  async updateReceiptDetail(id: number, updateReceiptDto: UpdateReceiptDto) {
    const receipt = await this.receiptRepository.findOne({ where: { id: id } });
    if (!receipt) {
      throw new NotFoundException();
    }
    // console.log('receipt => ', receipt);
    for (const rd of updateReceiptDto.receiptDetail) {
      const receiptDetail = new ReceiptDetail();
      receiptDetail.quantity = rd.quantity;
      receiptDetail.menu = await this.menuRepository.findOneBy({
        id: rd.menuId,
      });
      receiptDetail.name = receiptDetail.menu.name;
      receiptDetail.price = receiptDetail.menu.price;
      receiptDetail.total = receiptDetail.price * receiptDetail.quantity;
      receiptDetail.receipt = receipt;
      await this.receiptDetailRepository.save(receiptDetail);
      receipt.subtotal += receiptDetail.total;
    }
    return await this.receiptRepository.save(receipt);
  }

  remove(id: number) {
    return `This action removes a #${id} receipt`;
  }
}
