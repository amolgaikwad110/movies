import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes} from '@angular/router';
import { HttpModule , Http } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { UserService } from './user.service';
import { AuthGuardGuard } from './auth-guard.guard';
import { appRoutes } from './app.routing';
import { MoviesListComponent } from './home/movies-list/movies-list.component';
import { MovieDetailComponent } from './home/movie-detail/movie-detail.component';
import { SearchFilterPipe } from './search-filter.pipe';


// const appRoutes : Routes = [
//   { path: '' , component : LoginFormComponent }, 
//   { path: 'home' , 
//     canActivate: [AuthGuardGuard] , 
//     component : HomeComponent },
// ];

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MoviesListComponent,
    MovieDetailComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule, 
    HttpModule, 
    RouterModule.forRoot(appRoutes), 
    FormsModule
  ],
  providers: [UserService , AuthGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
