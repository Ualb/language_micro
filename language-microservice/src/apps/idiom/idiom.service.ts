import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema } from 'mongoose';
import { CreateIdiomDto } from './dto/create-idiom.dto';
import { Idiom, IdiomDocument } from './schemas/idiom.schema';

@Injectable()
export class IdiomService {

  constructor(@InjectModel(Idiom.name) private idiomModel: Model<IdiomDocument>) {}


  create(createIdiomDto: CreateIdiomDto): Promise<Idiom> {
    const newIdiom = new this.idiomModel(createIdiomDto);
    return newIdiom.save();
  }

  findAll() {
    return this.idiomModel.find().exec();
  }

  findOne(_id: Schema.Types.ObjectId) {
    return this.idiomModel.findById(_id);
  }

  // update(id: number, updateIdiomDto: UpdateIdiomDto) {
  //   return `This action updates a #${id} idiom`;
  // }

  remove(_id: Schema.Types.ObjectId) {
    return this.idiomModel.findByIdAndDelete(_id);
  }
}
