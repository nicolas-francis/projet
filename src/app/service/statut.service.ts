import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Statut } from '../class/statut';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class StatutService {
  private statutsUrl = 'http://localhost:8080/api/statuts';  
  constructor( 
    private http: HttpClient
  ) { }

  // Avoir les status
  getStatuts (): Observable<Statut[]> {
    return this.http.get<Statut[]>(this.statutsUrl)
  }
}