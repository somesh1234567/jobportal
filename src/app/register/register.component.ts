import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { HttpClient, HttpEventType, HttpErrorResponse } from '@angular/common/http';
import {  EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [ProjectService]
})
export class RegisterComponent implements OnInit {

  filenames : string = "nbvc";
  file : string ="";
  progress: number =0 ;
  message: string = "";
  @Output() public onUploadFinished = new EventEmitter();
  
  constructor(public obj: ProjectService,private http: HttpClient) { }

  ngOnInit(): void {
  }

  Register(frm:any)
  {
    console.log(frm)
    this.filenames = ""+sessionStorage.getItem("file");
    frm.resumes = this.filenames;
  console.log(frm.resumes);
  this.obj.Register(frm).subscribe(c=>alert("User Created"))
  }
  
  uploadFile = (files : any) => {
    if (files.length === 0) {
      return;
    }

    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    
    this.http.post('https://localhost:7139/api/job/upload', formData, {reportProgress: true, observe: 'events'})
      .subscribe({
        next: (event) => {
        if (event.type === HttpEventType.UploadProgress)
          this.progress = Math.round(100 * event.loaded / (event.total==undefined ? 1 : event.total));
        else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';
          this.onUploadFinished.emit(event.body);
        }
      },
      error: (err: HttpErrorResponse) => console.log(err)
    });
    sessionStorage.setItem("file","images/"+fileToUpload.name);

  }


}
