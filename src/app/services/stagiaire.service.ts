import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class StagiaireService {
  apiURL=environment.apiURL
  constructor(private http:HttpClient) { }

  createStagiare(data:any){
    return this.http.post(`${this.apiURL}/stagiaire/creerProfil`,data)
  }

  getAll(){
    return this.http.get(`${this.apiURL}/stagiaire/getProfils`)
  }
  getById(id:number){
    return this.http.get(`${this.apiURL}/stagiaire/getProfil/${id}`);
  }
  
  updateStagiaire(id:number, data:any){
    return this.http.put(`${this.apiURL}/stagiaire/updateProfil/${id}` , data)
  }

  deleteStagiaire(id: number) {
    return this.http.delete(`${this.apiURL}/stagiaire/supprimerProfil/${id}`)
      .toPromise()
      .then(response => {
        console.log(response)
        })
      .catch((error) => {
        console.log('Error', error);
      });
  }
}
