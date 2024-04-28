import { Test, TestingModule } from '@nestjs/testing';
import { BillMaterialDetailsController } from './bill-material-details.controller';
import { BillMaterialDetailsService } from './bill-material-details.service';

describe('BillMaterialDetailsController', () => {
  let controller: BillMaterialDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BillMaterialDetailsController],
      providers: [BillMaterialDetailsService],
    }).compile();

    controller = module.get<BillMaterialDetailsController>(BillMaterialDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
