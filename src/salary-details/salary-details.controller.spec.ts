import { Test, TestingModule } from '@nestjs/testing';
import { SalaryDetailsController } from './salary-details.controller';
import { SalaryDetailsService } from './salary-details.service';

describe('SalaryDetailsController', () => {
  let controller: SalaryDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SalaryDetailsController],
      providers: [SalaryDetailsService],
    }).compile();

    controller = module.get<SalaryDetailsController>(SalaryDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
