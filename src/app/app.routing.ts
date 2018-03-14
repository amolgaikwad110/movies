import { MovieDetailComponent } from './home/movie-detail/movie-detail.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { Routes } from '@angular/router' ;

export const appRoutes : Routes = [
  { path: 'login' , component: LoginFormComponent} , 
  { path: 'home' , 
    canActivate: [AuthGuardGuard] , 
    component : HomeComponent }, 
  { path: 'movies/:id', component: MovieDetailComponent},
  { path: '' , redirectTo : '/login', pathMatch : 'full'} ,
];