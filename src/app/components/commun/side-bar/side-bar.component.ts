import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  sidebarVisible: boolean = false;
  items: MenuItem[] = [];
  items1: MenuItem[] = [];
  items2: MenuItem[] = [];
  role:any
  constructor(
    private sAuth: AuthService,
    private router:Router,
    private sideService:SidebarService
  ) {
    this.role=sAuth.getRole()
    this.sideService.getSideBar().subscribe((res)=>{
      this.sidebarVisible=res
    })
    this.items2 = [
      {
        label: 'home',
        icon: 'pi pi-fw pi-home',
        command: () => {
          this.router.navigateByUrl('/dashboard');
        },
      },
      {
        label: 'mes Offres',
        icon: 'pi pi-fw pi-pencil',
        command: () => {
          this.router.navigateByUrl('/dashboard/offres/mes-offres');
        },
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-user-plus',
            command: () => {
              this.router.navigateByUrl('/dashboard/publier');
            },
          },
        ],
      },
      {
        label: 'nos Offres',
        icon: 'pi pi-fw pi-user',
        command: () => {
          this.router.navigateByUrl('/dashboard/nos-offres');
        },
      },
      {
        label: 'Events',
        icon: 'pi pi-fw pi-calendar',
        command: () => {
          this.router.navigateByUrl('/dashboard/evenements');
        },
      },
      {
        label : 'Profil',
        icon : 'pi pi-fw pi-id-card',
        command : ()=>{this.router.navigateByUrl( '/dashboard/profil-societe')
        } ,
        items:[
          {
            label:'Modifier Profil',
            icon : 'pi pi-fw pi-cog', 
            command :()=>{this.router.navigateByUrl('/dashboard/modifier-profil-societe')}
          },

        ]
      }
    ];
    this.items1 = [
      {
        label: 'home',
        icon: 'pi pi-fw pi-home',
        command: () => {
          this.router.navigateByUrl('/dashboard');
        },
      },
      {
        label: 'offres de stage',
        icon: 'pi pi-fw pi-pencil',
        command: () => {
          this.router.navigateByUrl('/dashboard/offres');
        },
      },
      {
        label: 'mes candidatures',
        icon: 'pi pi-fw pi-file',
        command: () => {
          this.router.navigateByUrl('/dashboard/mes-candidatures');
        },
      },
      {
        label: 'nos Societe',
        icon: 'pi pi-fw pi-users',
        command: () => {
          this.router.navigateByUrl('/dashboard/nos-societes');
        },
      },
      {
        label: 'stages sauvegardés',
        icon: 'pi pi-fw pi-bookmark',
        command: () => {
          this.router.navigateByUrl('/dashboard/stageSauvgardes');
        },
      },
      {
        label: 'Events',
        icon: 'pi pi-fw pi-calendar',
        command: () => {
          this.router.navigateByUrl('/dashboard/evenements');
        },
      },
      {
        label: 'Profil',
        icon: 'pi pi-fw pi-id-card',
        command: () => {
          this.router.navigateByUrl('/dashboard/profil');
        },
     
      },
    ];


     
    switch (this.role) {
      case 'stagiaire': {
        this.items = this.items1;
        break;
      }
      case 'societe': {
        this.items = this.items2;
        break;
      }
      default: {
        this.items = this.items;
      }
    }
  }

  ngOnInit() {}

  logOut() {
    this.sAuth.logOut();
    alert('Logged out');
  }
  changeSide(){
    this.sideService.changeSideBar()
  }
}