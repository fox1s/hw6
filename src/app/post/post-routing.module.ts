import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostsComponent} from './components/posts/posts.component';
import {PostInfoComponent} from './components/post-info/post-info.component';
import {PostResolveService} from './services/post-resolve.service';

const routes: Routes = [
  {
    path: '', component: PostsComponent, children: [
      {
        path: ':id', component: PostInfoComponent, resolve: {postData: PostResolveService}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule {
}
