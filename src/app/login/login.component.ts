import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../class/user';
import { UserService } from '../service/user.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: User[];
  message: string;
  public utilisateur: string;
  public mot_de_passe: string;
  public erreur: string;

  //Variables le timer du message d'erreur
  timeLeft: number = 15;
  interval;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
 }

  getUsers() {
    return this.userService.getUsers()
                .subscribe(
                  users => {
                  console.log(users);
                  this.users = users
                  }
                );
  }

  //login
  public submit() {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].utilisateur == this.utilisateur && this.users[i].mot_de_passe == this.mot_de_passe) {
        this.router.navigate(['home']);
      }
      else {
        this.startTimer();
        
        this.erreur = "Mauvais utilisateur ou mot de passe";
        this.utilisateur = "";
        this.mot_de_passe = "";
      }
    }
  }

  //Message d'erreur / Timer
  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
        this.erreur = "Mauvais utilisateur ou mot de passe";
      } else {
        this.pauseTimer();
        this.erreur = "";
      }
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

}