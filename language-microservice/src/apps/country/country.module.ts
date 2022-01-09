import { Module } from '@nestjs/common';
import { CountryService } from './country.service';
import { CountryController } from './country.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Country } from './entities/country.entity';
import { CountrySchema } from './schemas/country.schema';
import { IdiomModule } from '../idiom/idiom.module';
import { IdiomService } from '../idiom/idiom.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Country.name, schema: CountrySchema }]),
    IdiomModule
  ],
  controllers: [CountryController],
  providers: [CountryService],
  // exports: [IdiomModule]
})
export class CountryModule { }
