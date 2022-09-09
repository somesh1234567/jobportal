import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  constructor() { }
  b: boolean = false;
  c: boolean = true;
  ngOnInit(): void {
    if (sessionStorage.getItem("u") == null) {
      this.b = true;
      this.c = false;
    }
    else {
      this.b = false;
    }
  }

}
