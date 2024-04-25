import { Module } from '@nestjs/common';
import { CheckMaterialsService } from './check-materials.service';
import { CheckMaterialsController } from './check-materials.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CheckMaterial } from './entities/check-material.entity';
import { Employee } from 'src/employees/entities/employee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CheckMaterial, Employee])],
  controllers: [CheckMaterialsController],
  providers: [CheckMaterialsService],
})
export class CheckMaterialsModule {}
