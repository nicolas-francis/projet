import { Component, OnInit } from '@angular/core';
import { Service } from '../service';
import { ServiceService } from '../service.service';
import { Source } from '../source';
import { SourceService } from '../source.service';
import { Priorite } from '../priorite';
import { PrioriteService } from '../priorite.service';
import { Schema } from '../schema';
import { SchemaService } from '../schema.service';
import { Orientation } from '../orientation';
import { OrientationService } from '../orientation.service';
import { Phase } from '../phase';
import { PhaseService } from '../phase.service';
import { Statut } from '../statut';
import { StatutService } from '../statut.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  services: Service[];
  sources: Source[];
  priorites: Priorite[];
  schemas: Schema[];
  orientations: Orientation[];
  phases: Phase[];
  statuts: Statut[];

  constructor(
    private ServiceService: ServiceService, 
    private SourceService: SourceService,
    private PrioriteService: PrioriteService,
    private SchemaService: SchemaService,
    private OrientationService: OrientationService,
    private PhaseService: PhaseService,
    private StatutService: StatutService
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

}