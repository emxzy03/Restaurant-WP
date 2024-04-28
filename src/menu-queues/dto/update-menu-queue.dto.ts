import { PartialType } from '@nestjs/mapped-types';
import { CreateMenuQueueDto } from './create-menu-queue.dto';

export class UpdateMenuQueueDto extends PartialType(CreateMenuQueueDto) {}
