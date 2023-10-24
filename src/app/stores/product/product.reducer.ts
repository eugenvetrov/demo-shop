import { createReducer, on } from '@ngrx/store';
import { updateProductCategories, updateProducts } from '@app/stores/product/product.actions';

export const initialState: ProductState = {
  products: [],
  categories: []
};

export const productReducer = createReducer(
  initialState,
  on(updateProducts, (state, action) => ({ ...state, products: action.products })),
  on(updateProductCategories, (state, action) => ({ ...state, categories: action.categories }))
);