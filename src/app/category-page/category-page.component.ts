import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductCatService } from '../product-cat.service';
import { ProductService } from '../product.service';
import { SingleCategoryComponent } from '../single-category/single-category.component';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent {
  allCat:any;
  errorMsg:any;
  url:string = ""; 
  singleCat: any;
  slug:any;
  catID:number | undefined;
  allProduct: any;
  loading: boolean = false;
  constructor(private productCatService: ProductCatService,private productSrvice :ProductService, private router: Router) {
    this.url =window.location.href;
  }
  ngOnInit() {
    this.getAllProductCat();
    this.slug = this.url.split('/')[5];  
    this.getProductCat();
  }

  // goToCmponent(slug:any) {
  //   console.log('http://localhost:4200/category/cat/'+slug)
  //   this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
  //     this.router.navigate([SingleCategoryComponent]);
  // }); 
  // }

  getProductCat() {
    this.loading = true;
    this.productCatService.getProductCatBySlug(this.slug).subscribe(
      data => {
        this.singleCat = data;
        console.log(this.slug)
        this.catID = this.singleCat[0].id;
        this.productSrvice.getProductByCatID(this.catID ).subscribe(
          data => {
            this.allProduct = data;
            this.loading = false;
            // console.log(this.allProduct)
          },
          (error)=> {
            this.errorMsg = error.message;
          }
        )
      },
      (error)=> {
        this.errorMsg = error.message
        console.log(error)
      }
    )
  }

  navigateUrl(url:any) {
    this.router.navigate(['/category/cat/'+url]).then(() => {
      // this.service.setData(data);
      this.url =window.location.href;
      this.slug = this.url.split('/')[5]; 
      this.getProductCat();
     });
  }

//   reloadComponent(urlToNavigateTo ?:string){
//     //skipLocationChange:true means dont update the url to / when navigating
//    console.log("Current route I am on:",this.router.url);
//    const url=self ? this.router.url :urlToNavigateTo;
//    this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
//      this.router.navigate([`/${url}`]).then(()=>{
//        console.log(`After navigation I am on:${this.router.url}`)
//      })
//    })
//  }



  getAllProductCat() {
    this.productCatService.getProductCat().subscribe(
      data => {
        this.allCat = data;
      },
      (error)=> {
        this.errorMsg = error.message
        console.log(error)
      }
    )
  }
}
