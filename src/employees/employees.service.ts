import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}

  async create(createEmployeeDto: CreateEmployeeDto) {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(createEmployeeDto.password, salt);
    createEmployeeDto.password = hash;
    return this.employeeRepository.save(createEmployeeDto);
  }

  findAll() {
    return this.employeeRepository.find();
  }

  findOne(id: number) {
    return this.employeeRepository.findOne({ where: { id: id } });
  }

  findOneByEmail(email: string) {
    return this.employeeRepository.findOne({ where: { username: email } });
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    try {
      if (updateEmployeeDto.password !== undefined) {
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(updateEmployeeDto.password, salt);
        updateEmployeeDto.password = hash;
      }
      const updatedUser = await this.employeeRepository.save({
        id,
        ...updateEmployeeDto,
      });
      return updatedUser;
    } catch (e) {
      throw new NotFoundException();
    }
  }

  async remove(id: number) {
    const emp = await this.employeeRepository.findOne({
      where: { id: id },
    });
    try {
      const deletedUser = await this.employeeRepository.remove(emp);
      return deletedUser;
    } catch (e) {
      throw new NotFoundException();
    }
  }
}
