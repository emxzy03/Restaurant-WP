export class CreateEmployeeDto {
  id?: number;
  username: string;
  password: string;
  name: string;
  birthday?: Date;
  address: string;
  tel: string;
  email: string;
  oth_contact: string;
  start_date?: Date;
  role: string;
  sal_rate: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
