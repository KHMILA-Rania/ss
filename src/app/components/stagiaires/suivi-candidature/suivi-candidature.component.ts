import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CandidatureService } from 'src/app/services/candidature.service';
import { TacheService } from 'src/app/services/tache.service';

@Component({
  selector: 'app-suivi-candidature',
  templateUrl: './suivi-candidature.component.html',
  styleUrls: ['./suivi-candidature.component.scss'],
})
export class SuiviCandidatureComponent implements OnInit {
  idUser: any;
  candidature: any;
  tasks: any[] = [];
  constructor(
    private candidaService: CandidatureService,
    private authService: AuthService,
    private tachService: TacheService
  ) {
    this.idUser = this.authService.getUserId();
  }
  ngOnInit(): void {
    this.getDetailleCandidates();
  }

  getDetailleCandidates() {
    this.candidaService.acceptedById(this.idUser).subscribe((res) => {
      this.candidature = res.data;
      console.log(this.candidature);
      this.getTasks();
    });
  }

  getTasks() {
    console.log(this.candidature?.offreStage._id);
    this.tachService
      .getTaskByIdOffre(this.candidature?.offreStage._id)
      .subscribe((res: any) => {
        this.tasks = res.data;
        console.log(res);
      });
  }
}
