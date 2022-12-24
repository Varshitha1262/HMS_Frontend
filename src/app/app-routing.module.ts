import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctordetailsComponent } from './doctordetails/doctordetails.component';
import { PatientComponent } from './patient/patient.component';
import { PatientdetailsComponent } from './patientdetails/patientdetails.component';

const routes: Routes = [
  {
    path:'postDoctor',
    component:DoctorComponent
  },
  {
    path:'getDoctor',
    component:DoctordetailsComponent
  },
  {
    path:'patient',
    component:PatientComponent
  },
  {
    path:'patientdetails',
    component:PatientdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
