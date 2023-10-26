import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { productReducer } from '@app/stores/product/product.reducer'

import { PagesModule } from '@app/pages/pages.module'
import { MyErrorHandlerService } from '@app/services/error/my-error-handler.service';
import { metaReducers } from '@app/stores/meta-reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ products: productReducer }, { metaReducers }),
    PagesModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: MyErrorHandlerService } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
