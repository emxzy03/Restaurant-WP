import { Test, TestingModule } from '@nestjs/testing';
import { SalarysController } from './salarys.controller';
import { SalarysService } from './salarys.service';

describe('SalarysController', () => {
  let controller: SalarysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SalarysController],
      providers: [SalarysService],
    }).compile();

    controller = module.get<SalarysController>(SalarysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
