import { Injectable } from '@nestjs/common';
import welllog from './schema/welllog.json';

@Injectable()
export class AppService {
  getData(): any {
    return welllog;
  }
}
