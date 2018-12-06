import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { User } from '../class/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //tous les utilisateurs
  users: User[];
  //seulement 1 utilisateur (pour l'ajout et la suppression)
  user = new User;
  message: string;
  public utilisateur: string;
  public mot_de_passe: string;
  public utilisateurIns: string;
  public mot_de_passeIns: string;
  public idUp: number;
  public idSup: number = 0;
  public utilisateurUp: string;
  public mot_de_passeUp: string;
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

  //login
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

  //register
  addUser() {
    this.user.utilisateur = this.utilisateurIns;
    this.user.mot_de_passe = this.mot_de_passeIns;

    this.save();
  }

  //enregistrer les données dans la table
  //lier avec la fonction addUser()
  private save(): void {
    console.log(this.user);
    this.userService.addUser(this.user)
        .subscribe();

    this.refresh();
  }

  //updater un enregistrement
  update(): void {
    this.user.id = this.idUp;
    this.user.utilisateur = this.utilisateurUp;
    this.user.mot_de_passe = this.mot_de_passeUp;

    console.log(this.user);
    this.userService.updateUser(this.user)
        .subscribe(result => this.message = "User Updated Successfully!");
    
    this.refresh();
  }

  //supprimer
  delete(): void {
    this.user.id = this.idSup;

    console.log(this.user);
    this.userService.deleteUser(this.user)
        .subscribe(result => this.message = "User Deleted Successfully!");

    this.refresh();
  }

  //refresher la page après que le form a été submit
  refresh(): void {
    window.location.reload();
  }

}