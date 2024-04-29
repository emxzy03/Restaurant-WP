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
import { Receipt } from './receipt.entity';
import { Menu } from 'src/menus/entities/menu.entity';

@Entity()
export class ReceiptDetail {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column()
  name?: string;
  @Column()
  quantity: number;

  @Column()
  price?: number;

  @Column()
  total?: number;

  @Column()
  status: string;

  @ManyToOne(() => Receipt, (receipt) => receipt.receiptDetail)
  receipt?: Receipt;

  @ManyToOne(() => Menu, (menu) => menu.id)
  menu?: Menu;

  @CreateDateColumn()
  createdDate?: Date;
  @UpdateDateColumn()
  updatedDate?: Date;
  @DeleteDateColumn()
  deletedDate?: Date;
}
