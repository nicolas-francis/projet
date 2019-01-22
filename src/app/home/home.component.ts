import { Component, OnInit } from '@angular/core';

import { Projet } from '../class/projet';
import { ProjetService } from '../service/projet.service';
import { NavbarService } from '../service/navbar.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  projets: Projet[];

  constructor(private projetService: ProjetService, public nav: NavbarService, public auth: AuthService) { }

  ngOnInit(): void {
    this.getProjets();
    this.nav.show();
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

}