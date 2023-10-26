import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { productsSelector, categorySelector } from '@app/stores/product/product.selectors';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { selectedCategorySelector, productNameSearchSelector } from '@app/stores/product/product.selectors';
import { updateProductNameSearch, updateSelectedProductCategory } from '@app/stores/product/product.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent {
  products$: Observable<Product[]>;
  categories$: Observable<ProductCategory[]>;
  productSearchName$: Observable<string | undefined>;
  selectedCategory$: Observable<ProductCategory | undefined>;
  selectedCategory: ProductCategory | undefined = {} as ProductCategory;
  productFilterForm =  this.fb.group({
    name: [''],
    category: [''],
  });
  productFilterFormNameSubscription: Subscription | undefined;
  productFilterFormCategorySubscription: Subscription | undefined;
  selectedCategorySubscription: Subscription | undefined;


  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.products$ = this.store.select(productsSelector);
    this.categories$ = this.store.select(categorySelector);
    this.productSearchName$ = this.store.select(productNameSearchSelector);
    this.selectedCategory$ = this.store.select(selectedCategorySelector)
  }
  

  async ngOnInit() {
    this.productFilterFormCategorySubscription = this.productFilterForm.get('name')?.valueChanges.subscribe(
      (value) => {
        const productNameSearch = JSON.parse(JSON.stringify(value)).trim();
        this.store.dispatch(updateProductNameSearch({ productNameSearch: productNameSearch}))
      }
    )

    this.productFilterFormCategorySubscription = this.productFilterForm.get('category')?.valueChanges.subscribe(
      (value) => {
        let selectedCategory
        if (value) selectedCategory = JSON.parse(JSON.stringify(value));
        this.store.dispatch(updateSelectedProductCategory({ selectedCategory: selectedCategory}));
      }
    )

    this.selectedCategorySubscription = this.selectedCategory$.subscribe((selectedCategory) => {
      if (selectedCategory) {
        this.selectedCategory = selectedCategory;
      } else this.selectedCategory = undefined
    })
  }

  ngOnDestroy() {
    if (this.productFilterFormCategorySubscription)
      this.productFilterFormCategorySubscription.unsubscribe();
    if (this.productFilterFormCategorySubscription)
      this.productFilterFormCategorySubscription.unsubscribe();
    if (this.selectedCategorySubscription)
      this.selectedCategorySubscription.unsubscribe();
  }

  handleFilterSubmit() {
    if (this.selectedCategory?.id){
      this.router.navigate(['category', this.selectedCategory?.id]);
    } else {      
      this.router.navigate(['']);
    }
  }
}
