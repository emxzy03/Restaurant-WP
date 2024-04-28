import { Test, TestingModule } from '@nestjs/testing';
import { BillMaterialDetailsService } from './bill-material-details.service';

describe('BillMaterialDetailsService', () => {
  let service: BillMaterialDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BillMaterialDetailsService],
    }).compile();

    service = module.get<BillMaterialDetailsService>(BillMaterialDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
