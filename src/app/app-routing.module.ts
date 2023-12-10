import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './template/home/home.component';

const routes: Routes = [
   {
    path: 'login',
    component: LoginComponent,
    title: 'Login'
  },
   {
    path: 'register',
    component: RegisterComponent,
    title: 'Register'
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
   {
    path: 'home',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
