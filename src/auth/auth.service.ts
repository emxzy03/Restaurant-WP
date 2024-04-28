import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { EmployeesService } from 'src/employees/employees.service';
import { Employee } from 'src/employees/entities/employee.entity';
import { UsersService } from 'src/users/users.service';
@Injectable()
export class AuthService {
  constructor(
    private empService: EmployeesService,
    // private usersService: UsersService,
    // private employeeService: EmployeesService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.empService.findOneByEmail(username);
    const isMatch = await bcrypt.compare(pass, user.password);
    if (user && isMatch) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
  async login(user: Employee) {
    const payload = { username: user.username, sub: user.id };
    // console.log(payload);
    return {
      user: user,
      access_token: this.jwtService.sign(payload),
    };
  }

  //   async validateUser(username: string, pass: string): Promise<any> {
  //     const user = await this.usersService.findOneByEmail(username);
  //     const isMatch = await bcrypt.compare(pass, user.password);
  //     if (user && isMatch) {
  //       const { password, ...result } = user;
  //       return result;
  //     }
  //     return null;
  //   }
  //   async login(user: User) {
  //     const payload = { username: user.email, sub: user.id };
  //     // console.log(payload);
  //     return {
  //       user: user,
  //       access_token: this.jwtService.sign(payload),
  //     };
  //   }
}
