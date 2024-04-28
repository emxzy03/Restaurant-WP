import { Module } from '@nestjs/common';
import { BillMaterialsService } from './bill-materials.service';
import { BillMaterialsController } from './bill-materials.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BillMaterial } from './entities/bill-material.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BillMaterial])],
  controllers: [BillMaterialsController],
  providers: [BillMaterialsService],
})
export class BillMaterialsModule {}
