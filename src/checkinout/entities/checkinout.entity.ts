import e from 'express';
import { check } from 'prettier';
import { Employee } from 'src/employees/entities/employee.entity';
import { SalaryDetail } from 'src/salary-details/entities/salary-detail.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Checkinout {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  datetimeIn?: Date;

  @Column()
  datetimeOut?: Date;

  @Column()
  total_hour?: number;

  @ManyToOne(() => Employee, (emp) => emp.checkInout)
  employee?: Employee;

  @Column()
  employeeId?: number;

  @ManyToOne(() => SalaryDetail, (salaryDetail) => salaryDetail.id)
  salaryDetail?: SalaryDetail;

  @Column()
  salaryDetailId?: number;

  @UpdateDateColumn()
  updatedDate?: Date;

  @DeleteDateColumn()
  deletedDate?: Date;
}
