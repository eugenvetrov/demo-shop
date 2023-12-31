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
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductCartComponent } from './product-cart/product-cart.component';


@NgModule({
  declarations: [
    ProductMenuComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductFilterComponent,
    ProductCartComponent
  ],
  exports: [
    ProductMenuComponent,
    ProductListComponent,
    ProductFilterComponent,
    ProductCartComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ProductApiService
  ]
})
export class ProductModule { }
