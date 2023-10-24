import { Component } from '@angular/core';
import { ProductApiService } from '@app/product/services/api/product-api.service';
import { Store } from '@ngrx/store';
import { updateProducts } from '../../stores/product/product.actions';
import { Observable } from 'rxjs/internal/Observable';
import { selectProducts } from '@app/stores/product/product.selectors';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products$: Observable<ProductState>
  
  constructor(
    private productApi: ProductApiService,
    private store: Store<AppState>
  ) { 
    this.products$ = this.store.select(selectProducts);
  }
  
  async ngOnInit() {
    const productsData = await this.productApi.getData();
    const products = productsData.productItemsData
    this.store.dispatch(updateProducts({products: products}))
    this.products$.subscribe((data) => {
      console.log(data.products);
    })
    
  }
}
