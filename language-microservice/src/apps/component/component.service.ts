import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema } from 'mongoose';
import { CreateComponentDto } from './dtos/create-component.dto';
import { UpdateComponentDto } from './dtos/update-component.dto';
import { Component, ComponentDocument } from './schemas/componet.schema';

@Injectable()
export class ComponentService {
  constructor(@InjectModel(Component.name) private componentModel: Model<ComponentDocument>) { }

  async create(createComponentDto: CreateComponentDto): Promise<Component> {
    const newComponent = new this.componentModel(createComponentDto);
    return newComponent.save();
  }

  async findAll(): Promise<Component[]> {
    return this.componentModel.find().exec();
  }

  async findOne(nameKey: string): Promise<Component> {
    return this.componentModel.findOne({ "nameKey": nameKey }).exec();
  }

  async findOneById(_id: Schema.Types.ObjectId): Promise<Component> {
    return this.componentModel.findById(_id).exec();
  }

  update(_id: Schema.Types.ObjectId, updateComponentDto: UpdateComponentDto) {
    return this.componentModel.findByIdAndUpdate(_id, updateComponentDto);
  }

  remove(_id: Schema.Types.ObjectId) {
    return this.componentModel.findByIdAndDelete(_id)
  }
}
