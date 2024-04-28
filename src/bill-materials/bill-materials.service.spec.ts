import { Test, TestingModule } from '@nestjs/testing';
import { BillMaterialsService } from './bill-materials.service';

describe('BillMaterialsService', () => {
  let service: BillMaterialsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BillMaterialsService],
    }).compile();

    service = module.get<BillMaterialsService>(BillMaterialsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
