import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IdiomService } from './idiom.service';
import { CreateIdiomDto } from './dto/create-idiom.dto';
import { Schema } from 'mongoose';

@Controller('/api/idiom')
export class IdiomController {
  constructor(private readonly idiomService: IdiomService) {}

  @Post()
  create(@Body() createIdiomDto: CreateIdiomDto) {
    return this.idiomService.create(createIdiomDto);
  }

  @Get()
  findAll() {
    return this.idiomService.findAll();
  }

  @Get(':_id')
  findOne(@Param('_id') _id: Schema.Types.ObjectId) {
    return this.idiomService.findOne(_id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateIdiomDto: UpdateIdiomDto) {
  //   return this.idiomService.update(+id, updateIdiomDto);
  // }

  @Delete(':_id')
  remove(@Param('_id') _id: Schema.Types.ObjectId) {
    return this.idiomService.remove(_id);
  }
}
