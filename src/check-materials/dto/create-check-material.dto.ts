import { CheckMaterialDetail } from 'src/check-material-details/entities/check-material-detail.entity';
import { Employee } from 'src/employees/entities/employee.entity';

export class CreateCheckMaterialDto {
  date?: Date;
  employee?: Employee;
  employeeId?: number;
  checkItems?: CheckMaterialDetail[];
  updatedDate?: Date;
  deletedDate?: Date;
}
