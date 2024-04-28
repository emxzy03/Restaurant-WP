import { Module } from '@nestjs/common';
import { CheckinoutService } from './checkinout.service';
import { CheckinoutController } from './checkinout.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Checkinout } from './entities/checkinout.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Checkinout])],
  controllers: [CheckinoutController],
  providers: [CheckinoutService],
})
export class CheckinoutModule {}
