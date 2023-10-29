import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { productCartSelector } from '../../stores/product/product.selectors';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss']
})
export class ProductCartComponent {
  productCart$: Observable<ProductCart[]>;
  productCartTotalCount: number = 0;
  productCartTotalPrice: number = 0;

  constructor(
    private store: Store<AppState>
  ) {
    this.productCart$ = this.store.select(productCartSelector)
  }

  ngOnInit() {
    this.productCart$.subscribe((cart) => {
      this.productCartTotalCount = 0;
      this.productCartTotalPrice = 0;
      cart.forEach((product) => {
        this.productCartTotalCount = this.productCartTotalCount + product.counter;
        this.productCartTotalPrice = this.productCartTotalPrice + product.totalPrice;
      })
    })
  }
}
