import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { IProductDetails } from 'src/app/details-page/details-api-rs';
import { IProduct, IProductInfo } from 'src/app/summary-info/product';

@Component({
  selector: 'app-summery-view',
  templateUrl: './summery-view.component.html',
  styleUrls: ['./summery-view.component.css']
})
export class SummeryViewComponent implements OnInit , OnChanges{

  // @Input() productArrInfo : IProductInfo[];
  @Input() productArr : IProductInfo[];
  loading =true;

  // productArr =[];
  constructor() { 

  }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    // this.productArr =this.productArrInfo;
    console.log(this.productArr)
    if(this.productArr){
      this.loading = false;
    }
  }

  ngOnInit() {

    
  }

}
