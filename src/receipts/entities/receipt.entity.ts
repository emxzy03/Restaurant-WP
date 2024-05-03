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
import { MenuQueue } from 'src/menu-queues/entities/menu-queue.entity';
@Entity()
export class Receipt {
  @PrimaryGeneratedColumn()
  id?: number;
  @ManyToOne(() => Table, (table) => table.receipt)
  table?: Table;
  @CreateDateColumn()
  date?: Date;
  @Column({ default: 0 })
  subtotal?: number;
  @Column({ default: 0 })
  discount?: number;
  @Column({ default: 0 })
  total?: number;
  @Column({ default: 0 })
  received?: number;
  @Column({ default: 0 })
  change?: number;
  @Column({ default: 'รอทำ' })
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

  @OneToMany(() => MenuQueue, (mq) => mq.receipt)
  menuQueue?: MenuQueue;

  @UpdateDateColumn()
  updatedDate?: Date;
  @DeleteDateColumn()
  deletedDate?: Date;
}
