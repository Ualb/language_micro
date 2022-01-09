import { Controller, Get, Param } from '@nestjs/common'; 
import { AppService } from './app.service';

@Controller("message")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/")
  findAllMessages(): string {
    return this.appService.getHello();
  }

  @Get("/:nameKey")
  findOneMessageByNameKey(@Param("nameKey") nameKey:string): string {
    return this.appService.getMessageByNameKey(nameKey)
  }

  findAllByPlatform() {

  }

  findOneByViewAndPlatform() {

  }

  findOneByComponent() {

  }

  createMessage() {

  }

  updateMessage() {

  }

  deleteMessage() {
    
  }

}
