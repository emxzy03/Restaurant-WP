import { BillMaterial } from 'src/bill-materials/entities/bill-material.entity';
import { Materail } from 'src/materails/entities/materail.entity';
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
export class BillMaterialDetail {
  @PrimaryGeneratedColumn()
  id?: number;

  @OneToMany(() => Materail, (mtr) => mtr.billMaterialDetail)
  material?: Materail;

  @Column()
  materialId?: number;

  @Column()
  name?: string;

  @Column()
  quantity: number;

  @Column()
  price: number;

  @Column()
  total?: number;

  @ManyToOne(() => BillMaterial, (bmt) => bmt.billItems)
  bill?: BillMaterial;

  @CreateDateColumn()
  createdDate?: Date;

  @UpdateDateColumn()
  updatedDate?: Date;

  @DeleteDateColumn()
  deletedDate?: Date;
}
