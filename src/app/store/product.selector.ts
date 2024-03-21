import { createSelector,createFeatureSelector } from '@ngrx/store'
import { ProductState } from './product.reducer'

export const productState = createFeatureSelector<ProductState>('product')

export const cartItems = createSelector(
  productState,
  (state) => state.cartItems
)
