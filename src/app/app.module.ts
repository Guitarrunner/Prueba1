import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import {FooterComponent } from 'src/app/components/shared/footer/footer.component';
import { NavComponent} from 'src/app/components/shared/nav/nav.component';
import { AppComponent } from './app.component';
import { PatientComponent} from 'src/app/components/hospitalCenter/patient/patient.component';
import { RegionsComponent } from './components/adminView/regions/regions.component';
import { PathologiesComponent } from 'src/app/components/adminView/pathologies/pathologies.component';
import { PatientStateComponent } from './components/adminView/patient-state/patient-state.component';
import { HospitalCenterComponent } from './components/adminView/hospital-center/hospital-center.component';
import { RecentContactsComponent } from './components/hospitalCenter/recent-contacts/recent-contacts.component';
import { CreateHospitalComponent } from 'src/app/components/adminView/hospital-center/create-hospital/create-hospital.component';
import { ModifyHospitalComponent } from './components/adminView/hospital-center/modify-hospital/modify-hospital.component';
import { CreatePathologyComponent } from './components/adminView/pathologies/create-pathology/create-pathology.component';
import { CreatePatientComponent } from './components/hospitalCenter/patient/create-patient/create-patient.component';
import { CreateContactComponent } from './components/hospitalCenter/recent-contacts/create-contact/create-contact.component';
import { ModifyPathologyComponent } from './components/adminView/pathologies/modify-pathology/modify-pathology.component';
import { ModifyPatientComponent } from './components/hospitalCenter/patient/modify-patient/modify-patient.component';
import { ModifyContactsComponent } from './components/hospitalCenter/recent-contacts/modify-contacts/modify-contacts.component';
import { ModifyStateComponent } from './components/adminView/patient-state/modify-state/modify-state.component';
import { CreateRegionComponent } from './components/adminView/regions/create-region/create-region.component';
import { ModifyRegionComponent } from './components/adminView/regions/modify-region/modify-region.component';
import {HospitalsService} from './services/administration/hospitals.service';
import {PathologiesService} from './services/administration/pathologies.service';
import {RegionsService} from './services/administration/regions.service';
import {StatesService} from './services/administration/states.service';
import {PatientsService} from './services/hospitalCenter/patients.service';
import {ContactsService} from './services/hospitalCenter/contacts.service';


import {MapComponent} from './components/map/map.component';
import {MapViewComponent} from './components/map/map-view/map-view.component';
import { StatusComponent} from './components/map/status/status.component';
import { MeasurementsComponent } from './components/map/measurements/measurements.component';

import { AgmCoreModule} from '@agm/core';
import { LoginComponent } from './components/shared/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    RegionsComponent,
    PathologiesComponent,
    PatientComponent,
    PatientStateComponent,
    HospitalCenterComponent,
    RecentContactsComponent,
    CreateHospitalComponent,
    ModifyHospitalComponent,
    CreatePathologyComponent,
    CreatePatientComponent,
    CreateContactComponent,
    ModifyPathologyComponent,
    ModifyPatientComponent,
    ModifyContactsComponent,
    ModifyStateComponent,
    CreateRegionComponent,
    ModifyRegionComponent,
    MapComponent,
    MapViewComponent,
    StatusComponent,
    MeasurementsComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC9Rw5vYXeTztwI-jDY4DlvPZQGPmJm8J4'
    })
  ],
  providers: [HospitalsService,
              PathologiesService,
              RegionsService,
              StatesService,
              ContactsService,
              PatientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
