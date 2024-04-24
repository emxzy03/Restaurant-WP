import { Injectable, NotFoundException } from '@nestjs/common';
import { Menu } from './entities/menu.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { Category } from 'src/categorys/entities/category.entity';

@Injectable()
export class MenusService {
  constructor(
    @InjectRepository(Menu)
    private menuRepository: Repository<Menu>,
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  // create(createMenuDto: CreateMenuDto) {
  //   const menu  = createMenuDto;
  //   const category = await this.categoryRepository.findOne({
  //     where: { categoryRepository.id : createMenuDto.categoryId },
  //   });

  //    menu.category = category;

  //   return this.menuRepository.save(menu);
  // }

  async create(createMenuDto: CreateMenuDto) {
    // ดึงข้อมูลหมวดหมู่จาก ID ที่ระบุใน DTO
    const category = await this.categoryRepository.findOneBy({
      id: createMenuDto.category_id,
    });
    if (!category) {
      throw new Error('Category ID not found');
    }
    const menu = new Menu();
    menu.name = createMenuDto.name;
    menu.price = createMenuDto.price;
    menu.status = createMenuDto.status;
    menu.image = createMenuDto.image;
    menu.categoryName = category.name;
    menu.category = category;
    // menu.category = category;
    // const menu = this.menuRepository.create({
    //   ...createMenuDto,
    //   category: category, // กำหนดหมวดหมู่ให้กับเมนู
    // });

    return this.menuRepository.save(menu);
  }

  findAll() {
    return this.menuRepository.find({
      relations: ['category'],
    });
  }

  findOne(id: number) {
    const menu = this.menuRepository.findOne({
      where: { id: id },
      relations: ['category'],
    });
    if (!menu) {
      throw new NotFoundException();
    }
    return menu;
  }

  async update(id: number, updateMenuDto: UpdateMenuDto) {
    const menu = await this.menuRepository.findOneBy({ id: id });
    if (!menu) {
      throw new NotFoundException();
    }
    const updatedMennu = { ...menu, ...updateMenuDto };
    return this.menuRepository.save(updatedMennu);
  }

  async remove(id: number) {
    const menu = await this.menuRepository.findOneBy({ id: id });
    if (!menu) {
      throw new NotFoundException();
    }
    return this.menuRepository.softRemove(menu);
  }
}
