import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IdiomService } from './idiom.service';
import { CreateIdiomDto } from './dto/create-idiom.dto';

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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.idiomService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateIdiomDto: UpdateIdiomDto) {
  //   return this.idiomService.update(+id, updateIdiomDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.idiomService.remove(+id);
  }
}
