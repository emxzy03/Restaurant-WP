import { Module } from '@nestjs/common';
import { MaterailsService } from './materails.service';
import { MaterailsController } from './materails.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Materail } from './entities/materail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Materail])],
  controllers: [MaterailsController],
  providers: [MaterailsService],
})
export class MaterailsModule {}
