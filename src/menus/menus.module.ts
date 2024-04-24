import { Module } from '@nestjs/common';
import { MenusService } from './menus.service';
import { MenusController } from './menus.controller';
import { Menu } from './entities/menu.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from 'src/categorys/entities/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Menu, Category])],
  controllers: [MenusController],
  providers: [MenusService],
})
export class MenusModule {}
