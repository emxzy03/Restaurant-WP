import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
const saltOrRunds = 10;
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(createUserDto.password, salt);
    createUserDto.password = hash;
    return this.usersRepository.save(createUserDto);
  }

  findAll(option) {
    return this.usersRepository.find(option);
  }

  findOne(id: number) {
    return this.usersRepository.findOne({ where: { id: id } });
  }

  findOneByEmail(email: string) {
    return this.usersRepository.findOne({ where: { email: email } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      if (updateUserDto.password !== undefined) {
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(updateUserDto.password, salt);
        updateUserDto.password = hash;
      }
      const updatedUser = await this.usersRepository.save({
        id,
        ...updateUserDto,
      });
      return updatedUser;
    } catch (e) {
      throw new NotFoundException();
    }
  }

  async remove(id: number) {
    const user = await this.usersRepository.findOne({
      where: { id: id },
    });
    try {
      const deletedUser = await this.usersRepository.remove(user);
      return deletedUser;
    } catch (e) {
      throw new NotFoundException();
    }
  }
}
