import { PartialType } from '@nestjs/mapped-types';
import { CreateBillMaterialDto } from './create-bill-material.dto';

export class UpdateBillMaterialDto extends PartialType(CreateBillMaterialDto) {}
