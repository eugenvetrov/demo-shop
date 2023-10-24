import { Component } from '@angular/core';
import { ProductApiService } from '@app/product/services/api/product-api.service';
import { Store } from '@ngrx/store';
import { updateProducts, updateProductCategories } from '../../stores/product/product.actions';
import { Observable } from 'rxjs/internal/Observable';
import { selectProducts } from '@app/stores/product/product.selectors';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products$: Observable<ProductState>;
  products: Product[] = [];
  routeCategoryId?: number = undefined;
  
  constructor(
    private productApi: ProductApiService,
    private store: Store<AppState>,
    private route: ActivatedRoute
  ) { 
    this.products$ = this.store.select(selectProducts);
    this.routeCategoryId = this.route.snapshot.params['categoryId']
  }
  
  async ngOnInit() {
    const productsData = await this.productApi.getData();
    this.store.dispatch(updateProducts({products: productsData.productItemsData}))
    this.store.dispatch(updateProductCategories({categories: productsData.productCategoryData}))
    this.products$.subscribe((data) => {
      if (data.products && this.routeCategoryId) {        
        this.products = data.products.filter(product => product?.category == this.routeCategoryId);        
      } else if (data.products && !this.routeCategoryId) {
        this.products = data.products;
      }
    }) 
  }
}
