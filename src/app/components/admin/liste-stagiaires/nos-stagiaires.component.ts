import { Component, OnInit } from '@angular/core';
import { ProfilService } from 'src/app/services/profil.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nos-stagiaires',
  templateUrl: './nos-stagiaires.component.html',
  styleUrls: ['./nos-stagiaires.component.scss'],
})
export class NosStagiairesComponent implements OnInit {
  data: any;
  constructor(private service: ProfilService, private serviceUsert : UserService) {}
  ngOnInit(): void {
    this.getAllSociete();
  }
  getAllSociete() {
    this.service.getProfils().subscribe((data) => {
      this.data = Object.values(data);
    });
  }
}
