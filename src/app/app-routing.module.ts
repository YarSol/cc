import { LoginComponent } from './components/login/login.component';
import { CompetitionComponent } from './components/competition/competition.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompetitionsComponent } from './components/competitions/competitions.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UsersComponent } from './components/users/users.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent },

  { path: 'competitions/:id', component: CompetitionComponent, canActivate: [AuthGuard] },
  { path: 'competitions', component: CompetitionsComponent, canActivate: [AuthGuard] },

  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LoginComponent },

  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
