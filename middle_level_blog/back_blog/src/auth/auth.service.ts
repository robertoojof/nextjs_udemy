import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  doLogin(): string {
    return 'User logged in';
  }
}
