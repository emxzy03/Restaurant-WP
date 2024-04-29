import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MenuQueuesService } from './menu-queues.service';
import { CreateMenuQueueDto } from './dto/create-menu-queue.dto';
import { UpdateMenuQueueDto } from './dto/update-menu-queue.dto';

@Controller('menu-queues')
export class MenuQueuesController {
  constructor(private readonly menuQueuesService: MenuQueuesService) {}

  @Post()
  create(@Body() createMenuQueueDto: CreateMenuQueueDto) {
    return this.menuQueuesService.create(createMenuQueueDto);
  }

  @Get()
  findAll() {
    return this.menuQueuesService.findAll();
  }

  @Get('/history')
  findHistory() {
    return this.menuQueuesService.findMenuHistory();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.menuQueuesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMenuQueueDto: UpdateMenuQueueDto,
  ) {
    return this.menuQueuesService.update(+id, updateMenuQueueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.menuQueuesService.remove(+id);
  }
}
