import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { PrimeNgModule } from '../shared/shared.module';
import { MesOffresComponent } from 'src/app/components/entreprise/mes-offres/mes-offres.component';
import { ProfilSocieteComponent } from 'src/app/components/entreprise/profil-societe/profil-societe.component';

@NgModule({
  declarations: [MesOffresComponent, ProfilSocieteComponent],
  imports: [CommonModule, CompanyRoutingModule, PrimeNgModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CompanyModule {}
