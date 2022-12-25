import { Controller, Get, Ip, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("/api")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/json")
  getHello(@Req() request: Request, @Ip() ip: string){
    return JSON.stringify(
      {
        "set": "hello"
      }
    );
  }
}
