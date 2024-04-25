import { PartialType } from '@nestjs/mapped-types';
import { CreateMaterailDto } from './create-materail.dto';

export class UpdateMaterailDto extends PartialType(CreateMaterailDto) {}
