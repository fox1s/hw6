import {Component, OnInit} from '@angular/core';
import {PostsService} from '../../services/posts.service';
import {IPosts} from '../../models/Posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: IPosts[];

  constructor(private postsService: PostsService) {
  }

  ngOnInit(): void {
    this.postsService.getPostsFromAPI().subscribe(value => this.posts = value);

  }

}
