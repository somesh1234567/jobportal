import { compileDeclareInjectableFromMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { ProjectService } from '../project.service';
import { Result } from '../results';

@Component({
  selector: 'app-recruit',
  templateUrl: './recruit.component.html',
  styleUrls: ['./recruit.component.css'],
  providers: [ProjectService]
})
export class RecruitComponent implements OnInit {
  data: any = "";
  rec: any[] = [];
  constructor(public o: ProjectService) { }

  ngOnInit(): void {
    this.o.recruitdata().subscribe(c => this.data = c)
    this.o.recruitdata().forEach((e: any) => {
      this.rec.push(e)
      console.log(e[0])
    });
    console.log(this.rec)
  }

  // remove(id:number) {
  //   //this.rec = this.rec.filter((v: any,i: number) => i != id)
  // }
  i = 0;
  remove(id: number) {
    this.o.recruitdata().forEach((e) => {
      if (e[this.i].Id == id) {
        console.log("Triggered")
        var t = <HTMLButtonElement>document.getElementById("t2");
        t.disabled = true
      } else {
        this.remove(this.i + 1)
      }
    })
}

rem(id: number) {
  console.log(id)
  
}

val() {
  console.log("Triggered")
  let button = <HTMLButtonElement> document.getElementById('t2');
  button.disabled = true;
}
}
