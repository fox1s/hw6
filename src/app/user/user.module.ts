import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/user/user.component';
import {UserService} from './services/user.service';
import {UserInfoComponent} from './components/user-info/user-info.component';
import {HttpClientModule} from '@angular/common/http';
import {UserResolveService} from './services/user-resolve.service';


@NgModule({
  declarations: [UsersComponent, UserComponent, UserInfoComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ],
  providers: [UserService, UserResolveService],
  exports: [HttpClientModule]
})
export class UserModule {
}
