import { Module, UseGuards } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { Customer } from './customers/entities/customer.entity';
import { Product } from './products/entities/product.entity';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { Order } from './orders/entities/order.entity';
import { OrderItem } from './orders/entities/order-item';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenusModule } from './menus/menus.module';
import { CategorysModule } from './categorys/categorys.module';
import { Menu } from './menus/entities/menu.entity';
import { Category } from './categorys/entities/category.entity';
import { TablesModule } from './tables/tables.module';
import { Table } from './tables/entities/table.entity';
import { ReceiptsModule } from './receipts/receipts.module';
import { EmployeesModule } from './employees/employees.module';
import { Receipt } from './receipts/entities/receipt.entity';
import { Employee } from './employees/entities/employee.entity';
import { ReceiptDetail } from './receipts/entities/receiptDetail.entity';
import { MaterailsModule } from './materails/materails.module';
import { SalarysModule } from './salarys/salarys.module';
import { SalaryDetailsModule } from './salary-details/salary-details.module';
import { Materail } from './materails/entities/materail.entity';
import { Salary } from './salarys/entities/salary.entity';
import { SalaryDetail } from './salary-details/entities/salary-detail.entity';
import { CheckMaterialsModule } from './check-materials/check-materials.module';
import { CheckMaterialDetailsModule } from './check-material-details/check-material-details.module';
import { CheckMaterial } from './check-materials/entities/check-material.entity';
import { CheckMaterialDetail } from './check-material-details/entities/check-material-detail.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'a0870573599',
      database: 'db_webpro_nest9',
      entities: [
        Customer,
        Product,
        Order,
        OrderItem,
        User,
        Menu,
        Category,
        Table,
        Receipt,
        ReceiptDetail,
        Employee,
        Materail,
        Salary,
        SalaryDetail,
        CheckMaterial,
        CheckMaterialDetail,
      ],
      synchronize: true,
    }),
    CustomersModule,
    ProductsModule,
    OrdersModule,
    UsersModule,
    AuthModule,
    MenusModule,
    CategorysModule,
    TablesModule,
    ReceiptsModule,
    EmployeesModule,
    MaterailsModule,
    SalarysModule,
    SalaryDetailsModule,
    CheckMaterialsModule,
    CheckMaterialDetailsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
