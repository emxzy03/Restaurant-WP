import { Module } from '@nestjs/common';
import { SalarysService } from './salarys.service';
import { SalarysController } from './salarys.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Salary } from './entities/salary.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Salary])],
  controllers: [SalarysController],
  providers: [SalarysService],
})
export class SalarysModule {}
