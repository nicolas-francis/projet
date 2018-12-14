import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from '../class/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-add-utilisateur',
  templateUrl: './add-utilisateur.component.html',
  styleUrls: ['./add-utilisateur.component.css']
})
export class AddUtilisateurComponent implements OnInit {
  user = new User;

  message: string;
  public endUrl: string;
  public verifNumber: number;
  public updateShow: boolean = false;
  public idUser: number;

  public utilisateurIns: string;
  public mot_de_passeIns: string;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.endUrl = window.location.href;
    this.endUrl = this.endUrl.substr(window.location.href.lastIndexOf('/') + 1);
    this.verifNumber = +this.endUrl;

    if (this.verifNumber > 0) {
      this.updateShow = true;
      
      const id = +this.route.snapshot.paramMap.get('id');
      this.userService.getUser(id)
          .subscribe(user => this.user = user);
    }
  }

  //lis les champs du form avec les champs de la BD
  addUser() {
    this.user.utilisateur = this.utilisateurIns;
    this.user.mot_de_passe = this.mot_de_passeIns;

    this.save();
  }

  //enregistrer les données dans la table
  //lier avec la fonction addUser() plus haut
  private save(): void {
    console.log(this.user);
    this.userService.addUser(this.user)
        .subscribe();

    window.location.href = "/user";
  }

  //Supprimer
  delete(): void {
    this.idUser = +this.endUrl;

    console.log(this.user);
    this.userService.deleteUser(this.user)
        .subscribe(result => this.message = "User Deleted Successfully!");

    window.location.href = "/user";
  }

  //modifier
  update(): void {
    this.userService.updateUser(this.user)
        .subscribe(result => this.message = "User Updated Successfully!");

    window.location.href = "/user";
  }

}