import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Societe } from './Isociete';
import { S } from '@fullcalendar/core/internal-common';


@Injectable({
  providedIn: 'root'
})
export class profileService {

  apiBaseUrl = 'http://localhost:3000/api/profil';
  


  options = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  constructor(private http: HttpClient) { }

  getTournaments(): Observable<Societe[]> {
    return this.http.get<Societe[]>(
      `${this.apiBaseUrl}`
    ).pipe(catchError((err) => {
      console.error('Error fetching tournaments:', err);
      return of([]);
    }))
  }
  getSociete(id: string): Observable<Societe> {
    return this.http.get<Societe>(
      `http://localhost:3000/api/auth/getOne/${id}`
    )
  }

  addTournament(tournament: Societe): Observable<Societe> {
   
      return this.http.post<Societe>(

        //`${this.apiBaseUrl}/create`,tournament,
        '',tournament,
        this.options);
      
    
  }

 editTournament(id:number,tournament: Societe): Observable <Societe> {

     return this.http.put<Societe>(
      ''+id,
     // `${this.apiBaseUrl}/${tournament.id}`,
      tournament,
      this.options);
  
  
    console.log("le :/");
    return new Observable<Societe>();
  
 }



  deleteSoiete(id: number): Observable<Societe> {

    return this.http.delete<Societe>(`${this.apiBaseUrl}/${id}`);
  }

}
