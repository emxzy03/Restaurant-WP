import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  create(createProductDto: CreateProductDto) {
    return this.productsRepository.save(createProductDto);
  }

  findAll(option) {
    return this.productsRepository.find(option);
  }

  findOne(id: number) {
    return this.productsRepository.findOne({ where: { id: id } });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    try {
      const updatedProduct = await this.productsRepository.save({
        id,
        ...updateProductDto,
      });
      return updatedProduct;
    } catch (e) {
      throw new NotFoundException();
    }
  }

  async remove(id: number) {
    const product = await this.productsRepository.findOne({
      where: { id: id },
    });
    try {
      const deletedProduct = await this.productsRepository.remove(product);
      return deletedProduct;
    } catch (e) {
      throw new NotFoundException();
    }
  }
}
