import { Category } from 'src/categorys/entities/category.entity';

export class CreateMenuDto {
  name: string;
  price: number;
  // category: Category; //สำหรับ get
  category_id: number;
  categoryName: string; //สำหรับ add, edit
  status: string;
  image: string;
}
