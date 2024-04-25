import { CheckMaterial } from 'src/check-materials/entities/check-material.entity';
import { Materail } from 'src/materails/entities/materail.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class CheckMaterialDetail {
  @PrimaryGeneratedColumn()
  id?: number;

  @ManyToOne(() => Materail, (mtl) => mtl.checkMaterialDetail)
  material?: Materail;

  @Column()
  materialId?: number;

  @Column()
  name?: string;

  @Column()
  last_quantity?: number;

  @Column()
  quantity: number;

  @Column()
  now_q?: number;

  @ManyToOne(() => CheckMaterial, (cm) => cm.checkItems)
  bill?: CheckMaterial;

  @CreateDateColumn()
  createdDate?: Date;

  @UpdateDateColumn()
  updatedDate?: Date;
  @DeleteDateColumn()
  deletedDate?: Date;
}
