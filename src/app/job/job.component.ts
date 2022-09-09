import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css'],
  providers: [ProjectService]
})
export class JobComponent implements OnInit {

  constructor(public o: ProjectService) { }
  data: any = "";
  app:any = "";
  cid:any="";
  json:any="";
 b:boolean = false
  ngOnInit(): void {
    this.o.jobdata().subscribe(c => this.data = c)
    if (sessionStorage.getItem("u") == null) {
      this.b = true;
    }
    else {
      this.b = false;
    }
  }


  apply(sam:any){
   this.app =  sessionStorage.getItem("u")
   this.cid = sam;
    
   let p = {
    "Applicantid" : this.app,
    "companyid" : this.cid,
    "status" : "pending"
   }

   console.log(p);
   console.log(sam)

   if (sessionStorage.getItem("u") == null) {
    this.b = true;
    window.location.pathname = "login"
  }
  else {
    this.b = false;
    this.o.appliedjob(p).subscribe(c => alert("done"));
  }
   //this.o.appliedjob(p).subscribe(c => alert("done"));
  }

}
