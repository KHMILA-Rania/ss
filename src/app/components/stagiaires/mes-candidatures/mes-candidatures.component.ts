import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CandidatureService } from 'src/app/services/candidature.service';
import { PostulerService } from 'src/app/services/postuler.service';

@Component({
  selector: 'app-mes-candidatures',
  templateUrl: './mes-candidatures.component.html',
  styleUrls: ['./mes-candidatures.component.scss'],
})
export class MesCandidaturesComponent implements OnInit {
data : any;
ser :any;
  constructor(private postulS: PostulerService, private candidatureService : CandidatureService,private authService : AuthService
  ) {}

  getAllCandidatures() {
    const id = this.authService.getUserId();
    this.candidatureService.getAllMesCandidatures(id)
      .subscribe((res) => (this.data = Object.values(res)));
      console.log(this.data)
  }
  ngOnInit(): void {
    this.getAllCandidatures();
  }

  getSeverity(status : String) {
    switch (status) {
      case 'accepté':{return this.ser = 'success'; break;}
      case 'refusé' : { return this.ser = 'danger'; break ;}
      default : {return this.ser='warning'}
    }
  }
}

