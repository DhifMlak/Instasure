import { Test, TestingModule } from '@nestjs/testing';
import { SinistreController } from './sinistre.controller';

describe('Sinistre Controller', () => {
  let controller: SinistreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SinistreController],
    }).compile();

    controller = module.get<SinistreController>(SinistreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
