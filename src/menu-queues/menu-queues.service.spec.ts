import { Test, TestingModule } from '@nestjs/testing';
import { MenuQueuesService } from './menu-queues.service';

describe('MenuQueuesService', () => {
  let service: MenuQueuesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MenuQueuesService],
    }).compile();

    service = module.get<MenuQueuesService>(MenuQueuesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
