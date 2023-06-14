import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private blogUrl = "http://wordpress.test";
  constructor(private http: HttpClient) { }

  getProductByCatID(CatID: any) {
    const url = `${this.blogUrl}/wp-json/wc/store/products?category=${CatID}`;
    return this.http.get(url).pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse) {
    return new Observable((observer: Observer<any>) => {
      observer.error(error)
    })
  }
}
