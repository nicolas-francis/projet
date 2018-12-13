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

  getProjet(id: number): Observable<Projet> {
    const url = `${this.projetsUrl}/${id}`;
    return this.http.get<Projet>(url);
  }

  addProjet (projet: Projet): Observable<Projet> {
    return this.http.post<Projet>(this.projetsUrl, projet, httpOptions);
  }

  deleteProjet (user: Projet | number): Observable<Projet> {
    const id = typeof user === 'number' ? user : user.id;
    const url = `${this.projetsUrl}/${id}`;

    return this.http.delete<Projet>(url, httpOptions);
  }

  updateProjet (projet: Projet): Observable<any> {
    return this.http.put(this.projetsUrl, projet, httpOptions);
  }
  
}