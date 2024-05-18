import { Component, OnInit } from '@angular/core';
import { PostulerService } from 'src/app/services/postuler.service';

@Component({
  selector: 'app-mes-candidatures',
  templateUrl: './mes-candidatures.component.html',
  styleUrls: ['./mes-candidatures.component.scss'],
})
export class MesCandidaturesComponent implements OnInit {
data : any;
ser :any;
  constructor(private postulS: PostulerService) {}

  getAllPostulations() {
    this.postulS
      .getAllPostulations()
      .subscribe((data) => (this.data = Object.values(data)));
  }
  ngOnInit(): void {
    this.getAllPostulations();
  }

  getSeverity(status : String) {
    switch (status) {
      case 'accepté':{return this.ser = 'success'; break;}
      case 'refusé' : { return this.ser = 'danger'; break ;}
      default : {return this.ser='warning'}
    }
  }
}

