import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';
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
  curretnUserId: any;
  first: number = 0;
  rows: number = 10;
  onPageChange(event: PageEvent) {
    this.first = event.first;
    this.rows = event.rows;
  }

  constructor(
    private service: OffreService,
    private authservice: AuthService,
    private router: Router
  ) {
    this.curretnUserId = this.authservice.getUserId();
  }

  ngOnInit(): void {
    this.getAllMesOffres();
  }
  addOffer(){
    this.router.navigateByUrl('/dashboard/company/offres/add');
  };

  getAllMesOffres() {
    this.service.getOffresByidSociete(this.curretnUserId).subscribe((res:any) => {
      console.log(res.data);
      this.data = res.data;
    });
  }
  viewSubject(idSubject: any) {
    this.router.navigateByUrl(`/offres/detailledusujet/${idSubject}`);
  }
  viewTask(idSubject: any) {
    this.router.navigateByUrl(`/offres/listetaches/${idSubject}`);
  }

  filterStag(data: any[]) {
    console.log(data, this.curretnUserId);
    return data.filter(
      (item: any) => item?.offreStage?.encadrant._id === this.curretnUserId
    );
  }
}
