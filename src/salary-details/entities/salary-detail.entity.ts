import { Employee } from 'src/employees/entities/employee.entity';
import { Salary } from 'src/salarys/entities/salary.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class SalaryDetail {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column()
  emp_name?: string;
  @Column()
  emp_whours: Date;
  @Column()
  emp_rate?: number;
  @Column()
  emp_total?: number;
  @ManyToOne(() => Salary, (salary) => salary.salaryDetail)
  salary?: Salary;
  @ManyToOne(() => Employee, (employee) => employee.salaryDetail)
  employee?: Employee;
  @Column()
  emp_id?: number;
  @CreateDateColumn()
  createdDate?: Date;
  @UpdateDateColumn()
  updatedDate?: Date;
  @DeleteDateColumn()
  deletedDate?: Date;
}
