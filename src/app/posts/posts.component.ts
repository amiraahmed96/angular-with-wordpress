import { Component } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  blogPosts: any
  errorMsg: any
  constructor(private blogServices: BlogService) {

  }

  ngOnInit() {
    this.getPosts()
  }

  getPosts() {
    this.blogServices.getPosts().subscribe(
      data => {
        this.blogPosts = data
        console.log(data)
      },
      (error)=> {
        this.errorMsg = error.message
        console.log(error)
      }
    )
  }

}
