import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccessGuardService} from './services/access-guard.service';

/**AdminView */
import {HospitalCenterComponent} from 'src/app/components/adminView/hospital-center/hospital-center.component';
import {PatientStateComponent} from 'src/app/components/adminView/patient-state/patient-state.component';
import {PathologiesComponent} from 'src/app/components/adminView/pathologies/pathologies.component';
import {RegionsComponent} from 'src/app/components/adminView/regions/regions.component';
import { CreateHospitalComponent } from 'src/app/components/adminView/hospital-center/create-hospital/create-hospital.component';

/**HospitalView */
import {PatientComponent} from 'src/app/components/hospitalCenter/patient/patient.component';
import {RecentContactsComponent} from 'src/app/components/hospitalCenter/recent-contacts/recent-contacts.component';
import { CreatePatientComponent } from './components/hospitalCenter/patient/create-patient/create-patient.component';
import { CreateContactComponent } from './components/hospitalCenter/recent-contacts/create-contact/create-contact.component';

import { MapComponent} from './components/map/map.component'
import { LoginComponent} from './components/shared/login/login.component';
/*
import {ReportsComponent} from 'src/app/components/hospitalView/reports/reports.component'; */

const routes: Routes = [
 /*
  {path: 'reports', component:ReportsComponent},
   */
  {path: '', component:MapComponent},
  {path: 'general', component:MapComponent},
  {path: 'recentContacts', component:RecentContactsComponent/* , data: { requiresLogin: true }, canActivate: [AccessGuardService] */},
  {path: 'login', component:LoginComponent},
  {path: 'patient', component: PatientComponent/* , data: { requiresLogin: true }, canActivate: [AccessGuardService] */},
  { path: 'hospitalCenter', component: HospitalCenterComponent/* , data: { requiresLogin: true }, canActivate: [AccessGuardService] */},
  { path: 'patientState', component:PatientStateComponent/* , data: { requiresLogin: true }, canActivate: [AccessGuardService] */},
  { path: 'regions', component:RegionsComponent/* , data: { requiresLogin: true }, canActivate: [AccessGuardService] */},
  { path: 'pathologies',component:PathologiesComponent/* , data: { requiresLogin: true }, canActivate: [AccessGuardService] */},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
