import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema } from 'mongoose';
import { CreateCountryDto } from './dto/create-country.dto';
import { Country } from './entities/country.entity';
import { CountryDocument } from './schemas/country.schema';
import { UpdateCountryDto } from './dto/update-country.dto'; 

@Injectable()
export class CountryService {

  constructor(@InjectModel(Country.name) private countryModel: Model<CountryDocument>) { }

  create(createCountryDto: CreateCountryDto): Promise<Country> {
    return (new this.countryModel(createCountryDto)).save();
  }

  findAll() {
    return this.countryModel.find().exec();
  }

  findOne(_id: Schema.Types.ObjectId) {
    return this.countryModel.findById(_id);
  }

  update(_id: Schema.Types.ObjectId, updateCountryDto: UpdateCountryDto) {
    return this.countryModel.findByIdAndUpdate(_id, updateCountryDto);
  }

  remove(_id: Schema.Types.ObjectId) {
    return this.countryModel.findByIdAndRemove(_id);
  }
}
