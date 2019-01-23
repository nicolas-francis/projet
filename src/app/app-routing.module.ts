import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth.guard'

import { HomeComponent } from "./home/home.component";
import { AddProjectComponent } from "./add-project/add-project.component";
import { LoginComponent } from "./login/login.component";
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { AddUtilisateurComponent } from './add-utilisateur/add-utilisateur.component';

// Toutes les routes de l'application
const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add',
    component: AddProjectComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user',
    component: UtilisateurComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'useradd',
    component: AddUtilisateurComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'useradd/:id',
    component: AddUtilisateurComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add/:id',
    component: AddProjectComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: HomeComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }