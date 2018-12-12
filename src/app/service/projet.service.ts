import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Projet } from '../class/projet';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ProjetService {
  private projetsUrl = 'http://localhost:8080/api/projets';  //URL to web api
  constructor( 
    private http: HttpClient
  ) { }

  getProjets (): Observable<Projet[]> {
    return this.http.get<Projet[]>(this.projetsUrl)
  }

  addProjet (projet: Projet): Observable<Projet> {
    return this.http.post<Projet>(this.projetsUrl, projet, httpOptions);
  }
  
}