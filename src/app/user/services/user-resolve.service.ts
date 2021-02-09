import {Injectable} from '@angular/core';
import {UserService} from './user.service';
import {Resolve} from '@angular/router';
import {IUser} from '../model/User';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve<IUser[]> {

  constructor(private userService: UserService) {
  }

  resolve(): Observable<IUser[]> | Promise<IUser[]> | IUser[] {
    return this.userService.getUsersFromAPI();
  }
}

