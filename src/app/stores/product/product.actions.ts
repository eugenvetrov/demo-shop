import { createAction, props } from "@ngrx/store";

export const updateProducts = createAction('[ProductList Component] updateProducts',
                                            props<{ products: Product[] }>());

export const updateProductCategories = createAction('[ProductList Component] updateProductCategpries',
                                            props<{ categories: ProductCategory[]}>());

export const updateSelectedProductCategory = createAction('[ProductFilter Component] updateSelectedProductCategory',
                                            props<{ selectedCategory: ProductCategory}>());