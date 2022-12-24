import { Component, OnInit } from '@angular/core';
import { doctor } from 'src/doctor';
import { patient } from 'src/patient';
import { ProjserviceService } from '../projservice.service';

@Component({
  selector: 'app-doctordetails',
  templateUrl: './doctordetails.component.html',
  styleUrls: ['./doctordetails.component.css']
})
export class DoctordetailsComponent implements OnInit {
  doctor:doctor[]=[];
  patient:patient;

  constructor(public service:ProjserviceService) { }

  ngOnInit(): void {
  }

  getDoctorDetails():void{
    this.service.getDoctorDetails().subscribe(
      data=>{
        this.doctor=data;
        console.log(data);
      }
    )
  }

}
