import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { productsSelector, categorySelector } from '@app/stores/product/product.selectors';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { selectedCategorySelector } from '../../stores/product/product.selectors';
import { updateSelectedProductCategory } from '../../stores/product/product.actions';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent {
  products$: Observable<Product[]>;
  categories$: Observable<ProductCategory[]>;
  selectedCategory$: Observable<ProductCategory | undefined>;
  selectedCategory: ProductCategory = {} as ProductCategory;
  productFilterForm =  this.fb.group({
    name: [''],
    category: [''],
  });
  productFilterFormCategorySubscription: Subscription | undefined;


  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder
  ) {
    this.products$ = this.store.select(productsSelector);
    this.categories$ = this.store.select(categorySelector);
    this.selectedCategory$ = this.store.select(selectedCategorySelector)
  }
  

  async ngOnInit() {
    this.productFilterFormCategorySubscription = this.productFilterForm.get('category')?.valueChanges.subscribe(
      (value) => {
        const selectedCategory = JSON.parse(JSON.stringify(value));
        this.store.dispatch(updateSelectedProductCategory({ selectedCategory: selectedCategory}));
      }
    )
  }

  ngOnDestroy() {
    if (this.productFilterFormCategorySubscription)
      this.productFilterFormCategorySubscription.unsubscribe();
  }
}
