import { Component, OnInit } from '@angular/core';
import { SocieteService } from 'src/app/services/societe.service';

@Component({
  selector: 'app-nos-entreprises',
  templateUrl: './nos-entreprises.component.html',
  styleUrls: ['./nos-entreprises.component.scss']
})
export class NosEntreprisesComponent implements  OnInit {
  data: any[]=[];
  constructor(private service: SocieteService) { }
  ngOnInit(): void {
    this.getAllSociete();
  };
  getAllSociete(){
    this.service.getAllSociete().subscribe((data)=>{(this.data = Object.values(data))
  })
  }
}
