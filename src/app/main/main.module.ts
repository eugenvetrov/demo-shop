import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from '@app/main/main/main.component';
import { MainMenuComponent } from '@app/main/main-menu/main-menu.component';
import { ProductModule } from '@app/product/product.module';
import { MainContentComponent } from '@app/main/main-content/main-content.component';


@NgModule({
  declarations: [
    MainComponent,
    MainMenuComponent,
    MainContentComponent
  ],
  exports: [
    MainComponent,
    MainContentComponent,
    MainMenuComponent
  ],
  imports: [
    CommonModule,
    ProductModule
  ]
})
export class MainModule { }
