import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { PrimeNgModule } from '../shared/shared.module';
import { MesOffresComponent } from 'src/app/components/entreprise/mes-offres/mes-offres.component';
import { ProfilSocieteComponent } from 'src/app/components/entreprise/profil-societe/profil-societe.component';
import { ListeCandidaturesComponent } from 'src/app/components/entreprise/liste-candidatures/liste-candidatures.component';
import { PublierComponent } from 'src/app/components/entreprise/publier/publier.component';
import { ListeTachesComponent } from 'src/app/components/entreprise/liste-taches/liste-taches.component';
import { CdkDrag, CdkDropList, DragDropModule } from '@angular/cdk/drag-drop';
import { DetailOffreComponent } from 'src/app/components/entreprise/detail-offre/detail-offre.component';
import { ListeCandidatureAccepteComponent } from 'src/app/components/entreprise/liste-candidature-accepte/liste-candidature-accepte.component';
import { AcceuilComponent } from 'src/app/pages/acceuilCompany/acceuil.component';
import { DetailsProfilComponent } from 'src/app/components/entreprise/details-profil/details-profil.component';
 

@NgModule({
  declarations: [
    MesOffresComponent,
   
    ProfilSocieteComponent,
    ListeCandidaturesComponent,
    PublierComponent,
    ListeTachesComponent,
    DetailOffreComponent,
    ListeCandidatureAccepteComponent,
    AcceuilComponent,
    DetailsProfilComponent
  ],
  imports: [
    CommonModule, 
    CompanyRoutingModule, 
    PrimeNgModule,
    DragDropModule,
    CdkDropList, CdkDrag
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CompanyModule {}
