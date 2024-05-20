import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilComponent } from 'src/app/components/stagiaires/profil/profil.component';
import { CVComponent } from 'src/app/components/stagiaires/cv/cv.component';
import { StudentRoutingModule } from './student-routing.module';
import { MesCandidaturesComponent } from 'src/app/components/stagiaires/mes-candidatures/mes-candidatures.component';
import { AcceuilComponent } from 'src/app/pages/acceuil/acceuil.component';
import { PrimeNgModule } from '../shared/shared.module';
import { SuiviCandidatureComponent } from 'src/app/components/stagiaires/suivi-candidature/suivi-candidature.component';
import { FeedbackComponent } from 'src/app/components/stagiaires/feedback/feedback.component';

@NgModule({
  declarations: [
    AcceuilComponent,
    ProfilComponent,
    CVComponent,
    MesCandidaturesComponent,
    SuiviCandidatureComponent,
    FeedbackComponent,
  ],
  imports: [CommonModule, StudentRoutingModule, PrimeNgModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class StudentModule {}
