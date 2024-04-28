import { PartialType } from '@nestjs/mapped-types';
import { CreateBillMaterialDetailDto } from './create-bill-material-detail.dto';

export class UpdateBillMaterialDetailDto extends PartialType(CreateBillMaterialDetailDto) {}
