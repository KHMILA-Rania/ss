import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { ProfilService } from 'src/app/services/profil.service';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent implements OnInit {
  // addForm: FormGroup;
  addFormP: FormGroup;
  profileForm: FormGroup;
  data: any;
  idUser: any;
  curretnUserId: any;
  currentUser: any;
  role = sessionStorage.getItem('role');
  
  profileDetail: any;
  constructor(
    private profilS: ProfilService,
    private authservice: AuthService,
    private userService: UserService
  ) {
    this.curretnUserId = this.authservice.getUserId();
    this.userService.getOne(this.curretnUserId).subscribe((res: any) => {
      this.currentUser = res.data;
    });
    
    this.profileForm = new FormGroup({
      nom: new FormControl(''),
      prenom: new FormControl(''),
      email: new FormControl(''),
      date_naissance: new FormControl(''),
      password: new FormControl(''),
      sexe: new FormControl(''),
      adresse: new FormControl(''),
      ville: new FormControl(''),
      cv: new FormControl(''),
      etablissement: new FormControl(''),
      telephone: new FormControl(''),
      domaine: new FormControl(''),
    });

    this.addFormP = new FormGroup({
      ancienMotDePasse: new FormControl(''),
      nouveauMotDePasse: new FormControl(''),
      repMotDePasse: new FormControl(''),
    });
  }
  ngOnInit(): void {
    this.userService.getOne(this.curretnUserId).subscribe((res: any) => {
      this.profileDetail = res.data;
      this.profileForm.patchValue(this.profileDetail);
    });
  }

  enregistrer() {
    let profile = this.profileForm.getRawValue();
    profile.user = this.curretnUserId;
    console.log(profile)

      this.profilS.creerProfil(profile).subscribe((res) => {
        alert('Le profil a été enregistré avec succès');
      });
    
  }

  getProfils() {
    this.profilS.getProfils().subscribe((res) => console.log(res));
  }
  getById(id: number) {
    this.userService.getOne(id).subscribe((res: any) => {
      this.profileDetail = res.data;
      console.log(this.profileDetail);
      this.profileForm.patchValue(this.profileDetail);
    });
  }

  // async deleteProfil(id: number) {
  //   if (window.confirm('Voulez vous supprimer cette profil ?')) {
  //     try {
  //       await this.profilS.deleteStagiaire(id);
  //       alert('La suppression de profil a bien eu lieu');
  //     } catch (error) {
  //       console.error(
  //         "Une erreur s'est produite lors de la suppression de profil:",
  //         error
  //       );
  //     }
  //   }
  // }

  updateProfil(id: number, data: any) {
    
    this.profilS.updateProfil(id, data).subscribe(
      (res) => {
        console.log(res);
        alert('Le profil à été modifiée avec succès');
      },
      (err) => {
        alert('Erreur lors de la modification de profil');
      }
    );
  }

  modifierPassword(id: any, data: any) {
    this.authservice.modifierPassword(data).subscribe((res) => {
      console.log('mot de passe modifiée');
    });
  }
}
