import { SalaryDetail } from 'src/salary-details/entities/salary-detail.entity';

export class CreateSalaryDto {
  date_start: string;
  date_end: string;
  date_salary: Date;
  total?: number;
  salaryDetailLists: SalaryDetail[];
  cionum?: number[];
  updatedDate?: Date;
  deletedDate?: Date;
}
