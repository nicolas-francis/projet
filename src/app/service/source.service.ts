import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Source } from '../class/source';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class SourceService {
  private sourcesUrl = 'http://localhost:8080/api/sources';  
  constructor( 
    private http: HttpClient
  ) { }

  // Avoir les sources
  getSources (): Observable<Source[]> {
    return this.http.get<Source[]>(this.sourcesUrl)
  }
}