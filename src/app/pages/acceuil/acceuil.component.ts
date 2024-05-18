import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { OffreService } from 'src/app/services/offre.service';

@Component({
    selector: 'app-acceuil',
    templateUrl: './acceuil.component.html',
    styleUrls: ['./acceuil.component.scss']
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
                    }
                },
                {
                    label: 'TIC',
                    //   icon: 'pi pi-refresh',
                    command: () => {
                        this.filterDomaine('TIC');
                    }
                },
                {
                    label: 'Gestions Informatique',
                    //   icon: 'pi pi-refresh',
                    command: () => {
                        this.filterDomaine('Gestions Informatique');
                    }
                },
                {
                    label: 'Réseaux informatique',
                    //   icon: 'pi pi-times',
                    command: () => {
                        this.filterDomaine('Réseaux informatique');
                    }
                }
            ]
        },
        {
            label: 'Lieux',
            items: [
                {
                    label: 'Mahdia',
                    //   icon: 'pi pi-refresh',
                    command: () => {
                        this.filterLieux('Mahdia')
                    }
                },
                {
                    label: 'Sfax',
                    //   icon: 'pi pi-refresh',
                    command: () => {
                        this.filterLieux('Sfax')
                    }
                },
                {
                    label: 'Sousse',
                    //   icon: 'pi pi-refresh',
                    command: () => {
                        this.filterLieux('Sousse')
                    }
                },
                {
                    label: 'Tunis',
                    //   icon: 'pi pi-times',
                    command: () => {
                        this.filterLieux('Tunis')
                    }
                }
            ]
        },

    ];;
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
    ]

    constructor(
        private messageService: MessageService,
        private OffreService: OffreService
    ) { }

    ngOnInit() {
        //   this.OffreService.getAllOffre().subscribe((data:any) => {
        //     this.offres
        //   })
    }

    update() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
    }

    delete() {
        this.messageService.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
    }

    filterDomaine(domaine:string){
        console.log(domaine);
    }
    filterLieux(lieux:string){

    }
}
