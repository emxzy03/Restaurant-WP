import { Employee } from 'src/employees/entities/employee.entity';
import { Salary } from 'src/salarys/entities/salary.entity';

export class CreateSalaryDetailDto {
  emp_name?: string;
  emp_whours: Date;
  emp_rate?: number;
  emp_total?: number;
  salaryId?: Salary;
  employeeId?: Employee;
  emp_id?: number;
  createdDate?: Date;
  updatedDate?: Date;
  deletedDate?: Date;
}
