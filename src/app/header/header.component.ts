import { clearCart } from './../store/product.actions';
import { Component,OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ProductState } from '../store/product.reducer';
import { cartItems } from '../store/product.selector'



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})

export class HeaderComponent implements OnInit {
  clicked: boolean = false;
  cartItemCount: number ; 
  modalClicked: boolean = false; 
  mobileClicked: boolean = false
  
  constructor(private store: Store<ProductState>) {
    this.cartItemCount = 0;  
    this.store.pipe(select(cartItems)).subscribe(item => {
      if (item) {
        this.cartItemCount = item.reduce((total, item) => total + item.quantity, 0);
      }
    });
  }

  ngOnInit(): void{
    
  }

  clearCart() {
    this.store.dispatch(clearCart())
  }
}
