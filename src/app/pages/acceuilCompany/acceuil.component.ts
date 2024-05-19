import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { OffreService } from 'src/app/services/offre.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss'],
})
export class AcceuilComponent {
  idUser: any;
  data: any;
  items: MenuItem[] = [
    {
      label: 'Domaines',
      items: [
        {
          label: '2020',
          //   icon: 'pi pi-refresh',
          command: () => {
            this.filterDate('2020');
          },
        },
        {
          label: '2021',
          //   icon: 'pi pi-refresh',
          command: () => {
            this.filterDate('2021');
          },
        },
        {
          label: '2022 ',
          //   icon: 'pi pi-refresh',
          command: () => {
            this.filterDate('2022');
          },
        },
        {
          label: '2023',
          //   icon: 'pi pi-times',
          command: () => {
            this.filterDate('2023');
          },
        },
        {
          label: '2024',
          //   icon: 'pi pi-times',
          command: () => {
            this.filterDate('2024');
          },
        },
      ],
    },
  ];
  offres: any[] = [
    {
      user: 'sami zroud',
      titre: 'offre 2024',
      description: 'quelque description',
      lieux: 'mahdia',
      domaine: 'informatique',
      date_dexpiration: '12/06/2024',
      duree: '1',
      number_candidats: '6',
      status: 'disponible',
      date: '17/05/2024',
    },
    {
      user: 'sami zroud',
      titre: 'offre 2024',
      description: 'quelque description',
      lieux: 'mahdia',
      domaine: 'informatique',
      date_dexpiration: '12/06/2024',
      duree: '1',
      number_candidats: '6',
      status: 'disponible',
      date: '17/05/2024',
    },
    {
      user: 'sami zroud',
      titre: 'offre 2024',
      description: 'quelque description',
      lieux: 'mahdia',
      domaine: 'informatique',
      date_dexpiration: '12/06/2024',
      duree: '1',
      number_candidats: '6',
      status: 'disponible',
      date: '17/05/2024',
    },
    {
      user: 'sami zroud',
      titre: 'offre 2024',
      description: 'quelque description',
      lieux: 'mahdia',
      domaine: 'informatique',
      date_dexpiration: '12/06/2024',
      duree: '1',
      number_candidats: '6',
      status: 'disponible',
      date: '17/05/2024',
    },
    {
      user: 'sami zroud',
      titre: 'offre 2024',
      description: 'quelque description',
      lieux: 'mahdia',
      domaine: 'informatique',
      date_dexpiration: '12/06/2024',
      duree: '1',
      number_candidats: '6',
      status: 'disponible',
      date: '17/05/2024',
    },
    {
      user: 'sami zroud',
      titre: 'offre 2024',
      description: 'quelque description',
      lieux: 'mahdia',
      domaine: 'informatique',
      date_dexpiration: '12/06/2024',
      duree: '1',
      number_candidats: '6',
      status: 'disponible',
      date: '17/05/2024',
    },
    {
      user: 'sami zroud',
      titre: 'offre 2024',
      description: 'quelque description',
      lieux: 'mahdia',
      domaine: 'informatique',
      date_dexpiration: '12/06/2024',
      duree: '1',
      number_candidats: '6',
      status: 'disponible',
      date: '17/05/2024',
    },
    {
      user: 'sami zroud',
      titre: 'offre 2024',
      description: 'quelque description',
      lieux: 'mahdia',
      domaine: 'informatique',
      date_dexpiration: '12/06/2024',
      duree: '1',
      number_candidats: '6',
      status: 'disponible',
      date: '17/05/2024',
    },
  ];
  constructor(
    private messageService: MessageService,
    private OffreService: OffreService
  ) {
    this.idUser = sessionStorage.getItem('idUser');
  }

  ngOnInit() {
    // this.getAllMesOffres();
    
  }

  getAllMesOffres() {
    this.OffreService.getOffresByidSociete(this.idUser).subscribe((data) => {
      this.data = Object.values(data);
    });
  }
  update() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Data Updated',
    });
  }

  delete() {
    this.messageService.add({
      severity: 'warn',
      summary: 'Delete',
      detail: 'Data Deleted',
    });
  }

  filterDate(date: String) {
    console.log(date);
  }
  filterLieux(lieux: string) {}
}
