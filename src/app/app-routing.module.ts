import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './components/commun/home/home.component';
// import { DashboardSocieteComponent } from './dashboard-societe/dashboard-societe.component';
import { CalendrierComponent } from './components/calendrier/calendrier.component'
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'calendrier',
    component: CalendrierComponent,
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  // { path: 'dashboardSociete',component:DashboardSocieteComponent , loadChildren: () => import('./dashboard-societe/dashboard-societe.module').then(m => m.DashboardSocieteModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
