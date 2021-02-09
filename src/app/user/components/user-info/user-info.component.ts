import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IUser} from '../../model/User';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  id;
  user: IUser;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => this.id = value);
    this.activatedRoute.data.subscribe(value => [this.user] = value.userData.filter(user => user.id === Number(this.id.id)));
  }

  ngOnInit(): void {
  }

}
