import { Test, TestingModule } from '@nestjs/testing';
import { SinistreService } from './sinistre.service';

describe('SinistreService', () => {
  let service: SinistreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SinistreService],
    }).compile();

    service = module.get<SinistreService>(SinistreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
