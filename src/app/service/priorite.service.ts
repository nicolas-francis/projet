import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Priorite } from '../class/priorite';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class PrioriteService {
  private prioritesUrl = 'http://localhost:8080/api/priorites';  
  constructor( 
    private http: HttpClient
  ) { }

  // Avoir les priorités
  getPriorites (): Observable<Priorite[]> {
    return this.http.get<Priorite[]>(this.prioritesUrl)
  }
}