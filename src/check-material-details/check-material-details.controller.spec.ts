import { Test, TestingModule } from '@nestjs/testing';
import { CheckMaterialDetailsController } from './check-material-details.controller';
import { CheckMaterialDetailsService } from './check-material-details.service';

describe('CheckMaterialDetailsController', () => {
  let controller: CheckMaterialDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CheckMaterialDetailsController],
      providers: [CheckMaterialDetailsService],
    }).compile();

    controller = module.get<CheckMaterialDetailsController>(
      CheckMaterialDetailsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
