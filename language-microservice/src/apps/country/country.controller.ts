import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Schema } from 'mongoose';
import { CountryService } from './country.service';
import { CreateCountryDto } from './dto/create-country.dto';
// import { UpdateCountryDto } from './dto/update-country.dto';

@Controller('/api/country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Post()
  create(@Body() createCountryDto: CreateCountryDto) {
    return this.countryService.create(createCountryDto);
  }

  @Get()
  findAll() {
    return this.countryService.findAll();
  }

  @Get(':_id')
  findOne(@Param('_id') _id: Schema.Types.ObjectId) {
    return this.countryService.findOne(_id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCountryDto: UpdateCountryDto) {
  //   return this.countryService.update(+id, updateCountryDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.countryService.remove(+id);
  }
}
