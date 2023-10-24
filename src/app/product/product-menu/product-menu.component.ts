import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { selectProducts } from '@app/stores/product/product.selectors';

@Component({
  selector: 'app-product-menu',
  templateUrl: './product-menu.component.html',
  styleUrls: ['./product-menu.component.scss']
})
export class ProductMenuComponent {
  products$: Observable<ProductState>;
  categories: ProductCategory[] = [];

  constructor (private store: Store<AppState>) {
    this.products$ = this.store.select(selectProducts);
  }

  ngOnInit() {
    this.products$.subscribe((data) => {
      this.categories = data.categories
    })
  }

}
