import { createReducer,on } from "@ngrx/store"
import * as ProductActions from './product.actions'

export interface ProductType {
  image: string,
  name: string,
  price: number,
  quantity: number
}

export interface ProductState {
  cartItems: ProductType[]
}

export const initialState: ProductState = {
  cartItems: []
}

export const productReducer = createReducer(
  initialState,
  on(ProductActions.addToCart, (state, {product}) => ({
    ...state,
    items: [...state.cartItems, product]
  })),
  on(ProductActions.clearCart, (state) => ({
    ...state,
    cartItems:[]
  }))
)