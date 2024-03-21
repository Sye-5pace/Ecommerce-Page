import { createSelector,createFeatureSelector } from '@ngrx/store'
import { ProductState } from './product.reducer'

export const productState = createFeatureSelector<ProductState>('product')

export const cartCount = createSelector(
  productState,
  (state) => {
    return state.cartItems.reduce((total, item) => total + item.quantity, 0);
  }
)
