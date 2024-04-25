import { PartialType } from '@nestjs/mapped-types';
import { CreateCheckMaterialDetailDto } from './create-check-material-detail.dto';

export class UpdateCheckMaterialDetailDto extends PartialType(CreateCheckMaterialDetailDto) {}
