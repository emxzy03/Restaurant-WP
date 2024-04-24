import { Module } from '@nestjs/common';
import { ReceiptsService } from './receipts.service';
import { ReceiptsController } from './receipts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Receipt } from './entities/receipt.entity';
import { Employee } from 'src/employees/entities/employee.entity';
import { ReceiptDetail } from './entities/receiptDetail.entity';
import { Menu } from 'src/menus/entities/menu.entity';
import { Table } from 'src/tables/entities/table.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Receipt, ReceiptDetail, Employee, Menu, Table]),
  ],
  controllers: [ReceiptsController],
  providers: [ReceiptsService],
})
export class ReceiptsModule {}
