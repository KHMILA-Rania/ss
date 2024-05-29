
import { Injectable } from '@angular/core';
import { Societe } from './Isociete';

@Injectable({
  providedIn: 'root'
})
export class  DataService {
  private societe!:Societe;
  setSociete(data:Societe){
    this.societe=data;
  }

  getSociete(){
    return this.societe;
  }
}
