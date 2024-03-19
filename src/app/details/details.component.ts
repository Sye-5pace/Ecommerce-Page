import { Component,OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { ProductState } from '../store/product.reducer';
import { addToCart } from '../store/product.actions';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html'
})

export class DetailsComponent implements OnInit {
  count = 0;

  constructor(private store: Store<ProductState>){}

  ngOnInit(): void{}

  addItemToCart() {
    const product = {
      image: '../assets/image-product-1-thumbnail.jpg',
      name: "Fall Limited Edition",
      price: 125.00,
      quantity: this.count
    }
    this.store.dispatch(addToCart({product}))
  }

  decrement(){
    this.count--;
  }

  increment(){
    this.count++;
  }
}
