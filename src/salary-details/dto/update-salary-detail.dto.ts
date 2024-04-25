import { PartialType } from '@nestjs/mapped-types';
import { CreateSalaryDetailDto } from './create-salary-detail.dto';

export class UpdateSalaryDetailDto extends PartialType(CreateSalaryDetailDto) {}
