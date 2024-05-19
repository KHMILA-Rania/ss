import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CVComponent } from 'src/app/components/stagiaires/cv/cv.component';
import { MesCandidaturesComponent } from 'src/app/components/stagiaires/mes-candidatures/mes-candidatures.component';
import { ProfilComponent } from 'src/app/components/stagiaires/profil/profil.component';
import { AcceuilComponent } from 'src/app/pages/acceuil/acceuil.component';

const routes: Routes = [
  {
    path: '',
    component: AcceuilComponent,
  },
  {
    path: 'profil',
    component: ProfilComponent,
  },
  {
    path: 'cv',
    component: CVComponent,
  },
  {
    path: 'mes-candidatures',
    component: MesCandidaturesComponent,
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
export class StudentRoutingModule { }
