import { Module } from '@nestjs/common';
import { TablesService } from './tables.service';
import { TablesController } from './tables.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Table } from './entities/table.entity';
import { Receipt } from 'src/receipts/entities/receipt.entity';
import { MenuQueue } from 'src/menu-queues/entities/menu-queue.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Table, Receipt, MenuQueue])],
  controllers: [TablesController],
  providers: [TablesService],
})
export class TablesModule {}
