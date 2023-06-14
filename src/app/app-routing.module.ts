import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryPageComponent } from './category-page/category-page.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PostsComponent } from './posts/posts.component';
import { SingleCategoryComponent } from './single-category/single-category.component';
import { SinglePostComponent } from './single-post/single-post.component';

const routes: Routes = [
  {path: 'posts', component: PostsComponent},
  {path: 'post/:id', component: SinglePostComponent},
  {path: 'category',component:CategoryPageComponent,
  children: [
    {path:'',redirectTo:'not-found',pathMatch:'full'},
    {path: 'cat/:slug', component: SingleCategoryComponent }
    ]
},
  {path: 'not-found', component: NotfoundComponent},
  {path: '', component: HomeComponent},
  {path: '**', redirectTo:'not-found', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
