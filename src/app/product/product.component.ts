import { Component,OnInit } from '@angular/core';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})

export class ProductComponent implements OnInit{
  clicked: boolean = false;
  imageRef = '../../assets/product1.jpg';
  currentImageIndex = 0;

  imgList = [
    '../../assets/product1.jpg',
    '../../assets/product2.jpg',
    '../../assets/product3.jpg',
    '../../assets/product4.jpg'
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
