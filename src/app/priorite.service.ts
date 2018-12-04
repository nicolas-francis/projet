import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Priorite } from './priorite';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class PrioriteService {
  private prioritesUrl = 'http://localhost:8080/api/priorites';  //URL to web api
  constructor( 
    private http: HttpClient
  ) { }

  getPriorites (): Observable<Priorite[]> {
    return this.http.get<Priorite[]>(this.prioritesUrl)
  }
}