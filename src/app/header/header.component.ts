import { clearCart } from './../store/product.actions';
import { Component,OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ProductState } from '../store/product.reducer';
import { cartCount } from '../store/product.selector'



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})

export class HeaderComponent implements OnInit {
  clicked: boolean = false;
  cartItemCount: number = 0; 
  modalClicked: boolean = false; 
  mobileClicked: boolean = false

  constructor(private store: Store<{product: ProductState}>){ }

  ngOnInit(): void{
    this.store.pipe(select(cartCount)).subscribe(count => {
      this.cartItemCount = count
    })
  }

  clearCart() {
    this.store.dispatch(clearCart())
  }

}
