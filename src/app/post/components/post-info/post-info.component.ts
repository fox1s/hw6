import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IPosts} from '../../models/Posts';

@Component({
  selector: 'app-post-info',
  templateUrl: './post-info.component.html',
  styleUrls: ['./post-info.component.css']
})
export class PostInfoComponent implements OnInit {

  id;
  post: IPosts;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => this.id = value);
    console.log(this.id.id);

    this.activatedRoute.data.subscribe(value => [this.post] = value.postData.filter(post => post.userId === Number(this.id.id)));
    console.log(this.post);
  }

  ngOnInit(): void {

  }

}
