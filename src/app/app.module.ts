import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';;
import { NgOptimizedImage } from '@angular/common';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SplitterModule } from 'primeng/splitter';
import { PanelMenuModule } from 'primeng/panelmenu';
import { AcceuilComponent } from './pages/acceuil/acceuil.component';
import {StyleClassModule} from 'primeng/styleclass';
import { PrimeNgModule } from './modules/shared/shared.module';
import { CalendrierComponent } from './components/calendrier/calendrier.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { MessageService } from 'primeng/api';
@NgModule({
  declarations: [AppComponent, AcceuilComponent, CalendrierComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    PanelMenuModule,
    SplitterModule,
    StyleClassModule,
    PrimeNgModule,
    FullCalendarModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
