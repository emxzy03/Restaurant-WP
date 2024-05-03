import { Receipt } from 'src/receipts/entities/receipt.entity';
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
export class Table {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  num: number;

  @Column()
  status: string;

  @Column()
  seat: number;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @DeleteDateColumn()
  deletedAt?: Date;

  @OneToMany(() => Receipt, (receipt) => receipt.table)
  receipt: Receipt;
}
