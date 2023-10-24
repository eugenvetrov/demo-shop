import { createReducer, on } from '@ngrx/store';
import { updateProducts } from '@app/stores/product/product.actions';

export const initialState: ProductState = {
  products: []
};

export const productReducer = createReducer(
  initialState,
  on(updateProducts, (state, action) => ({ ...state, products: action.products }))
);