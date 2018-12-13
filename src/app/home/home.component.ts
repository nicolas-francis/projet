import { Component, OnInit } from '@angular/core';

import { Projet } from '../class/projet';
import { ProjetService } from '../service/projet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  //tous les projets
  projets: Projet[];

  //un seul projet (pour la suppression)
  projet = new Projet;
  message: string;
  public idProjet: number = 0;



  constructor(private projetService: ProjetService) { }

  ngOnInit(): void {
    this.getProjets();
  }
  
  //Avoir tous les projets
  getProjets() {
    return this.projetService.getProjets()
                .subscribe(
                  projets => {
                  console.log(projets);
                  this.projets = projets
                  }
                );
  }

  //supprimer un projet
  delete(): void {
    this.projet.id = this.idProjet;

    console.log(this.projet);
    this.projetService.deleteProjet(this.projet)
        .subscribe(result => this.message = "Project Deleted Successfully!");

    window.location.reload();
  }

}