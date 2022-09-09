import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { HttpClient, HttpEventType, HttpErrorResponse } from '@angular/common/http';
import {  EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-recruitmentteam',
  templateUrl: './recruitmentteam.component.html',
  styleUrls: ['./recruitmentteam.component.css'],
  providers: [ProjectService]
})
export class RecruitmentteamComponent implements OnInit {
  data : any="";

  temp : boolean=false ;

  constructor(public obj : ProjectService,private http: HttpClient) { }



  ngOnInit(): void {

    this.obj.recquitment().subscribe(c => this.data = c)

   

  }



  accepted(Applicantid : any){

    //console.log((JSON.parse(JSON.stringify({Applicantid})) ))

    this.obj.approved(JSON.parse(JSON.stringify({Applicantid})) ).subscribe(c=> alert("You have successfully approved candidate : "+Applicantid))

    //setTimeout(location.reload.bind(location), 000);

   window.location.reload();

    //window.location.reload();

  }



  rejected(Applicantid:any){



    this.obj.rejected(JSON.parse(JSON.stringify({Applicantid})) ).subscribe(c=>alert("Rejected"))

    window.location.reload();

    //this.http.post("https://localhost:7036/api/job/approved?Applicantid="+Applicantid,).subscribe(c=>alert("rejected"))

    window.location.reload();



  }

}

