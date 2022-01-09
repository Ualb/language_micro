import { Test, TestingModule } from '@nestjs/testing';
import { IdiomService } from './idiom.service';

describe('IdiomService', () => {
  let service: IdiomService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IdiomService],
    }).compile();

    service = module.get<IdiomService>(IdiomService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
