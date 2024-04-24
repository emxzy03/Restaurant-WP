import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private customersRepository: Repository<Customer>,
  ) {}

  create(createCustomerDto: CreateCustomerDto) {
    return this.customersRepository.save(createCustomerDto);
  }

  findAll() {
    return this.customersRepository.find({});
  }

  async findOne(id: number) {
    const customer = await this.customersRepository.findOne({
      where: { id: id },
      relations: ['orders'],
    });
    if (!customer) {
      throw new NotFoundException();
    }
    return customer;
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto) {
    const customer = await this.customersRepository.findOneBy({ id: id });
    if (!customer) {
      throw new NotFoundException();
    }
    const updatedCustomer = { ...customer, ...updateCustomerDto };
    return this.customersRepository.save(updatedCustomer);
  }

  async remove(id: number) {
    const customer = await this.customersRepository.findOneBy({ id: id });
    if (!customer) {
      throw new NotFoundException();
    }
    return this.customersRepository.softRemove(customer);
  }
}
