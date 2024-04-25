import { CheckMaterialDetail } from 'src/check-material-details/entities/check-material-detail.entity';
import { Employee } from 'src/employees/entities/employee.entity';
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
export class CheckMaterial {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  date?: Date;

  @ManyToOne(() => Employee, (employee) => employee.checkMaterial)
  employee?: Employee;

  @Column()
  employeeId?: number;

  @OneToMany(() => CheckMaterialDetail, (chd) => chd.bill)
  checkItems?: CheckMaterialDetail[];

  @UpdateDateColumn()
  updatedDate?: Date;
  @DeleteDateColumn()
  deletedDate?: Date;
}
