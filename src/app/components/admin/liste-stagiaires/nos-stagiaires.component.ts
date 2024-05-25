import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfilService } from 'src/app/services/profil.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nos-stagiaires',
  templateUrl: './nos-stagiaires.component.html',
  styleUrls: ['./nos-stagiaires.component.scss'],
})
export class NosStagiairesComponent implements OnInit {
  data: any;
  constructor(
    private service: ProfilService,
    private serviceUser: UserService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getAllStagiaires();
  }
  getAllStagiaires() {
    this.serviceUser.getAllStagiaires().subscribe((res: any) => {
      this.data = Object.values(res.data);
    });
  }
  deleteItem(id: any) {
    this.serviceUser.deleteUser(id).subscribe((res: any) => {
      if (res) {
      window.location.reload();
      Swal.fire({
        title: 'succes!',
        text: 'Profile deleted',
        icon: 'success',
      });
    };
    })
  }
  getProfilById(id: any) {
    this.serviceUser.getOne(id).subscribe((res: any) => {
      console.log(res.data);
    });
  }
}
