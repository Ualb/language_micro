import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateComponentDto } from './dtos/create-component.dto';
import { Component, ComponentDocument } from './schemas/componet.schema';
// import { UpdateComponentDto } from './dto/update-component.dto';

@Injectable()
export class ComponentService {
  constructor(@InjectModel(Component.name) private componentModel:Model<ComponentDocument>){}

  async create(createComponentDto: CreateComponentDto): Promise<Component> {
    const newComponent = new this.componentModel(createComponentDto);
    return newComponent.save();
  }

  findAll() {
    return `This action returns all component`;
  }

  findOne(id: number) {
    return `This action returns a #${id} component`;
  }

  // update(id: number, updateComponentDto: UpdateComponentDto) {
  //   return `This action updates a #${id} component`;
  // }

  remove(id: number) {
    return `This action removes a #${id} component`;
  }
}
