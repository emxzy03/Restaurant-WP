import { Employee } from 'src/employees/entities/employee.entity';
import { SalaryDetail } from 'src/salary-details/entities/salary-detail.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Salary {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  date_start: string;

  @Column()
  date_end: string;

  @CreateDateColumn()
  date_salary: Date;

  @Column()
  total?: number;

  @OneToMany(() => SalaryDetail, (salaryDetail) => salaryDetail.salary)
  salaryDetail: SalaryDetail[];
  // @Column()
  // cionum?: number[];
  @UpdateDateColumn()
  updatedDate?: Date;
  @DeleteDateColumn()
  deletedDate?: Date;
}
