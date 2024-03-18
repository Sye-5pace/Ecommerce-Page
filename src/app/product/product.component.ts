import { Component,OnInit } from '@angular/core';
import productImage1 from '../../assets/product1.jpg';
import productImage2 from '../../assets/product2.jpg';
import productImage3 from '../../assets/product3.jpg';
import productImage4 from '../../assets/product4.jpg';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})

export class ProductComponent implements OnInit{
  clicked: boolean = false;
  imageRef = 'productImage1';
  currentImageIndex = 0;

  imgList = [
    productImage1,
    productImage2,
    productImage3,
    productImage4
  ]

  ngOnInit(): void {}

  imageUpdater(imageURL: string){
    this.imageRef = imageURL
  }

  navigateImage(direction: string){
    if( direction === 'prev'){
      this.currentImageIndex = (this.currentImageIndex -1 + this.imgList.length)
       % this.imgList.length
    }else if( direction === 'next'){
      this.currentImageIndex = (this.currentImageIndex + 1) % this.imgList.length
    }
    this.imageUpdater(this.imgList[this.currentImageIndex])
  }
}
