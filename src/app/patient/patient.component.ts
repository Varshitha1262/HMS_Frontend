import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProjserviceService } from '../projservice.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patientForm:FormGroup;
  assignDoctorForm:FormGroup;
  msg:boolean=false;

  constructor(private service:ProjserviceService,private http:HttpClient) { }

  ngOnInit(): void {
    this.patientForm=new FormGroup( {
      patientName: new FormControl(''),
      age: new FormControl(''),
      phoneNo: new FormControl('')
     } );

     this.assignDoctorForm=new FormGroup( {
      doctorName: new FormControl(''),
     } );

  }

  OnSubmit(){
    this.service.postPatient(this.patientForm.value).subscribe(
      data=>{
        console.log(data);
        this.msg=true;
      }
    )
  }

  OnDoctorSubmit(){
    this.service.assignDoctor(this.assignDoctorForm.value).subscribe(
       data=>{
        console.log(data);
       }
    )
  }

}
