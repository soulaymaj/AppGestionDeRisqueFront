import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utilisateur } from '../models/utilisateur.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  private apiUrl = 'http://localhost:9000/user'; 

  constructor(private http: HttpClient) {}

  createUtilisateur(utilisateur: Utilisateur): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/add`, utilisateur);
  }
}
