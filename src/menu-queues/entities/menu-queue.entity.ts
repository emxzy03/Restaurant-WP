import { Delete } from '@nestjs/common';
import { Employee } from 'src/employees/entities/employee.entity';
import { Menu } from 'src/menus/entities/menu.entity';
import { Receipt } from 'src/receipts/entities/receipt.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class MenuQueue {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string;

  @Column()
  note: string;

  @Column()
  status: string;

  @Column()
  quantity: number;

  @ManyToOne(() => Menu, (menu) => menu.id)
  menu?: Menu;
  @Column()
  menuId?: number;
  @ManyToOne(() => Receipt, (receipt) => receipt.id)
  receipt?: Receipt;
  @Column()
  receipt_Id?: number;

  @ManyToOne(() => Employee, (emp) => emp.id)
  chef?: Employee;

  @ManyToOne(() => Employee, (emp) => emp.id)
  waitress?: Employee;
  // chef_id?: number;
  // waitress_id?: number;
  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
