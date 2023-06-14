import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostsComponent } from './posts/posts.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { BlogService } from './blog.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './slider/slider.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductCatService } from './product-cat.service';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { SingleCategoryComponent } from './single-category/single-category.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { LoadingComponent } from './loading/loading.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostsComponent,
    SinglePostComponent,
    NotfoundComponent,
    HomeComponent,
    SliderComponent,
    ProductCategoryComponent,
    SingleCategoryComponent,
    CategoryPageComponent,
    LoadingComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [
    BlogService,
    ProductCatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
