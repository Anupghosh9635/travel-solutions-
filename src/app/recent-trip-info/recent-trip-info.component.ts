import { Component, OnInit } from '@angular/core';

declare var $: any;
declare var require: any; 

@Component({
  selector: 'app-recent-trip-info',
  templateUrl: './recent-trip-info.component.html',
  styleUrls: ['./recent-trip-info.component.css']
})
export class RecentTripInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  
  name = 'Angular';

}
