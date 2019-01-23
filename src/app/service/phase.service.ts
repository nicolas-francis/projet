import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Phase } from '../class/phase';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class PhaseService {
  private phasesUrl = 'http://localhost:8080/api/phases';
  constructor( 
    private http: HttpClient
  ) { }

  // Avoir les phases
  getPhases (): Observable<Phase[]> {
    return this.http.get<Phase[]>(this.phasesUrl)
  }
}