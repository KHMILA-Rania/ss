import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffresRoutingModule } from './offres-routing.module';
import { NosOffresComponent } from 'src/app/components/offres/nos-offres/nos-offres.component';
import { PublierComponent } from 'src/app/components/offres/publier/publier.component';
import { PostulerComponent } from 'src/app/components/offres/postuler/postuler.component';
import { PrimeNgModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NosOffresComponent,
    PublierComponent,
    PostulerComponent
  ],
  imports: [
    CommonModule,
    OffresRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    PrimeNgModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OffresModule { }
