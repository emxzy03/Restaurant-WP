import { BillMaterialDetail } from 'src/bill-material-details/entities/bill-material-detail.entity';
import { Employee } from 'src/employees/entities/employee.entity';
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
export class BillMaterial {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  shop_name: string;

  @CreateDateColumn()
  date?: Date;

  @Column()
  total?: number;

  @Column()
  buy: number;

  @Column()
  change?: number;

  @ManyToOne(() => Employee, (emp) => emp.billMaterial)
  employee?: Employee;

  @Column()
  employeeId?: number;

  @OneToMany(() => BillMaterialDetail, (bmd) => bmd.bill)
  billItems?: BillMaterialDetail[];

  @UpdateDateColumn()
  updatedDate?: Date;

  @DeleteDateColumn()
  deletedDate?: Date;
}
