import { Test, TestingModule } from '@nestjs/testing';
import { SalaryDetailsService } from './salary-details.service';

describe('SalaryDetailsService', () => {
  let service: SalaryDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SalaryDetailsService],
    }).compile();

    service = module.get<SalaryDetailsService>(SalaryDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
