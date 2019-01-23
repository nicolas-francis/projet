import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from '../class/user';
import { UserService } from '../service/user.service';
import { NavbarService } from '../service/navbar.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-add-utilisateur',
  templateUrl: './add-utilisateur.component.html',
  styleUrls: ['./add-utilisateur.component.css']
})
export class AddUtilisateurComponent implements OnInit {
  // Un seul utilisateur avec la structure du module / class
  user = new User;

  // Variables pour avoir le bon format dans les champs utilisateur et MDP et lever les erreurs s'il y en a
  public errorUser: boolean = false;
  public errorPass: boolean = false;
  public userReg = new RegExp('[^a-zA-Z0-9]');
  public passReg = new RegExp('[^a-zA-Z0-9+!"%?&*()_¨:`>.~=,;<>$]');

  // Pour faire afficher le formulaire update ou insert
  public endUrl: string;
  public verifNumber: number;
  public updateShow: boolean = false;
  public idUser: number;

  // Champs pour l'ajout (vérifier pour une meilleure façon)
  public utilisateurIns: string;
  public mot_de_passeIns: string;

  constructor(
    private userService: UserService, 
    private route: ActivatedRoute, 
    public nav: NavbarService, 
    public auth: AuthService
    ) { }

  ngOnInit() {
    this.nav.show();
    
    // Pour vérifier quel formulaire afficher
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

  // Opérations sur la table user
  // Ajouter un utilisateur
  addUser() {
    // Entre les textbox dans le tableau d'un user pour entrer le tableau dans la BD ensuite (vérifier pour une meilleure façon)
    this.user.utilisateur = this.utilisateurIns;
    this.user.mot_de_passe = this.mot_de_passeIns;

    // Validation pour le nom d'utilisateur
    if (this.userReg.test(this.utilisateurIns) == false && this.utilisateurIns != null && this.utilisateurIns != "") {
      this.errorUser = false;
    }
    else {
      this.errorUser = true;
    }

    // Validation pour le mot de passe
    if (this.passReg.test(this.mot_de_passeIns) == false && this.mot_de_passeIns != null && this.mot_de_passeIns != "") {
      this.errorPass = false;
    }
    else {
      this.errorPass = true;
    }

    // Enregistrement dans la BD si les conditions plus haut sont OK
    if (this.errorUser == false && this.errorPass == false) {
      this.save();
    }
  }

  // Enregistrer les données dans la table
  // Possiblement la mettre dans une fonction addUser() si nous ne pouvons pas la réutiliser
  private save(): void {
    console.log(this.user);
    
    this.userService.addUser(this.user)
        .subscribe();
    
    // Timer avant de faire la redirection pour FF (FF traite trop vite ???)
    window.setTimeout(function() {
      window.location.href = "/user";
    }, 500);
    
  }

  // Supprimer un utilisateur
  delete(): void {
    // Confirmation avant de faire la suppression pour être certain
    if (confirm("Voulez-vous supprimer l'utilisateur?")) {
      this.idUser = +this.endUrl;
      console.log(this.user);

      this.userService.deleteUser(this.user)
          .subscribe();

      // Timer avant de faire la redirection pour FF (FF traite trop vite ???)
      window.setTimeout(function() {
        window.location.href = "/user";
      }, 500);
    }
  }

  // Modifier un utilisateur
  update(): void {
    //validation pour le nom d'utilisateur
    if (this.userReg.test(this.user.utilisateur) == false && this.user.utilisateur != null && this.user.utilisateur != "") {
      this.errorUser = false;
    }
    else {
      this.errorUser = true;
    }

    //validation pour le mot de passe
    if (this.passReg.test(this.user.mot_de_passe) == false && this.user.mot_de_passe != null && this.user.mot_de_passe != "") {
      this.errorPass = false;
    }
    else {
      this.errorPass = true;
    }

    //enregistrement dans la BD si les conditions plus haut sont OK
    if (this.errorUser == false && this.errorPass == false) {
      this.userService.updateUser(this.user)
        .subscribe();

      // Timer avant de faire la redirection pour FF (FF traite trop vite ???)
      window.setTimeout(function() {
        window.location.href = "/user";
      }, 500);
    }

  }
}