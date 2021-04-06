import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AuthorizedUserGuard} from '@intersalonica/ng-security';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./register/register.module').then((m) => m.RegisterModule),
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'users',
    canActivate: [AuthorizedUserGuard],
    data: {
      roles: ['ROLE_USER'],
      unauthorizedRedirect: 'page-one',
      forbiddenRedirect: 'page-three'
    },
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'add-car',
    loadChildren: () =>
      import('./add-car/add-car.module').then((m) => m.AddCarModule),
  },
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
