import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorComponent } from './doctor/doctor.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DoctordetailsComponent } from './doctordetails/doctordetails.component';
import { PatientComponent } from './patient/patient.component';
import { PatientdetailsComponent } from './patientdetails/patientdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    DoctordetailsComponent,
    PatientComponent,
    PatientdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
