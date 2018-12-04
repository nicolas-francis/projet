import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* import { AuthGuardService as AuthGuard } from './auth/auth-guard.service'; */

import { HomeComponent } from "./home/home.component";
import { AddProjectComponent } from "./add-project/add-project.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
    /* ,canActivate: [AuthGuard] */
  },
  {
    path: 'add',
    component: AddProjectComponent
    /* ,canActivate: [AuthGuard] */
  },
  {
    path: '**',
    component: HomeComponent
    /* ,canActivate: [AuthGuard] */
  }
];


/*
const routes: Routes = [
   { 
     path: 'customers', 
     component: CustomerComponent 
   },
   { 
     path: 'customer/add', 
     component: AddCustomerComponent 
   },
   { 
     path: 'customers/:id', 
     component: CustomerDetailsComponent 
   },
   { 
     path: '', 
     redirectTo: 'customers', 
     pathMatch: 'full'
   }, 
];
*/

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }