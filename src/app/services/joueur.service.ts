import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError,retry  } from 'rxjs/internal/operators';

import { Joueur } from '../models/joueur';

@Injectable({
  providedIn: 'root'
})
export class JoueurService {
  [x: string]: any;

  apiUrl = environment.apiUrl + "/joueurs";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Joueur[]> {
    return this.httpClient.get<Joueur[]>(this.apiUrl).pipe(
      retry(1),
      catchError(this.errorHandler)
      );
      
    }
    getOne(id: number): Observable<Joueur>{
      return this.httpClient.get<Joueur>(this.apiUrl + '/' + id).pipe(
        retry(1),
        catchError(this.errorHandler)
        );
    }
    add(joueur: Joueur): Observable<Joueur> {
      return this.httpClient.post<Joueur>(this.apiUrl, joueur).pipe(retry(1), catchError(this.errorHandler));
    }
}
