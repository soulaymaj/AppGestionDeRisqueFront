import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Actif } from '../models/actif.model'; 

@Injectable({
  providedIn: 'root'
})
export class ActifService {


  private apiUrl = 'http://localhost:9000/actif'; // Base URL

  constructor(private http: HttpClient) {}

  getActifs(): Observable<Actif[]> {
    return this.http.get<Actif[]>(`${this.apiUrl}/getAll`);
  }

  getActifById(id: number): Observable<Actif> {
    return this.http.get<Actif>(`${this.apiUrl}/getById/${id}`);
  }

  addActif(actif: Actif): Observable<Actif> {
    return this.http.post<Actif>(`${this.apiUrl}/add`, actif);
  }

  updateActif(actif: Actif): Observable<Actif> {
    return this.http.put<Actif>(`${this.apiUrl}/update`, actif);
  }

  deleteActif(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
}
