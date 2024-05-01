import { EmployeesController } from 'src/employees/employees.controller';
import { Employee } from 'src/employees/entities/employee.entity';
import { Menu } from 'src/menus/entities/menu.entity';
import { Receipt } from 'src/receipts/entities/receipt.entity';
import { Table } from 'typeorm';

export class CreateMenuQueueDto {
  name: string;
  note: string;
  status: string;
  menu?: Menu;
  menuId?: number;
  receipt?: Receipt;
  receiptId?: number;
  chef?: Employee;
  waitress?: Employee;
  quatity: number;
  // chef_id?: number;
  // waitress_id?: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export class CreateCountMenuQueueDto {
  served: number;
  serve: number;
  tableNumber: number;
}
