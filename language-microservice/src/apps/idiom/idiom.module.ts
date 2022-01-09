import { Module } from '@nestjs/common';
import { IdiomService } from './idiom.service';
import { IdiomController } from './idiom.controller';
import { Idiom, IdiomSchema } from './schemas/idiom.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Idiom.name, schema: IdiomSchema }])],
  controllers: [IdiomController],
  providers: [IdiomService], 
  exports: [IdiomService]
})
export class IdiomModule {}
