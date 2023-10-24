import { createAction, props } from "@ngrx/store";

export const updateProducts = createAction('[ProductList Component] updateProducts',
                                            props<{ products: Product[] }>());