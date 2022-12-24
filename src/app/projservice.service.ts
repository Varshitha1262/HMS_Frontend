import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { doctor } from 'src/doctor';
import { patient } from 'src/patient';

@Injectable({
  providedIn: 'root'
})
export class ProjserviceService {

  constructor(public http:HttpClient) { }

  postdoctor(doctor:doctor){
    return this.http.post("http://52.205.251.236:8080/postDoctor",doctor);
  }

  getDoctorDetails(){
    return this.http.get<any>("http://52.205.251.236:8080/getDoctor")
  }

  postPatient(patient:patient){
    return this.http.post("http://52.205.251.236:8080/postPatient",patient);
  }

  assignDoctor(docname:string){
    return this.http.post("http://52.205.251.236:8080/assignDoctor",docname);
  }

  getPatientDetails(){
    return this.http.get("http://52.205.251.236:8080/getPatient")
  }
}
