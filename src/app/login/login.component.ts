import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
  public erreurUser: string;
  public erreurMdp: string;

  constructor(private userService: UserService, private router: Router, private http: HttpClient) { }

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

  public submit() {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].utilisateur == this.utilisateur && this.users[i].mot_de_passe == this.mot_de_passe) {
        this.router.navigate(['home']);
      }
      else {
        this.erreur = "Mauvais utilisateur ou mot de passe";
      }
    }
  }

}