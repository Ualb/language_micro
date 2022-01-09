import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! Ulises';
  }

  getMessageByNameKey(nameKey: string): string {
    return 'You has writed this:' + nameKey;
  }

  updateMessagesByNameKey() {

  }

  deleteMessageByNameKey() {

  }

}
