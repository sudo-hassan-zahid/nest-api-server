import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  postHello(name?: string): string {
    return `Hello ${name || 'Post World'}!`;
  }
}
