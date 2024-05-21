import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcceuilComponent } from 'src/app/pages/acceuilCompany/acceuil.component';
import { CompanyRoutingModule } from './company-routing.module';
import { PrimeNgModule } from '../shared/shared.module';
import { MesOffresComponent } from 'src/app/components/entreprise/mes-offres/mes-offres.component';
import { ProfilSocieteComponent } from 'src/app/components/entreprise/profil-societe/profil-societe.component';
import { ListeCandidaturesComponent } from 'src/app/components/entreprise/liste-candidatures/liste-candidatures.component';
import { PublierComponent } from 'src/app/components/entreprise/publier/publier.component';
import { ListeTachesComponent } from 'src/app/components/entreprise/liste-taches/liste-taches.component';

@NgModule({
  declarations: [
    MesOffresComponent,
    ProfilSocieteComponent,
    AcceuilComponent,
    ListeCandidaturesComponent,
    PublierComponent,
    ListeTachesComponent,
  ],
  imports: [CommonModule, CompanyRoutingModule, PrimeNgModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CompanyModule {}
