import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
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

  @Get('/serv')
  findMenuQueueServ() {
    return this.menuQueuesService.findMenuQueueServ();
  }

  @Get('/serv/:num')
  findMenuQueueServByTableNum(@Param('num') num: string) {
    return this.menuQueuesService.findMenuQueueServByTableNum(+num);
  }

  @Get('/serv-count')
  findCountMenuQueue() {
    return this.menuQueuesService.countMenuQueue();
  }
  @Get('/menu-serv/:id')
  findOneMenuInTable(@Param('id') id: string) {
    return this.menuQueuesService.findOneTableQueueServe(+id);
  }

  @Get('/category/:condition')
  async findMenuBy(@Param('condition') condition: number) {
    return await this.menuQueuesService.findByConditionId(+condition);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.menuQueuesService.findOne(+id);
  }

  @Patch(':id/status')
  updateMQStatus(@Param('id') id: string, @Query('status') status: string) {
    return this.menuQueuesService.updateStatusMQ(+id, status);
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
