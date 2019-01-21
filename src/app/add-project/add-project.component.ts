import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { Service } from '../class/service';
import { ServiceService } from '../service/service.service';
import { Source } from '../class/source';
import { SourceService } from '../service/source.service';
import { Priorite } from '../class/priorite';
import { PrioriteService } from '../service/priorite.service';
import { Schema } from '../class/schema';
import { SchemaService } from '../service/schema.service';
import { Orientation } from '../class/orientation';
import { OrientationService } from '../service/orientation.service';
import { Phase } from '../class/phase';
import { PhaseService } from '../service/phase.service';
import { Statut } from '../class/statut';
import { StatutService } from '../service/statut.service';
import { Projet } from '../class/projet';
import { ProjetService } from '../service/projet.service';
import { NavbarService } from '../service/navbar.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  //array des tables de la BD pour les combobox
  services: Service[];
  sources: Source[];
  priorites: Priorite[];
  schemas: Schema[];
  orientations: Orientation[];
  phases: Phase[];
  statuts: Statut[];

  //seulement 1 projet (pour l'ajout et la suppression)
  projet = new Projet;

  //champs pour l'ajout
  public no_projetIns: string;
  public desc_projetIns: string;
  public indicateur_strategiqueIns: string;
  public code_serviceIns: string;
  public priorite_serviceIns: string;
  public date_echeanceIns: Date;
  public priorite_strategiqueIns: number;
  public no_schemaIns: number;
  public no_orientationIns: number;
  public no_ptiIns: string;
  public no_financementIns: string;
  public code_budgetaireIns: string;
  public statut_encoursIns: number;
  public desc_statut_encoursIns: string;
  public statut_precedentIns: number;
  public desc_statut_precedentIns: string;
  public titre_projetIns: string;
  public no_phaseIns: number;
  public partenaireIns: string;
  public sourceIns: string;
  public suivi_parIns: string;
  public date_echeance_reviseeIns: Date;

  //pour faire afficher le formulaire update ou insert
  public endUrl: string;
  public updateShow: boolean = false;
  public verifNumber: number;
  public idProjet: number;

  //variables pour avoir le bon format
  public errorNoProjet: boolean = false;
  public noProjetReg = new RegExp('[A-Z]{2}-[0-9]{3}$');

  constructor(
    private ServiceService: ServiceService, 
    private SourceService: SourceService,
    private PrioriteService: PrioriteService,
    private SchemaService: SchemaService,
    private OrientationService: OrientationService,
    private PhaseService: PhaseService,
    private StatutService: StatutService,
    private ProjetService: ProjetService,
    private route: ActivatedRoute,
    private http: HttpClient,
    public nav: NavbarService
    ) { }

  ngOnInit(): void {
    this.nav.show();

    this.endUrl = window.location.href;
    this.endUrl = this.endUrl.substr(window.location.href.lastIndexOf('/') + 1);
    this.verifNumber = +this.endUrl;

    if (this.verifNumber > 0) {
      this.updateShow = true;

      const id = +this.route.snapshot.paramMap.get('id');
      this.ProjetService.getProjet(id)
          .subscribe(projet => this.projet = projet);
    }

    this.getServices();
    this.getSources();
    this.getPriorites();
    this.getSchemas();
    this.getOrientations();
    this.getPhases();
    this.getStatuts();
  }

  //Remplir les combobox avec les infos de la BD
  getServices() {
    return this.ServiceService.getServices()
                .subscribe(
                  services => {
                  console.log(services);
                  this.services = services
                  }
                );
  }

  getSources() {
    return this.SourceService.getSources()
                .subscribe(
                  sources => {
                  console.log(sources);
                  this.sources = sources
                  }
                );
  }

  getPriorites() {
    return this.PrioriteService.getPriorites()
                .subscribe(
                  priorites => {
                  console.log(priorites);
                  this.priorites = priorites
                  }
                );
  }

  getSchemas() {
    return this.SchemaService.getSchemas()
                .subscribe(
                  schemas => {
                  console.log(schemas);
                  this.schemas = schemas
                  }
                );
  }

  getOrientations() {
    return this.OrientationService.getOrientations()
                .subscribe(
                  orientations => {
                  console.log(orientations);
                  this.orientations = orientations
                  }
                );
  }

  getPhases() {
    return this.PhaseService.getPhases()
                .subscribe(
                  phases => {
                  console.log(phases);
                  this.phases = phases
                  }
                );
  }

  getStatuts() {
    return this.StatutService.getStatuts()
                .subscribe(
                  statuts => {
                  console.log(statuts);
                  this.statuts = statuts
                  }
                );
  }


  //Opérations sur la table
  //lis les champs du form avec les champs de la BD
  addProjet() {
    this.projet.no_projet = this.no_projetIns;
    this.projet.desc_projet = this.desc_projetIns;
    this.projet.indicateur_strategique = this.indicateur_strategiqueIns;
    this.projet.code_service = this.code_serviceIns;
    this.projet.priorite_service = this.priorite_serviceIns;
    this.projet.date_echeance = this.date_echeanceIns;
    this.projet.priorite_strategique = this.priorite_strategiqueIns;
    this.projet.no_schema = this.no_schemaIns;
    this.projet.no_orientation = this.no_orientationIns;
    this.projet.no_pti = this.no_ptiIns;
    this.projet.no_financement = this.no_financementIns;
    this.projet.code_budgetaire = this.code_budgetaireIns;
    this.projet.statut_encours = this.statut_encoursIns;
    this.projet.desc_statut_encours = this.desc_statut_encoursIns;
    this.projet.statut_precedent = this.statut_precedentIns;
    this.projet.desc_statut_precedent = this.desc_statut_precedentIns;
    this.projet.titre_projet = this.titre_projetIns;
    this.projet.no_phase = this.no_phaseIns;
    this.projet.partenaire = this.partenaireIns;
    this.projet.source = this.sourceIns;
    this.projet.suivi_par = this.suivi_parIns;
    this.projet.date_echeance_revisee = this.date_echeance_reviseeIns;

    //VALIDATION
    //validation pour le numéro du projet
    if (this.noProjetReg.test(this.no_projetIns) == true && this.no_projetIns != null && this.no_projetIns != " ") {
      this.errorNoProjet = false;
    }
    else {
      this.errorNoProjet = true;
    }
    
    //enregistrement dans la BD si les conditions plus haut sont OK
    if (this.errorNoProjet == false) {
      this.save();
    }
  }

  //enregistrer les données dans la table
  //lier avec la fonction addProjet() plus haut
  private save(): void {
    console.log(this.projet);
    this.ProjetService.addProjet(this.projet)
        .subscribe();

    window.setTimeout(function() {
      window.location.href = "/home";
    }, 500);
  }

  //Supprimer
  delete(): void {
    if (confirm("Voulez-vous supprimer le projet?")) {
      this.idProjet = +this.endUrl;
      console.log(this.projet);

      this.ProjetService.deleteProjet(this.projet)
        .subscribe();
      
      window.setTimeout(function() {
        window.location.href = "/home";
      }, 500);
    }
  }

  //modifier
  update(): void {
    //VALIDATION
    //validation pour le numéro du projet
    if (this.noProjetReg.test(this.projet.no_projet) == true && this.projet.no_projet != null && this.projet.no_projet != " ") {
      this.errorNoProjet = false;
    }
    else {
      this.errorNoProjet = true;
    }

    //enregistrer les données dans la table
    if (this.errorNoProjet == false) {
      console.log(this.projet);

      this.ProjetService.updateProjet(this.projet)
        .subscribe();

      window.setTimeout(function() {
        window.location.href = "/home";
      }, 500);
    }
  }

}