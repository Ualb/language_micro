import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema } from 'mongoose';
import { CreateIdiomDto } from './dto/create-idiom.dto';
import { UpdateIdiomDto } from './dto/update-idiom.dto';
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

  update(_id: Schema.Types.ObjectId, updateIdiomDto: UpdateIdiomDto) {
    return this.idiomModel.findByIdAndUpdate(_id, updateIdiomDto);
  }

  remove(_id: Schema.Types.ObjectId) {
    return this.idiomModel.findByIdAndDelete(_id);
  }
}
