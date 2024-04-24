import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Receipt } from './entities/receipt.entity';
import { getManager, Repository } from 'typeorm';
import { ReceiptDetail } from './entities/receiptDetail.entity';
import { Employee } from 'src/employees/entities/employee.entity';
import { Menu } from 'src/menus/entities/menu.entity';
import { CreateReceiptDto } from './dto/create-receipt.dto';
import { Table } from 'src/tables/entities/table.entity';
import { UpdateReceiptDto } from './dto/update-receipt.dto';
import { query } from 'express';

@Injectable()
export class ReceiptsService {
  constructor(
    @InjectRepository(Receipt)
    private receiptRepository: Repository<Receipt>,
    @InjectRepository(ReceiptDetail)
    private receiptDetailRepository: Repository<ReceiptDetail>,
    @InjectRepository(Employee)
    private employeeRepoeitory: Repository<Employee>,
    @InjectRepository(Menu)
    private menuRepository: Repository<Menu>,
    @InjectRepository(Table)
    private tableRepoeitory: Repository<Table>,
  ) {}

  async create(createReceiptDto: CreateReceiptDto) {
    const table = await this.tableRepoeitory.findOneBy({
      id: createReceiptDto.table_id,
    });
    if (!table) {
      throw new Error('Table ID not found');
    }

    const receipt = new Receipt();
    receipt.table = table;
    receipt.subtotal = createReceiptDto.subtotal;
    receipt.discount = createReceiptDto.discount;
    receipt.total = createReceiptDto.total;
    receipt.received = createReceiptDto.received;
    receipt.change = createReceiptDto.change;
    receipt.status = createReceiptDto.status;
    await this.receiptRepository.save(receipt);

    for (const od of createReceiptDto.receiptDetail) {
      const receiptDetail = new ReceiptDetail();
      receiptDetail.quantity = od.quantity;
      receiptDetail.menu = await this.menuRepository.findOneBy({
        id: od.menu_id,
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
    }
    // await this.receiptRepoeitory.save(receipt);
    return this.receiptRepository.save(receipt);
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

  async findOneByTableId(id: number) {
    return this.receiptRepository.findOne({
      where: { table: { id: id } },
      relations: ['table', 'receiptDetail'],
    });
  }

  update(id: number, updateReceiptDto: UpdateReceiptDto) {
    return `This action updates a #${id} receipt`;
  }

  remove(id: number) {
    return `This action removes a #${id} receipt`;
  }
}
