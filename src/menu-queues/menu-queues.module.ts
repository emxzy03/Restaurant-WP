import { Module } from '@nestjs/common';
import { MenuQueuesService } from './menu-queues.service';
import { MenuQueuesController } from './menu-queues.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuQueue } from './entities/menu-queue.entity';
import { Receipt } from 'src/receipts/entities/receipt.entity';
import { ReceiptDetail } from 'src/receipts/entities/receiptDetail.entity';
import { Table } from 'src/tables/entities/table.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([MenuQueue, Receipt, ReceiptDetail, Table]),
  ],
  controllers: [MenuQueuesController],
  providers: [MenuQueuesService],
})
export class MenuQueuesModule {}
