import { Module } from '@nestjs/common';
import { MenuQueuesService } from './menu-queues.service';
import { MenuQueuesController } from './menu-queues.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuQueue } from './entities/menu-queue.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MenuQueue])],
  controllers: [MenuQueuesController],
  providers: [MenuQueuesService],
})
export class MenuQueuesModule {}
