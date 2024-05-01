import { Table } from 'src/tables/entities/table.entity';

export class CreateReceiptDto {
  table: Table;

  table_id: number;

  date?: Date;

  subtotal?: number;

  discount?: number;

  total?: number;

  received?: number;

  change?: number;

  status?: string;

  payment?: string;

  employee_id: number;

  receiptDetail?: CreateReceiptDetailDto[];

  uuidI?: string;
}

export class CreateReceiptDetailDto {
  id?: number;
  name?: string;
  quantity: number;
  price?: number;
  total?: number;
  // receipt?: Receipt;
  // menu?: Menu;
  menuId?: number;
  createdDate?: Date;
  updatedDate?: Date;
  deletedDate?: Date;
}
