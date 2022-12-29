import { Injectable } from '@nestjs/common';
import { join } from 'path';

@Injectable()
export class AppService {
  getHtmlPath(): string {
    return join(process.cwd(), "client", "index.html");
}
}
