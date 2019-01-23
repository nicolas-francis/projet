import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../class/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private usersUrl = 'http://localhost:8080/api/users'; 
  constructor( 
    private http: HttpClient
  ) { }

  // Avoir les utilisateurs
  getUsers (): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl)
  }

  // Avoir un utilisateur avec l'id
  getUser(id: number): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<User>(url);
  }

  // Créer un utilisateur
  addUser (user: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, user, httpOptions);
  }

  // Modifier un utilisateur avec l'id
  updateUser (user: User): Observable<any> {
    return this.http.put(this.usersUrl, user, httpOptions);
  }

  // Supprimer un utilisateur avec l'id
  deleteUser (user: User | number): Observable<User> {
    const id = typeof user === 'number' ? user : user.id;
    const url = `${this.usersUrl}/${id}`;

    return this.http.delete<User>(url, httpOptions);
  }
  
}