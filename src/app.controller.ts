import { Controller, Get , Res} from '@nestjs/common';
import { createReadStream } from 'fs';
import { Response } from "express";
import { AppService } from './app.service';

@Controller()
export class AppController {
  //constructor injection token for using AppService dependency
  constructor(private readonly appService: AppService) {}

  //request handler method
  //when {/,GET} route is hit the html file is sent back, which acts as frontend here
  @Get()
    getHtml(@Res() res: Response): void 
    {
        const filePath: string = this.appService.getHtmlFilePath();
        const file = createReadStream(filePath);//streaming file
        file.pipe(res);//sending back a file to the client
    }
}
