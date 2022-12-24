import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProjserviceService } from '../projservice.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  doctorForm:FormGroup;

  constructor(private service:ProjserviceService,private http:HttpClient) { }

  ngOnInit(): void {
    this.doctorForm=new FormGroup( {
      doctorName: new FormControl(''),
      gender: new FormControl(''),
      phoneNo: new FormControl('')
     } );
  }

  

  OnSubmit(){
     this.service.postdoctor(this.doctorForm.value).subscribe(
       (data: any)=>{
        console.log(data);
      }
     )
  }

}
