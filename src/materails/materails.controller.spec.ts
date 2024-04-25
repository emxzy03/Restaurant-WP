import { Test, TestingModule } from '@nestjs/testing';
import { MaterailsController } from './materails.controller';
import { MaterailsService } from './materails.service';

describe('MaterailsController', () => {
  let controller: MaterailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MaterailsController],
      providers: [MaterailsService],
    }).compile();

    controller = module.get<MaterailsController>(MaterailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
