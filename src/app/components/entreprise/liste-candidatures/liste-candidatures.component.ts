import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService, PrimeIcons } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';
import { CandidatureService } from 'src/app/services/candidature.service';
import { PostulerService } from 'src/app/services/postuler.service';


@Component({
  selector: 'app-liste-candidatures',
  templateUrl: './liste-candidatures.component.html',
  styleUrls: ['./liste-candidatures.component.scss'],
})
export class ListeCandidaturesComponent implements OnInit {
  data: any;
  
  actions: MenuItem[] = [
    {
      label: "accepter",
      command:()=>{
        this.accepter(this.selectedCandidat._id);
        console.log("accepter");
      }
    },
    { 
      label: "refuser"
     },
    { 
      label: "tâches",
      command: ()=>{
        this.router.navigateByUrl('/dashboard/company/liste-taches/'+this.selectedCandidat._id)
      }
     },

  ]

  selectedCandidat: any

  constructor(
    private postulS: PostulerService,
    private messageService: MessageService,
    private candidatureService: CandidatureService,
    private router:Router,
    private authService : AuthService
  ) {

  }

  getAllPostulations() {
    const id = this.authService.getUserId();
    this.candidatureService
      .getMesCandidatures(id)
      .subscribe((res: any) => {this.data = res.data
        console.log(this.data)
      });
  }
  ngOnInit(): void {
    this.getAllPostulations();

  }

  save(severity: string) {
    this.messageService.add({
      severity: severity,
      summary: 'Success',
      detail: 'Candidature accepté',
    });
  }

  refuser(id:any) {
    this.candidatureService.refuserCandidature(id).subscribe((res:any)=>{
      this.data =res.data
    })
  }

  accepter(id:any) {
    this.candidatureService
      .accepterCandidature(id)
      .subscribe((res: any) => {
        this.data = res.data
      });
  }


  selectCandidat(item: any) {
    this.selectedCandidat = item
  }
}
