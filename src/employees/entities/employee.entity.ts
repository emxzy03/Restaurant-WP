import { BillMaterial } from 'src/bill-materials/entities/bill-material.entity';
import { CheckMaterial } from 'src/check-materials/entities/check-material.entity';
import { Checkinout } from 'src/checkinout/entities/checkinout.entity';
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
export class Employee {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column()
  birthday?: Date;

  @Column()
  address: string;

  @Column()
  tel: string;

  @Column()
  email: string;

  @Column()
  oth_contact: string;

  @Column()
  start_date?: Date;

  @Column()
  role: string;

  @Column()
  sal_rate: number;

  @OneToMany(() => SalaryDetail, (sdt) => sdt.employee)
  salaryDetail: SalaryDetail;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @DeleteDateColumn()
  deletedAt?: Date;

  @OneToMany(() => CheckMaterial, (cm) => cm.employee)
  checkMaterial: CheckMaterial;

  @OneToMany(() => Checkinout, (checkIO) => checkIO.employee)
  checkInout: Checkinout;

  @OneToMany(() => BillMaterial, (bm) => bm.employee)
  billMaterial: BillMaterial;
}
