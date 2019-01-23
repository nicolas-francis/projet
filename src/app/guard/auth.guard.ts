import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private myRoute: Router
  ){ }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      // Si l'utilisateur est logged accepter la route sinon, le renvoyer au root du site
      if(this.auth.isLoggednIn()) {
        return true;
      }
      else {
        this.myRoute.navigate(["/"]);
        return false;
      }
  }
}