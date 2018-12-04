import { Component, OnInit } from '@angular/core';
import { Projet } from '../projet';
import { ProjetService } from '../projet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  projets: Projet[];

  constructor(private projetService: ProjetService) { }

  ngOnInit(): void {
    this.getProjets();
 }

  getProjets() {
    return this.projetService.getProjets()
                .subscribe(
                  projets => {
                  console.log(projets);
                  this.projets = projets
                  }
                );
  }

}