import { Injectable } from '@nestjs/common';
import { Schema } from 'mongoose';
import { CreateCountryDto } from './dto/create-country.dto';
// import { UpdateCountryDto } from './dto/update-country.dto';

@Injectable()
export class CountryService {
  create(createCountryDto: CreateCountryDto) {
    return 'This action adds a new country';
  }

  findAll() {
    return `This action returns all country`;
  }

  findOne(id: Schema.Types.ObjectId) {
    return '';
  }

  // update(id: number, updateCountryDto: UpdateCountryDto) {
  //   return `This action updates a #${id} country`;
  // }

  remove(id: number) {
    return `This action removes a #${id} country`;
  }
}
