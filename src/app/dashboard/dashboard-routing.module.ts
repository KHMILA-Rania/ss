import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NosEntreprisesComponent } from '../components/nos-entreprises/nos-entreprises.component';
import { NosStagiairesComponent } from '../components/nos-stagiaires/nos-stagiaires.component';
import { FeedbackComponent } from '../components/feedback/feedback.component';


const routes: Routes = [
  
  

  {
    path: 'nos-societes',
    component: NosEntreprisesComponent,
  },
  {
    path: 'nos-stagiaires',
    component: NosStagiairesComponent,
  },
  
  
  {
    path: 'feedback',
    component: FeedbackComponent,
  },
  {
    path: 'offres',
    loadChildren: () =>
      import('../modules/offres/offres.module').then((m) => m.OffresModule),
  },
  {
    path: 'student',
    loadChildren: () =>
      import('../modules/student/student.module').then((m) => m.StudentModule),
  },
  {
    path: 'company',
    loadChildren: () =>
      import('../modules/company/company.module').then((m) => m.CompanyModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
