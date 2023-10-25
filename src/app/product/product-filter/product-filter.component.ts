import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { selectProducts } from '@app/stores/product/product.selectors';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent {
  products$: Observable<ProductState>;
  categories: ProductCategory[] = [];
  selectedCategory: ProductCategory = {} as ProductCategory;

  constructor(
    private store: Store<AppState>
  ) {
    this.products$ = this.store.select(selectProducts);
    this.products$.subscribe((data) => {
      this.categories = data.categories
    })
  }
  
  productFilterForm = new FormGroup({
    name: new FormControl(''),
    category: new FormControl(''),
  });

  ngOnInit() {
    // this.productFilterForm.setValue({
    //   name: 'name',
    //   category: 'category'
    // })
    

  }
}
