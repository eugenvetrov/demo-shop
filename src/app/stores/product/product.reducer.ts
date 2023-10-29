import { createReducer, on } from '@ngrx/store';
import {
  updateSelectedProductCategory,
  updateProductCategories,
  updateProducts, 
  updateProductNameSearch,
  updateProductCart
} from '@app/stores/product/product.actions';

export const initialState: ProductState = {
  products: [],
  categories: [],
  productNameSearch: '',
  selectedCategory: {} as ProductCategory,
  productCart: [] as ProductCart[]
};


export const productReducer = createReducer(
  initialState,
  on(updateProducts, (state, action) => ({ ...state, products: action.products })),
  on(updateProductCategories, (state, action) => ({ ...state, categories: action.categories })),
  on(updateProductNameSearch, (state, action) => ({ ...state, productNameSearch: action.productNameSearch})),
  on(updateSelectedProductCategory, (state, action) => ({ ...state, selectedCategory: action?.selectedCategory})),
  on(updateProductCart, (state, action) => ({ ...state, productCart: action.productCart})),
);