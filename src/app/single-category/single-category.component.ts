import { Component, Input } from '@angular/core';
import { ProductCatService } from '../product-cat.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent {

  // url:string = ""; 
  // errorMsg: any
  // singleCat: any;
  // slug:any;
  // catID:number | undefined;
  // allProduct: any;
  // allCat:any;

  @Input() allProduct: any;
  constructor(private productCatService: ProductCatService, private productSrvice :ProductService) {
    // this.url =window.location.href;
  }
  // ngOnChanges() {
  //   this.slug = this.url.split('/')[5];  
  //   this.getProductCat();
  // }
  ngOnInit() {
    // this.slug = this.url.split('/')[5];  
    // this.getProductCat();
  }

  // getProductCat() {
  //   this.productCatService.getProductCatBySlug(this.slug).subscribe(
  //     data => {
  //       this.singleCat = data;
  //       console.log(this.slug)
  //       this.catID = this.singleCat[0].id;
  //       this.productSrvice.getProductByCatID(this.catID ).subscribe(
  //         data => {
  //           this.allProduct = data;
  //           // console.log(this.allProduct)
  //         },
  //         (error)=> {
  //           this.errorMsg = error.message;
  //         }
  //       )
  //     },
  //     (error)=> {
  //       this.errorMsg = error.message
  //       console.log(error)
  //     }
  //   )
  // }

 
}
