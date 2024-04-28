import { Module } from '@nestjs/common';
import { BillMaterialDetailsService } from './bill-material-details.service';
import { BillMaterialDetailsController } from './bill-material-details.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BillMaterialDetail } from './entities/bill-material-detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BillMaterialDetail])],
  controllers: [BillMaterialDetailsController],
  providers: [BillMaterialDetailsService],
})
export class BillMaterialDetailsModule {}
