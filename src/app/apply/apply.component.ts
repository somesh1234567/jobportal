import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {

  names:any;
  title:any;
  desc:any;

  constructor(public obj: ActivatedRoute) { 
    obj.queryParams.subscribe(params => {
      this.names = params['name'];
      this.title = params['pos'];
      this.desc = params['desc'];
    })
  }

  ngOnInit(): void {
  }

}
