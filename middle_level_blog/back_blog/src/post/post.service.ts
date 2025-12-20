import { Injectable } from '@nestjs/common';

@Injectable()
export class PostService {
  helloFromPost(): string {
    return 'Hello from Post Module!';
  }
}
