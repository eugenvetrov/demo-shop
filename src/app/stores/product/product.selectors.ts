import { createSelector } from "@ngrx/store";

export const selectProducts = (state: AppState) => state.products

export const productsSelector = createSelector(
    selectProducts,
    (state: ProductState) => state.products
)

export const categorySelector = createSelector(
    selectProducts,
    (state: ProductState) => state.categories
)

export const selectedCategorySelector = createSelector(
    selectProducts,
    (state: ProductState) => state.selectedCategory
)