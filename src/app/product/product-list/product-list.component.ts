import { Component } from '@angular/core';
import { ProductApiService } from '@app/product/services/api/product-api.service';
import { Store } from '@ngrx/store';
import { updateProducts, updateProductCategories } from '@app/stores/product/product.actions';
import { Observable } from 'rxjs/internal/Observable';
import { selectProducts } from '@app/stores/product/product.selectors';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription, combineLatest, combineLatestWith, merge } from 'rxjs';
import { productNameSearchSelector } from '@app/stores/product/product.selectors';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  productState$: Observable<ProductState>;
  productNameSearch$: Observable<string | undefined>;
  products: Product[] = [];
  routeCategoryId?: number = undefined;
  routerSubscription: Subscription | undefined;
  productStateSubscription: Subscription | undefined;
  productNotFound: boolean = false;
  
  constructor(
    private productApi: ProductApiService,
    private store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    this.productState$ = this.store.select(selectProducts);
    this.productNameSearch$ = this.store.select(productNameSearchSelector)
  }
  
  async ngOnInit() {

    const productsData = await this.productApi.getData();
    this.store.dispatch(updateProducts({products: productsData.productItemsData}));
    this.store.dispatch(updateProductCategories({categories: productsData.productCategoryData}));

    const combineProductNameSearchRouteParams =
      combineLatest([this.productState$, this.productNameSearch$, this.route.params])

    this.productStateSubscription = combineProductNameSearchRouteParams
      .subscribe(([data, productNameSearch, params]) => {
        this.routeCategoryId = Number(params['categoryId'])
        if (data.products && this.routeCategoryId) {        
          this.products = data.products.filter(product => product?.category == this.routeCategoryId);
        } else if (data.products && !this.routeCategoryId) {
          this.products = data.products;
        }
        if(productNameSearch)
          this.products =
            this.products.filter(product => product.name
                                            .toLowerCase()
                                            .includes(productNameSearch.toLowerCase()));
        this.getProductNotFound();
      })
  }

  ngOnDestroy() {
    if (this.productStateSubscription)
      this.productStateSubscription.unsubscribe();
  }

  getProductNotFound() {
    if (!this.products.length) {
      this.productNotFound = true;
    } else this.productNotFound = false;
  }
}
