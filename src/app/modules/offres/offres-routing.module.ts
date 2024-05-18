import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NosOffresComponent } from 'src/app/components/offres/nos-offres/nos-offres.component';
import { PostulerComponent } from 'src/app/components/offres/postuler/postuler.component';
import { PublierComponent } from 'src/app/components/offres/publier/publier.component';

const routes: Routes = [
  {
    path: '',
    component: NosOffresComponent,
  },
  {
    path: ':id',
    component: PostulerComponent,
  },
  {
    path: 'add',
    component: PublierComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffresRoutingModule { }
