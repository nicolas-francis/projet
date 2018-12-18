import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from '../class/user';
import { UserService } from '../service/user.service';
import { NavbarService } from '../service/navbar.service';

@Component({
  selector: 'app-add-utilisateur',
  templateUrl: './add-utilisateur.component.html',
  styleUrls: ['./add-utilisateur.component.css']
})
export class AddUtilisateurComponent implements OnInit {
  //un seul utilisateur avec la structure du module
  user = new User;

  //variables pour avoir le bon format dans les champs user et MDP
  public errorUser: boolean = false;
  public errorPass: boolean = false;
  public userReg = new RegExp('^[a-zA-Z0-9]');
  public passReg = new RegExp('^[a-zA-Z0-9+!"/$%?&*()_^¨:`>.~=,éÉ;<>]');
  public testRegex: boolean;

  //pour faire afficher le formulaire update ou insert
  public endUrl: string;
  public verifNumber: number;
  public updateShow: boolean = false;
  public idUser: number;

  //valeurs des champs du formulaire
  public utilisateurIns: string;
  public mot_de_passeIns: string;

  constructor(private userService: UserService, private route: ActivatedRoute, public nav: NavbarService) { }

  ngOnInit() {
    this.nav.show();
    
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
    //ajoute les valeurs des champs dans la variable qui est liée au model
    this.user.utilisateur = this.utilisateurIns;
    this.user.mot_de_passe = this.mot_de_passeIns;

    //validation avec les regex (trouver une meilleure façons pas optimiser?)
    //validation pour user
    if (this.userReg.test(this.utilisateurIns) && this.utilisateurIns != null) {
      this.errorUser = false;
    }
    else {
      this.errorUser = true;
    }

    //validation pour mot de passe
    if (this.passReg.test(this.mot_de_passeIns) && this.mot_de_passeIns != null) {
      this.errorPass = false;
    }
    else {
      this.errorPass = true;
    }

    //enregistrement dans la BD si les conditions plus haut sont OK
    if (this.errorUser == false && this.errorPass == false) {
      this.save();
    }
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
        .subscribe();

    window.location.href = "/user";
  }

  //modifier
  update(): void {
    //validation avec les regex (trouver une meilleure façons plus optimiser ou peut être une version avec angular?)
    //validation pour user
    if (this.userReg.test(this.user.utilisateur) && this.user.utilisateur != null) {
      this.errorUser = false;
    }
    else {
      this.errorUser = true;
    }

    //validation pour mot de passe
    if (this.passReg.test(this.user.mot_de_passe) && this.user.mot_de_passe != null) {
      this.errorPass = false;
    }
    else {
      this.errorPass = true;
    }

    //enregistrement dans la BD si les conditions plus haut sont OK
    if (this.errorUser == false && this.errorPass == false) {
      this.userService.updateUser(this.user)
        .subscribe();

      window.location.href = "/user";
    }

  }

}