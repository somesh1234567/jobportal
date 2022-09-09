import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ProjectService]
})
export class LoginComponent implements OnInit {

  err:string = "";
  err1:string = "";
  err2:string = "";

  constructor(public o: ProjectService) { }

  ngOnInit(): void {
  }

  data: any = ""
  Authenticate(a:any) {
    this.o.login(a).subscribe((c: any)=> {
      this.o.detaildata().subscribe(d => sessionStorage.setItem("u",d[0].Id))

      if(c>0)
      {
        console.log(c)
        window.location.pathname="job"
      }
      else
      {
        this.err= "Invalid credentials"
      }
  
  
    })
 //   setTimeout(() => {
      // this.o.detaildata().subscribe(c => console.log(c[0].Id))
  //  console.log(JSON.parse(JSON.stringify(this.data)))
   // }, 3000); 
  }
  

    validate()
  {
var uid= (document.getElementById("t1") as HTMLInputElement).value
var pwd= (document.getElementById("t2") as HTMLInputElement).value

if(uid=="admin" && pwd=="india")
{
  //sessionStorage.setItem("s",uid);
  //this.obj.navigate(['/products'])
  window.location.pathname = "recruit"
}
else
{

this.err1= "Invalid credentials for recruit"
}

  }

  comp(g:any) {
    this.o.comlogin(g).subscribe((c:any) => {
      if (c > 0) {
        console.log(c)
        sessionStorage.setItem("v",g.password)
        window.location.pathname="company"
      }
      else {
        this.err2 = "Invalid Credentials for company"
      }
    } )
  }

}
