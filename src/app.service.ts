import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<h1> Welcome To Coding Katta !</h1>';
  }
}
