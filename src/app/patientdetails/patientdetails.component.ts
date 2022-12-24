import { Component, OnInit } from '@angular/core';
import { patient } from 'src/patient';
import { ProjserviceService } from '../projservice.service';

@Component({
  selector: 'app-patientdetails',
  templateUrl: './patientdetails.component.html',
  styleUrls: ['./patientdetails.component.css']
})
export class PatientdetailsComponent implements OnInit {
  patient:any;

  constructor(public service:ProjserviceService) { }

  ngOnInit(): void {
  }

  getPatientDetails():void{
    this.service.getPatientDetails().subscribe(
      data=>{
        this.patient=data;
        console.log(data);
      }
    )
  }

}
