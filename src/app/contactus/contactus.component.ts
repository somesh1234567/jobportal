import { Component, OnInit } from '@angular/core';

import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ProjectService } from '../project.service';

@Component({

  selector: 'app-contactus',

  templateUrl: './contactus.component.html',

  styleUrls: ['./contactus.component.css'],
  providers : [ProjectService]

})

export class ContactusComponent implements OnInit {



  constructor(public obj:ProjectService) { }



    f:any

   data: any = ""

   

   

    ngOnInit(): void {



    this.f = new FormGroup ({

      uname: new  FormControl("",[Validators.required,Validators.pattern("[a-z]+")]),

      em: new  FormControl("",[Validators.required,Validators.email]),

      msg: new  FormControl("",[Validators.required,Validators.maxLength(10)])

     

     });



    }



   

    mydatafunc(a:any)

    {
      this.obj.contact(a).subscribe(c => alert("message sent"))
    }



  }
