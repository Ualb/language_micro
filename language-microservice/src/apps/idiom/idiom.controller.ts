import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { IdiomService } from './idiom.service';
import { CreateIdiomDto } from './dto/create-idiom.dto';
import { Schema } from 'mongoose';
import { UpdateIdiomDto } from './dto/update-idiom.dto';

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

  @Put(':_id')
  update(@Param('_id') _id: Schema.Types.ObjectId, @Body() updateIdiomDto: UpdateIdiomDto) {
    return this.idiomService.update(_id, updateIdiomDto);
  }

  @Delete(':_id')
  remove(@Param('_id') _id: Schema.Types.ObjectId) {
    return this.idiomService.remove(_id);
  }
}
