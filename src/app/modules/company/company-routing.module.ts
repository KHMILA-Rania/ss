import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MesOffresComponent } from 'src/app/components/entreprise/mes-offres/mes-offres.component';
import { ProfilSocieteComponent } from 'src/app/components/entreprise/profil-societe/profil-societe.component';
import { AcceuilComponent } from 'src/app/pages/acceuilCompany/acceuil.component';
import { ListeCandidaturesComponent } from 'src/app/components/entreprise/liste-candidatures/liste-candidatures.component';
import { PublierComponent } from 'src/app/components/entreprise/publier/publier.component';
import { ListeTachesComponent } from 'src/app/components/entreprise/liste-taches/liste-taches.component';
const routes: Routes = [
  {
    path: '',
    component: AcceuilComponent,
  },

  {
    path: 'profil-societe',
    component: ProfilSocieteComponent,
  },
  {
    path: 'offres',
    loadChildren: () =>
      import('../offres/offres.module').then((m) => m.OffresModule),
  },
  {
    path: 'liste-candidatures',
    component: ListeCandidaturesComponent,
  },
  {
    path: 'liste-taches',
    component: ListeTachesComponent
  },
  {
    path: 'offres/add',
    component: PublierComponent,
  },
  {
    path: 'mes-offres',
    component: MesOffresComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyRoutingModule {}
