import { createAction, props } from "@ngrx/store";

export const updateProducts = createAction('[ProductList Component] updateProducts',
                                            props<{ products: Product[] }>());

export const updateProductCategories = createAction('[ProductList Component] updateProductCategpries',
                                            props<{ categories: ProductCategory[]}>());

export const updateProductNameSearch = createAction('[ProductFilter Component] updateProductNameSearch',
                                            props<{ productNameSearch: string}>());

export const updateSelectedProductCategory = createAction('[ProductFilter Component] updateSelectedProductCategory',
                                            props<{ selectedCategory: ProductCategory | undefined}>());

export const initProductCartMap = createAction('[ProductList Component] initProductCartMap')

export const updateProductCart = createAction('[ProductList component] updateProductCart',
                                            props<{ productCart: ProductCart[] }>());