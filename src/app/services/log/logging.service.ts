import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
 
  log(error: any) {
    const log = { error, timestamp: new Date(), severity: 'INFO'};
    console.warn(log)
  }
}
