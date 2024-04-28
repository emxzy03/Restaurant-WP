import { Test, TestingModule } from '@nestjs/testing';
import { MenuQueuesController } from './menu-queues.controller';
import { MenuQueuesService } from './menu-queues.service';

describe('MenuQueuesController', () => {
  let controller: MenuQueuesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MenuQueuesController],
      providers: [MenuQueuesService],
    }).compile();

    controller = module.get<MenuQueuesController>(MenuQueuesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
