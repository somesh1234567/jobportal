import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';




@Injectable({

  providedIn: 'root'

})

export class ProjectService {



  constructor(public obj:HttpClient) { }



  Register(frm:any):Observable<number>
{
 return this.obj.post<number>("https://localhost:7139/api/job/registeruser",frm)
}

Jobdetail(frm:any):Observable<number>

{
 return this.obj.post<number>("https://localhost:7139/api/job/jobdetail",frm)
}


displaydata():Observable<any>



{



return this.obj.get<any>("https://localhost:71396/api/job/display")





}

recruitdata():Observable<any>
{
return this.obj.get<any>("https://localhost:7139/api/job/recruit")

}
jobdata():Observable<any>
{
return this.obj.get<any>("https://localhost:7139/api/job/job")

}


login(reg:any):Observable<number>
{
return this.obj.post<number>("https://localhost:7139/api/job/login",reg)
}
comlogin(reg:any):Observable<number>
{
return this.obj.post<number>("https://localhost:7139/api/job/comlogin",reg)
}


buynow(reg:any):Observable<number>



{



return this.obj.post<number>("https://localhost:7139/api/job/buy",reg)





}

detaildata():Observable<any>
{
return this.obj.get<any>("https://localhost:7139/api/job/getlogindata")

}


appliedjob(reg:any):Observable<any>
{
return this.obj.post<any>("https://localhost:7139/api/job/appliedjob",reg)

}

recquitment():Observable<any>
{
 return this.obj.get<any>("https://localhost:7139/api/job/rqteam")
}

approved(reg:any):Observable<any>

{

 return this.obj.post<any>("https://localhost:7139/api/job/approved",reg)

}



rejected(reg:any):Observable<any>

{

 return this.obj.post<any>("https://localhost:7139/api/job/rejected",reg)

}

upload(reg:any):Observable<number>
{
  return this.obj.post<number>("https://localhost:7139/api/job/upload",reg)
}

contact(reg:any):Observable<number>
{
  return this.obj.post<number>("https://localhost:7139/api/job/contect",reg)
}
comdata():Observable<any> {
  return this.obj.get<any>("https://localhost:7139/api/job/getrecdetails")
}

}
