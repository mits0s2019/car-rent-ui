import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarCollectionComponent } from './car-collection/car-collection.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SuccessComponent } from './register/success/success.component';

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
    component: RegisterComponent,
    children: [
      {
        path: 'success', // child route path
        component: SuccessComponent, // child route component that the router renders
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'my-cars',
    component: CarCollectionComponent,
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule),
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
