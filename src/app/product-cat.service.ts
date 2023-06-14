import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductCatService {
  unsubscribe() {
    throw new Error('Method not implemented.');
  }
  private blogUrl = "http://wordpress.test";
  constructor(private http: HttpClient) { }

  getProductCat() {
    const url = `${this.blogUrl}/wp-json/wp/v2/product_cat/`
    return this.http.get(url).pipe(catchError(this.errorHandler))
  }

  getProductCatBySlug(slug:any) {
    const url = `${this.blogUrl}/wp-json/wp/v2/product_cat?slug=${slug}`
    return this.http.get(url).pipe(catchError(this.errorHandler))
  }
  getProductCatById(id:any) {
    const url = `${this.blogUrl}/wp-json/wp/v2/product_cat/${id}`
    return this.http.get(url).pipe(catchError(this.errorHandler))
  }


  errorHandler(error: HttpErrorResponse) {
    return new Observable((observer: Observer<any>) => {
      observer.error(error)
    })
  }
}
