import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { User } from '../class/user';
import { UserService } from '../service/user.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: User[];
  
  public utilisateur: string;
  public mot_de_passe: string;
  public erreur: string;
  public time: number;

  constructor(private userService: UserService, private router: Router, private auth: AuthService) { }

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
        this.auth.sendToken(this.utilisateur);
        this.router.navigate(['home']);
      }
      else {
        this.erreur = "Mauvais utilisateur ou mot de passe";
        this.startTimer();
      }
    }
    this.utilisateur = "";
    this.mot_de_passe = "";
  }

  //Timer
  startTimer() {
    const source = timer(5000);
    const subscribe = source.subscribe(
      time => this.erreur = ""
      );
  }
}