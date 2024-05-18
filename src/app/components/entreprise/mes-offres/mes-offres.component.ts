import { Component, OnInit } from '@angular/core';
import { OffreService } from 'src/app/services/offre.service';
interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}
@Component({
  selector: 'app-mes-offres',
  templateUrl: './mes-offres.component.html',
  styleUrls: ['./mes-offres.component.scss'],
})
export class MesOffresComponent implements OnInit {
  data: any;
  idUser: any;
  first: number = 0;
  rows: number = 10;
  onPageChange(event: PageEvent) {
    this.first = event.first;
    this.rows = event.rows;
  }
  constructor(private service: OffreService) {
    this.idUser = sessionStorage.getItem('idUser');
  }

  ngOnInit(): void {
    this.getAllMesOffres();
  }

  getAllMesOffres(){
    this.service.getOffresByidSociete(this.idUser).subscribe((data) => {
      this.data = Object.values(data);
    });
  }
}
