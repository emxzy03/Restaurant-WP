import { Test, TestingModule } from '@nestjs/testing';
import { SalarysService } from './salarys.service';

describe('SalarysService', () => {
  let service: SalarysService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SalarysService],
    }).compile();

    service = module.get<SalarysService>(SalarysService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
