import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  writeCount(count: number) {
    console.warn(count);
  }
}
