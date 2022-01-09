import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common'; 
import { ComponentService } from './component.service';
import { Component } from './schemas/componet.schema';
import { CreateComponentDto } from './dtos/create-component.dto';
// import { UpdateComponentDto } from './dto/update-component.dto';

@Controller('/api/component')
export class ComponentController {
  constructor(private readonly componentService: ComponentService) {}

  @Post()
  create(@Body() createComponentDto: CreateComponentDto): Promise<Component> {
    return this.componentService.create(createComponentDto);
  }

  @Get()
  findAll() {
    return this.componentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.componentService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateComponentDto: UpdateComponentDto) {
  //   return this.componentService.update(+id, updateComponentDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.componentService.remove(+id);
  }
}
