import { Test, TestingModule } from '@nestjs/testing';
import { ReportsController } from './reports.controller';

describe('Reports Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [ReportsController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: ReportsController = module.get<ReportsController>(ReportsController);
    expect(controller).toBeDefined();
  });
});
