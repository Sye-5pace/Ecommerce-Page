import { createAction,props } from "@ngrx/store";
import { ProductType } from './product.reducer'

export const addToCart = createAction(
  '[Item] Add To Cart',props<{product: ProductType}>()
)

export const clearCart = createAction('[Product] Clear Cart')


