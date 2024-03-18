import { Component,OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ProductState } from '../store/product.reducer';
import { clearCart } from '../store/product.actions';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  clicked: boolean = false;
  cartCount: number = 0;

  constructor(private store: Store<ProductState>){ }

  ngOnInit(): void{
    this.store.pipe(select(state => {
      this.cartCount = state.cartItems.length
    }))
  }

  clearCart() : void {
    this.store.dispatch(clearCart())
  }
}
