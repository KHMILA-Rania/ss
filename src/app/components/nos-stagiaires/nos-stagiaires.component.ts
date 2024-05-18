import { Component, OnInit } from '@angular/core';
import { StagiaireService } from 'src/app/services/stagiaire.service';

@Component({
  selector: 'app-nos-stagiaires',
  templateUrl: './nos-stagiaires.component.html',
  styleUrls: ['./nos-stagiaires.component.scss'],
})
export class NosStagiairesComponent implements OnInit {
  data: any;
  constructor(private service: StagiaireService) {}
  ngOnInit(): void {
    this.getAllSociete();
  }
  getAllSociete() {
    this.service.getAll().subscribe((data) => {
      this.data = Object.values(data);
    });
  }
}
