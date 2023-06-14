import { Component } from '@angular/core';
import { data } from 'jquery';
import { ProductCatService } from '../product-cat.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent {
  errorMsg: any
  allCat: any;
  constructor(private productCatService: ProductCatService) {}

  ngOnInit() {
    this.getProductCat()
  }

  getProductCat() {
    this.productCatService.getProductCat().subscribe(
      data => {
        this.allCat = data;
        console.log(this.allCat)
      },
      (error)=> {
        this.errorMsg = error.message
        console.log(error)
      }
    )
  }
}
