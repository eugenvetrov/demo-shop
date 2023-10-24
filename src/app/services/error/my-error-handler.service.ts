import { ErrorHandler, Injectable } from '@angular/core';
import { LoggingService } from '@app/services/log/logging.service';

@Injectable({
  providedIn: 'root'
})
export class MyErrorHandlerService implements ErrorHandler {

  constructor(private logger: LoggingService) { }

  handleError(error: any) {
   
    this.logger.log(error);
   
  }
}
