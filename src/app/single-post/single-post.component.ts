import { Component } from '@angular/core';
import { BlogService } from '../blog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent {

  id: string = ""
  singlePost: any
  errorMsg: any

  constructor(private blogServices: BlogService,
    private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') as string
    this.getSinglePost()
  }
  getSinglePost() {
    this.blogServices.getSinglePosts(this.id).subscribe(
      data => {
        this.singlePost = data
        console.log(data)
      },
      (error)=> {
        this.errorMsg = error.message
        console.log(error)
      }
    )
  }
}
