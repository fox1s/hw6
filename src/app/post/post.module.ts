import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PostRoutingModule} from './post-routing.module';
import {PostComponent} from './components/post/post.component';
import {PostsComponent} from './components/posts/posts.component';
import {PostsService} from './services/posts.service';
import {HttpClientModule} from '@angular/common/http';
import { PostInfoComponent } from './components/post-info/post-info.component';
import {PostResolveService} from './services/post-resolve.service';


@NgModule({
  declarations: [PostComponent, PostsComponent, PostInfoComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule
  ],
  providers: [PostsService, PostResolveService],
  exports: [HttpClientModule]
})
export class PostModule {
}
