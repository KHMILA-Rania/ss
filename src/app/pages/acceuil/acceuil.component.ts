import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { OffreService } from 'src/app/services/offre.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss'],
})
export class AcceuilComponent {
  items: MenuItem[] = [
    {
      label: 'Domaines',
      items: [
        {
          label: 'Informatique',
          //   icon: 'pi pi-refresh',
          command: () => {
            this.filterDomaine('Informatique');
          },
        },
        {
          label: 'TIC',
          //   icon: 'pi pi-refresh',
          command: () => {
            this.filterDomaine('TIC');
          },
        },
        {
          label: 'Gestions Informatique',
          //   icon: 'pi pi-refresh',
          command: () => {
            this.filterDomaine('Gestions Informatique');
          },
        },
        {
          label: 'Réseaux informatique',
          //   icon: 'pi pi-times',
          command: () => {
            this.filterDomaine('Réseaux informatique');
          },
        },
      ],
    },
    {
      label: 'Lieux',
      items: [
        {
          label: 'Mahdia',
          //   icon: 'pi pi-refresh',
          command: () => {
            this.filterLieux('Mahdia');
          },
        },
        {
          label: 'Sfax',
          //   icon: 'pi pi-refresh',
          command: () => {
            this.filterLieux('Sfax');
          },
        },
        {
          label: 'Sousse',
          //   icon: 'pi pi-refresh',
          command: () => {
            this.filterLieux('Sousse');
          },
        },
        {
          label: 'Tunis',
          //   icon: 'pi pi-times',
          command: () => {
            this.filterLieux('Tunis');
          },
        },
      ],
    },
  ];
  offres: any[] | undefined;
  data:any;
  constructor(
    private messageService: MessageService,
    private OffreService: OffreService,
    private route: Router
  ) {}

  ngOnInit() {
    this.getAllOffres();
  }
  getAllOffres() {
    this.OffreService.getAllOffre().subscribe((data) => {
      this.offres = Object.values(data);
    });
  }
  getOffreById(id: any) {
    this.route.navigateByUrl(`/dashboard/student/offre/${id}`);

    this.OffreService.getOffreById(id).subscribe((data) => {
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

  filterDomaine(domaine: string) {
    console.log(domaine);
  }
  filterLieux(lieux: string) {}
}
