import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MesOffresComponent } from 'src/app/components/entreprise/mes-offres/mes-offres.component';
import { ProfilSocieteComponent } from 'src/app/components/entreprise/profil-societe/profil-societe.component';

const routes: Routes = [
  {
    path: 'mes-offres',
    component: MesOffresComponent,
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
