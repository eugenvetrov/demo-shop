import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainModule } from '@app/main/main.module';
import { ProductModule } from '@app/product/product.module'

import { HomePageComponent } from './home-page/home-page.component';
import { CategoryPageComponent } from './category-page/category-page.component';



@NgModule({
  declarations: [
    HomePageComponent,
    CategoryPageComponent
  ],
  exports: [
    HomePageComponent,
    CategoryPageComponent
  ],
  imports: [
    CommonModule,
    MainModule,
    ProductModule
  ]
})
export class PagesModule { }
