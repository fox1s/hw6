import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './components/users/users.component';
import {UserInfoComponent} from './components/user-info/user-info.component';
import {UserResolveService} from './services/user-resolve.service';

const routes: Routes = [
  {path: '', component: UsersComponent, children: [
      {path: ':id', component: UserInfoComponent, resolve: {userData: UserResolveService}}
    ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
