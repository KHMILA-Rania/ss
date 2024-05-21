import { Component, OnInit } from '@angular/core';
import { ProfilService } from 'src/app/services/profil.service';

@Component({
  selector: 'app-nos-entreprises',
  templateUrl: './nos-entreprises.component.html',
  styleUrls: ['./nos-entreprises.component.scss']
})
export class NosEntreprisesComponent implements  OnInit {
  data: any[]=[];
  constructor(private service: ProfilService) { }
  ngOnInit(): void {
    this.getAllSociete();
  };
  getAllSociete(){
    this.service.getProfils().subscribe((data)=>{(this.data = Object.values(data))
  })
  }
}
