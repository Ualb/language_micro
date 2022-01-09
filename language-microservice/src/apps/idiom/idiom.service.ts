import { Injectable } from '@nestjs/common';
import { CreateIdiomDto } from './dto/create-idiom.dto';
// import { UpdateIdiomDto } from './dto/update-idiom.dto';

@Injectable()
export class IdiomService {
  create(createIdiomDto: CreateIdiomDto) {
    return 'This action adds a new idiom';
  }

  findAll() {
    return `This action returns all idiom`;
  }

  findOne(id: number) {
    return `This action returns a #${id} idiom`;
  }

  // update(id: number, updateIdiomDto: UpdateIdiomDto) {
  //   return `This action updates a #${id} idiom`;
  // }

  remove(id: number) {
    return `This action removes a #${id} idiom`;
  }
}
