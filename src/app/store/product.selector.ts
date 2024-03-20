import { createSelector,createFeatureSelector } from '@ngrx/store'
import { ProductState } from './product.reducer'

export const productState = createFeatureSelector<ProductState>('cartItems')

export const cartCount = createSelector(
  productState,
  (state) => state.cartItems
)
