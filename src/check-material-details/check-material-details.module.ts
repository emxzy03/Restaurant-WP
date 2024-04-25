import { Module } from '@nestjs/common';
import { CheckMaterialDetailsService } from './check-material-details.service';
import { CheckMaterialDetailsController } from './check-material-details.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CheckMaterialDetail } from './entities/check-material-detail.entity';
@Module({
  imports: [TypeOrmModule.forFeature([CheckMaterialDetail])],
  controllers: [CheckMaterialDetailsController],
  providers: [CheckMaterialDetailsService],
})
export class CheckMaterialDetailsModule {}
