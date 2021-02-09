import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import {IPosts} from '../models/Posts';
import {Observable} from 'rxjs';
import {PostsService} from './posts.service';

@Injectable({
  providedIn: 'root'
})
export class PostResolveService implements Resolve<IPosts[]> {

  constructor(private postsService: PostsService) { }

  resolve(): Observable<IPosts[]> | Promise<IPosts[]> | IPosts[] {
    return this.postsService.getPostsFromAPI();
  }
}
