import { BillMaterialDetail } from 'src/bill-material-details/entities/bill-material-detail.entity';
import { Employee } from 'src/employees/entities/employee.entity';

export class CreateBillMaterialDto {
  shop_name: string;
  date?: Date;
  total?: number;
  buy: number;
  change?: number;
  employee?: Employee;
  employeeId?: number;
  billItems?: BillMaterialDetail[];

  updatedDate?: Date;
  deletedDate?: Date;
}
