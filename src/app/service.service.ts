import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Service } from './service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ServiceService {
  private servicesUrl = 'http://localhost:8080/api/services';  //URL to web api
  constructor( 
    private http: HttpClient
  ) { }

  getServices (): Observable<Service[]> {
    return this.http.get<Service[]>(this.servicesUrl)
  }
}