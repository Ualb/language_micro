import { Controller, Get, Param } from '@nestjs/common'; 
import { AppService } from './app.service';

@Controller("message")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/")
  findAll(): string {
    return this.appService.getHello();
  }

  @Get("/:nameKey")
  findOne(@Param("nameKey") nameKey:string): string {
    return this.appService.getMessageByNameKey(nameKey)
  }
}
