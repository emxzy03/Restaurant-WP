import { Test, TestingModule } from '@nestjs/testing';
import { BillMaterialsController } from './bill-materials.controller';
import { BillMaterialsService } from './bill-materials.service';

describe('BillMaterialsController', () => {
  let controller: BillMaterialsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BillMaterialsController],
      providers: [BillMaterialsService],
    }).compile();

    controller = module.get<BillMaterialsController>(BillMaterialsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
