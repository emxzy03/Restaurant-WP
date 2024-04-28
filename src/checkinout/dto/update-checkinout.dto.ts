import { PartialType } from '@nestjs/mapped-types';
import { CreateCheckinoutDto } from './create-checkinout.dto';

export class UpdateCheckinoutDto extends PartialType(CreateCheckinoutDto) {}
