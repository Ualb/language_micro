import { Test, TestingModule } from '@nestjs/testing';
import { IdiomController } from './idiom.controller';
import { IdiomService } from './idiom.service';

describe('IdiomController', () => {
  let controller: IdiomController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IdiomController],
      providers: [IdiomService],
    }).compile();

    controller = module.get<IdiomController>(IdiomController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
