import { Controller, Get, Post, Body, Param, Delete, Query, Put } from '@nestjs/common'; 
import { ComponentService } from './component.service';
import { Component } from './schemas/componet.schema';
import { CreateComponentDto } from './dtos/create-component.dto';
import { Schema } from 'mongoose';
import { UpdateComponentDto } from './dtos/update-component.dto';
// import { UpdateComponentDto } from './dto/update-component.dto';

@Controller('/api/component')
export class ComponentController {
  constructor(private readonly componentService: ComponentService) {}

  @Post()
  create(@Body() createComponentDto: CreateComponentDto): Promise<Component> {
    return this.componentService.create(createComponentDto);
  }

  @Get()
  findAll(): Promise<Component[]> {
    return this.componentService.findAll();
  }

  @Get("/findByFilter?")
  findOne(@Query('nameKey') nameKey: string): Promise<Component> {
    return this.componentService.findOne(nameKey);
  }

  @Get(':_id')
  findOneById(@Param('_id') id: Schema.Types.ObjectId) {
    return this.componentService.findOneById(id);
  }

  @Put(':_id')
  update(@Param('_id') _id: Schema.Types.ObjectId, @Body() updateComponentDto: UpdateComponentDto) {
    return this.componentService.update(_id, updateComponentDto);
  }

  @Delete(':_id')
  remove(@Param('_id') _id: Schema.Types.ObjectId) {
    return this.componentService.remove(_id);
  }
}
