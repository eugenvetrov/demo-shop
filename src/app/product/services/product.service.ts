import { Injectable } from '@angular/core';
import { productsSelector } from '@app/stores/product/product.selectors';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products$: Observable<Product[]>
  products: Product[] = [];
  productsSubscription: Subscription | undefined;

  constructor(
    private store: Store<AppState>
  ) {
    this.products$ = this.store.select(productsSelector)
    this.productsSubscription = this.products$.subscribe((products) => {
      this.products = products;
    })
  }

  getProducts() {
    return this.products
  }

  ngOnDestroy() {
    if(this.productsSubscription)
    this.productsSubscription.unsubscribe();
  }
}
