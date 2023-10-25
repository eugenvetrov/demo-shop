import { createReducer, on } from '@ngrx/store';
import {
  updateSelectedProductCategory,
  updateProductCategories,
  updateProducts } from '@app/stores/product/product.actions';

export const initialState: ProductState = {
  products: [],
  categories: [],
  selectedCategory: { "id": 0, "name": ''}
};

export const productReducer = createReducer(
  initialState,
  on(updateProducts, (state, action) => ({ ...state, products: action.products })),
  on(updateProductCategories, (state, action) => ({ ...state, categories: action.categories })),
  on(updateSelectedProductCategory, (state, action) => ({ ...state, selectedCategory: action.selectedCategory}))
);