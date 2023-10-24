import { createSelector } from "@ngrx/store";

export const selectProducts = (state: AppState) => state.products

export const productSelector = createSelector(
    selectProducts,
    (state) => state.products
)