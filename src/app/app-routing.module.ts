import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './auth-guard-service';

const routes: Routes = [
  { path: 'home/:id', component: HomeComponent, canActivate: [AuthGuardService] },
  { path: 'cardetails', component: CardDetailsComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: '', pathMatch: 'full', redirectTo: 'cardetails'},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
