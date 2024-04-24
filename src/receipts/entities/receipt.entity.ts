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
import { ReceiptDetail } from './receiptDetail.entity';
import { Employee } from 'src/employees/entities/employee.entity';
import { Table } from 'src/tables/entities/table.entity';
@Entity()
export class Receipt {
  @PrimaryGeneratedColumn()
  id?: number;
  @ManyToOne(() => Table, (table) => table.receipt)
  table?: Table;
  @CreateDateColumn()
  date?: Date;
  @Column()
  subtotal?: number;
  @Column()
  discount?: number;
  @Column()
  total?: number;
  @Column()
  received?: number;
  @Column()
  change?: number;
  @Column()
  status?: string;
  @Column()
  payment?: string;

  @OneToMany(() => Employee, (employee) => employee.id)
  employee?: Employee;

  @Column()
  empid?: number;

  // table?: TableMgmt;
  // tableid?: number;
  @OneToMany(() => ReceiptDetail, (receiptDetail) => receiptDetail.receipt)
  receiptDetail?: ReceiptDetail[];

  @Column()
  uuidI?: string;
  // createdDate?: Date
  @UpdateDateColumn()
  updatedDate?: Date;
  @DeleteDateColumn()
  deletedDate?: Date;
}
