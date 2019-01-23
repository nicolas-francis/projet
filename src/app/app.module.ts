import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './guard/auth.guard';
import { AuthService } from './service/auth.service';

// Module JQuery pour les formulaires et pour IE
import { CalendarModule } from 'primeng/calendar';
import { SpinnerModule } from 'primeng/spinner';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';

// Pas utilisé à cause que nous ne pouvons pas mettre 2 champs dans le même combobox mais peut être une bonne alernative si nous 
// n'avons pas besoin de plusieurs champs dans le même combobox plus tard
import { DropdownModule } from 'primeng/dropdown';

import { HomeComponent } from './home/home.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { LoginComponent } from './login/login.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { AddUtilisateurComponent } from './add-utilisateur/add-utilisateur.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddProjectComponent,
    LoginComponent,
    UtilisateurComponent,
    AddUtilisateurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CalendarModule,
    SpinnerModule,
    PasswordModule,
    InputTextModule,
    DropdownModule
  ],
  providers: [
    AuthService, 
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
