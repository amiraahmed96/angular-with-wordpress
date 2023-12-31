import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private blogUrl = "http://wordpress.test";
  constructor(private http: HttpClient) { }

  getPosts() {
    const url = `${this.blogUrl}/wp-json/wp/v2/posts/`
    return this.http.get(url).pipe(catchError(this.errorHandler))
  }
  getSinglePosts(id:any) {
    const url = `${this.blogUrl}/wp-json/wp/v2/posts/${id}`
    return this.http.get(url).pipe(catchError(this.errorHandler))
  }
  errorHandler(error: HttpErrorResponse) {
    return new Observable((observer: Observer<any>) => {
      observer.error(error)
    })
  }
}
