import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  //array des tables de la BD
  services: Service[];
  sources: Source[];
  priorites: Priorite[];
  schemas: Schema[];
  orientations: Orientation[];
  phases: Phase[];
  statuts: Statut[];

  //seulement 1 projet (pour ajout et suppression)
  projet = new Projet;

  //champs pour l'ajout (***TEST***)
  public no_projet: string;
  public desc_projet: string;
  public indicateur_strategique: string;
  public code_service: string;
  public priorite_service: string;
  public date_echeance: Date;
  public priorite_strategique: number;
  public no_schema: number;
  public no_orientation: number;
  public no_pti: string;
  public no_financement: string;
  public code_budgetaire: string;
  public statut_encours: string;
  public desc_statut_encours: string;
  public statut_precedent: string;
  public desc_statut_precedent: string;
  public titre_projet: string;
  public no_phase: number;
  public partenaire: string;
  public source: string;
  public suivi_par: string;
  public date_echeance_revisee: Date;

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
  public statut_encoursIns: string;
  public desc_statut_encoursIns: string;
  public statut_precedentIns: string;
  public desc_statut_precedentIns: string;
  public titre_projetIns: string;
  public no_phaseIns: number;
  public partenaireIns: string;
  public sourceIns: string;
  public suivi_parIns: string;
  public date_echeance_reviseeIns: Date;

  constructor(
    private ServiceService: ServiceService, 
    private SourceService: SourceService,
    private PrioriteService: PrioriteService,
    private SchemaService: SchemaService,
    private OrientationService: OrientationService,
    private PhaseService: PhaseService,
    private StatutService: StatutService,
    private ProjetService: ProjetService,
    private http: HttpClient,
    private router: Router
    ) { }

  ngOnInit(): void {
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
  //register
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

    this.save();
  }

  //enregistrer les données dans la table
  //lier avec la fonction addUser()
  private save(): void {
    console.log(this.projet);
    this.ProjetService.addProjet(this.projet)
        .subscribe();

    this.router.navigate(['home']);
  }

}