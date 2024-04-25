import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Salary } from 'src/salarys/entities/salary.entity';
import { CheckMaterial } from 'src/check-materials/entities/check-material.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Employee, Salary, CheckMaterial])],
  controllers: [EmployeesController],
  providers: [EmployeesService],
})
export class EmployeesModule {}
