import { Component } from '@angular/core';
import { Societe } from './Isociete';
import { ActivatedRoute, Router } from '@angular/router';
import { SocieteService } from 'src/app/services/societe.service';
import { DataService } from './dataService';
import { profileService } from './profileService';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-details-profil',
  templateUrl: './details-profil.component.html',
  styleUrls: ['./details-profil.component.scss'],
})
export class DetailsProfilComponent {
  objdata: any;

  societes!: Societe[];

  societe: Societe = {
    id: '',
    name: '',

    email: '',
    password: '',
    telephone: 0,

    role: '',
  };

  constructor(
    private route: ActivatedRoute,
    private profileService: profileService,
    private dataService: DataService,
    private authService: AuthService,
    private router: Router
  ) {
    const societeID = this.authService.getUserId()
   console.log( societeID );
    this.profileService.getSociete(societeID).subscribe(res=>{
      this.objdata = res
    })
  }

  goTo(id : any){
   const  url= "dashboard/company/profil-societe" 
   this.router.navigateByUrl(url)
  }

  deleteSociete() {
    const societeID = this.route.snapshot.params['societeID'];
    this.profileService
      .deleteSoiete(societeID as unknown as number)
      .subscribe(() => {
        if (this.societe) {
          this.societes = this.societes.filter(
            (societe) => societe.id !== societeID
          );
        }
      });
  }
}
