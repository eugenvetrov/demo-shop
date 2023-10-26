import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { categorySelector } from '../../stores/product/product.selectors';

@Component({
  selector: 'app-product-menu',
  templateUrl: './product-menu.component.html',
  styleUrls: ['./product-menu.component.scss']
})
export class ProductMenuComponent {
  categories$: Observable<ProductCategory[]>;
  categories: ProductCategory[] = [];

  constructor (private store: Store<AppState>) {
    this.categories$ = this.store.select(categorySelector);
  }

  ngOnInit() {
    this.categories$.subscribe((categories) => {
      this.categories = categories
    })
  }

}
