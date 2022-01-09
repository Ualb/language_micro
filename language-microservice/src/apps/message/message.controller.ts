import { Controller, Get } from '@nestjs/common';
import { MessageService } from './message.service';

@Controller("/api/message")
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Get()
  getHello(): string {
    return this.messageService.getHello();
  }

  // @Get("/:nameKey")
  // findOneMessageByNameKey(@Param("nameKey") nameKey:string): string {
  //   return this.appService.getMessageByNameKey(nameKey)
  // }

  // findAllByPlatform() {

  // }

  // findOneByViewAndPlatform() {

  // }

  // findOneByComponent() {

  // }

  // createMessage() {

  // }

  // updateMessage() {

  // }

  // deleteMessage() {
    
  // }
}
