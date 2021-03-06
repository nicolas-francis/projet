import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Orientation } from '../class/orientation';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class OrientationService {
  private orientationsUrl = 'http://localhost:8080/api/orientations';  //URL to web api
  constructor( 
    private http: HttpClient
  ) { }

  getOrientations (): Observable<Orientation[]> {
    return this.http.get<Orientation[]>(this.orientationsUrl)
  }
}