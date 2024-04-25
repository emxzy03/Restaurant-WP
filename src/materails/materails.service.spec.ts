import { Test, TestingModule } from '@nestjs/testing';
import { MaterailsService } from './materails.service';

describe('MaterailsService', () => {
  let service: MaterailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MaterailsService],
    }).compile();

    service = module.get<MaterailsService>(MaterailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
