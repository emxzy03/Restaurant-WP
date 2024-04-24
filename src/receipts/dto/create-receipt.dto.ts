export class CreateReceiptDto {
  table_id?: number;

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
  menu_id: number;
  quantity: number;
  name?: string;
  // receipt_id: number;
  price?: number;
  total?: number;
}
