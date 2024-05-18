import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilComponent } from '../components/stagiaires/profil/profil.component';
import { NosEntreprisesComponent } from '../components/nos-entreprises/nos-entreprises.component';
import { NosStagiairesComponent } from '../components/nos-stagiaires/nos-stagiaires.component';
import { MesCandidaturesComponent } from '../components/stagiaires/mes-candidatures/mes-candidatures.component';
import { MesOffresComponent } from '../components/entreprise/mes-offres/mes-offres.component';
import { FeedbackComponent } from '../components/feedback/feedback.component';
import { CVComponent } from '../components/stagiaires/cv/cv.component';
import { ProfilSocieteComponent } from '../components/entreprise/profil-societe/profil-societe.component';
import { AcceuilComponent } from '../pages/acceuil/acceuil.component';

const routes: Routes = [
  {
    path: '', component: AcceuilComponent
  },
  {
    path: 'profil',
    component: ProfilComponent,
  },

  {
    path: 'nos-societes',
    component: NosEntreprisesComponent,
  },
  {
    path: 'nos-stagiaires',
    component: NosStagiairesComponent,
  },
  {
    path: 'mes-candidatures',
    component: MesCandidaturesComponent,
  },
  {
    path: 'mes-offres',
    component: MesOffresComponent,
  },
  {
    path: 'feedback',
    component: FeedbackComponent,
  },
  {
    path: 'cv',
    component: CVComponent,
  },
  {
    path: 'profil-societe',
    component: ProfilSocieteComponent
  },
  { path: 'offres', loadChildren: () => import('../modules/offres/offres.module').then((m) => m.OffresModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
