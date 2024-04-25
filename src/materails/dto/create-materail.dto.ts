export class CreateMaterailDto {
  name: string;
  min_quantity: number;
  quantity: number;
  unit: string;
  unit_price: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
