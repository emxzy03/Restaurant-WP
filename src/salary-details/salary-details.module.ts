import { Module } from '@nestjs/common';
import { SalaryDetailsService } from './salary-details.service';
import { SalaryDetailsController } from './salary-details.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalaryDetail } from './entities/salary-detail.entity';
import { Salary } from 'src/salarys/entities/salary.entity';
import { Employee } from 'src/employees/entities/employee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SalaryDetail, Salary, Employee])],
  controllers: [SalaryDetailsController],
  providers: [SalaryDetailsService],
})
export class SalaryDetailsModule {}
