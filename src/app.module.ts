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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
