import { Category } from 'src/categorys/entities/category.entity';
import { Receipt } from 'src/receipts/entities/receipt.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Menu {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @ManyToOne(() => Category, (category) => category.menu)
  // @JoinColumn({ name: 'category_id' })
  category?: Category;

  @Column()
  categoryName?: string; //สำหรับ add, edit

  @Column()
  status?: string;

  @Column({
    length: '128',
    default: 'no_img_avaliable.jpg',
  })
  image?: string;
}
