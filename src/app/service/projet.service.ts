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
  private projetsUrl = 'http://localhost:8080/api/projets'; 
  constructor( 
    private http: HttpClient
  ) { }

  // Avoir les projets
  getProjets (): Observable<Projet[]> {
    return this.http.get<Projet[]>(this.projetsUrl)
  }

  // Avoir un seul projet avec l'id
  getProjet(id: number): Observable<Projet> {
    const url = `${this.projetsUrl}/${id}`;
    return this.http.get<Projet>(url);
  }

  // Créer un nouveau projet
  addProjet (projet: Projet): Observable<Projet> {
    return this.http.post<Projet>(this.projetsUrl, projet, httpOptions);
  }

  // Supprimer un projet avec l'id
  // Changer "user: Projet" pour "projet: Projet"
  deleteProjet (user: Projet | number): Observable<Projet> {
    const id = typeof user === 'number' ? user : user.id;
    const url = `${this.projetsUrl}/${id}`;

    return this.http.delete<Projet>(url, httpOptions);
  }

  // Modifier un projet
  updateProjet (projet: Projet): Observable<any> {
    return this.http.put(this.projetsUrl, projet, httpOptions);
  }
  
}