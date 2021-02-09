import {Component, OnInit} from '@angular/core';
import {IUser} from '../../model/User';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUsersFromAPI().subscribe(value => this.users = value);
    console.log(this.users);
  }

}
