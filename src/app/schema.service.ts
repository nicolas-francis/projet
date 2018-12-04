import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Schema } from './schema';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class SchemaService {
  private schemasUrl = 'http://localhost:8080/api/schemas';  //URL to web api
  constructor( 
    private http: HttpClient
  ) { }

  getSchemas (): Observable<Schema[]> {
    return this.http.get<Schema[]>(this.schemasUrl)
  }
}