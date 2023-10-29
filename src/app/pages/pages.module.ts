import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainModule } from '@app/main/main.module';
import { ProductModule } from '@app/product/product.module'

import { HomePageComponent } from './home-page/home-page.component';



@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    MainModule,
    ProductModule
  ]
})
export class PagesModule { }
