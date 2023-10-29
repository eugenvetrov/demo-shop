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
  productCart$: Observable<ProductId[]>;

  constructor(
    private store: Store<AppState>
  ) {
    this.productCart$ = this.store.select(productCartSelector)
  }

  ngOnInit() {
    this.productCart$.subscribe((product) => {
      console.log(product);
    })
  }
}
