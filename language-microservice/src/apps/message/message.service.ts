import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageService {
  getHello(): string {
    return 'Hello World!';
  }



  getMessageByNameKey(nameKey: string): string {
    return 'You has writed this:' + nameKey;
  }

  updateMessagesByNameKey() {

  }

  deleteMessageByNameKey() {

  }

}
