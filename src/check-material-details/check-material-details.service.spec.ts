import { Test, TestingModule } from '@nestjs/testing';
import { CheckMaterialDetailsService } from './check-material-details.service';

describe('CheckMaterialDetailsService', () => {
  let service: CheckMaterialDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CheckMaterialDetailsService],
    }).compile();

    service = module.get<CheckMaterialDetailsService>(
      CheckMaterialDetailsService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
