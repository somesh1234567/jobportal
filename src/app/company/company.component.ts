import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
  providers: [ProjectService]
})
export class CompanyComponent implements OnInit {

  data: any = ""

  constructor(public o: ProjectService) { }

  ngOnInit(): void {
    this.o.comdata().subscribe(c => {
      console.log(c)
      this.data = c
      console.log(this.data[0].fname)
    })
  }

  Auth(frm:any) {
    this.o.Jobdetail(frm).subscribe(c => alert("Details Created"))
  }



}
