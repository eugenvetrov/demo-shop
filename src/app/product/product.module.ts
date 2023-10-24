import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductMenuComponent } from '@app/product/product-menu/product-menu.component';
import { ProductListComponent } from '@app/product/product-list/product-list.component';
import { ProductItemComponent } from '@app/product/product-item/product-item.component';
import { ProductApiService } from '@app/product/services/api/product-api.service';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    ProductMenuComponent,
    ProductListComponent,
    ProductItemComponent
  ],
  exports: [
    ProductMenuComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [
    ProductApiService
  ]
})
export class ProductModule { }
