import { Component, OnInit } from '@angular/core';
import { IProduct, IProductInfo } from './product';
import { SummaryInfoService } from './summary-info.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-summary-info',
  templateUrl: './summary-info.component.html',
  styleUrls: ['./summary-info.component.css']
})
export class SummaryInfoComponent implements OnInit {



  response : IProduct;
  productArr : IProductInfo [] = [];
  errorMessage ;
  loading : boolean = true;
  buttonLoader : boolean = false;
  destinationsName ='';
  private _destinationsName1 :string;
  public get destinationsName1() {
    return this._destinationsName1; 
  }
  public set destinationsName1(value) {
    this._destinationsName1 = value;
  } 
  persionMessage : string ='Per person on twin sharing basis';
  constructor(private summary : SummaryInfoService , app : AppComponent) {  
    // app.setIsLeftPanalRequired(true);
  }

  title;

  updateTitle(title: string) {
    this.title.setTitle(title);
  }

  ngOnInit() { 
    // console.log("-------------------"+this.summary.getHardCodedProducts())
    // setTimeout(function(){

    this.summary.getProducts().subscribe({
      next: products => {
        this.response = products;
        this.productArr = this.response.packageSummeryRS;
        this.loading = false;
        // this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });

    // }, 3000);
    // this.response = this.summary.getHardCodedProducts();
    // this.productArr = this.response.packageSummeryRS;
  }


 
  getSummeryData(city, date){
    this.loading = true;
    this.buttonLoader = true;
    console.log("getSummeryData########city#########--"+ city );
    console.log('-----------date*************'+date);
    console.log('-----------destinationsName1*************'+ this.destinationsName1);
    this.summary.getSearchProducts().subscribe({
      next: products => {
        this.response = products;
        this.productArr = this.response.packageSummeryRS;
        this.loading = false;
        this.buttonLoader = false;
        // this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });
  }



  
  
}
