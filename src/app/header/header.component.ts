import { Component,OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ProductState } from '../store/product.reducer';
import { cartCount } from '../store/product.selector'
import { clearCart } from '../store/product.actions';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})

export class HeaderComponent implements OnInit {
  clicked: boolean = false;
  cartCount: number = 0;

  constructor(private store: Store<ProductState>){ }

  ngOnInit(): void{
    this.store.pipe(select(cartCount)).subscribe( cart => {
      this.cartCount = cart.length;
      console.log(this.cartCount)
    })
  }

  clearCart() : void {
    this.store.dispatch(clearCart())
  }
}
