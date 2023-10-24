import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { productReducer } from '@app/stores/product/product.reducer'

import { MainModule } from '@app/main/main.module'
import { MyErrorHandlerService } from '@app/services/error/my-error-handler.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ products: productReducer }),
    MainModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: MyErrorHandlerService } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
