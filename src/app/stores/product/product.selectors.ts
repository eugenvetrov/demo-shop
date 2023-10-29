import { createSelector } from "@ngrx/store";
import { state } from '@angular/animations';

export const selectProducts = (state: AppState) => state.products

export const productsSelector = createSelector(
    selectProducts,
    (state: ProductState) => state.products
)

export const categorySelector = createSelector(
    selectProducts,
    (state: ProductState) => state.categories
)

export const productNameSearchSelector = createSelector(
    selectProducts,
    (state: ProductState) => state.productNameSearch
)

export const selectedCategorySelector = createSelector(
    selectProducts,
    (state: ProductState) => state.selectedCategory
)

export const productCartSelector = createSelector(
    selectProducts,
    (state: ProductState) => state.productCart
)