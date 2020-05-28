import { Component, OnInit, Injectable, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IProduct, IProductInfo } from './product';
import { SummaryInfoService } from './summary-info.service';

@Component({
  selector: 'app-summary-popup',
  templateUrl: './summary-info.component.html',
  styleUrls: ['./summary-info.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class SummaryPopupComponent implements OnInit, OnChanges{

  @Input() productArrInput : IProductInfo[]; 

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
  constructor(private summary : SummaryInfoService) {  
    
  }

  title;

  updateTitle(title: string) {
    this.title.setTitle(title);
  }

  ngOnInit() { 
    // this.response = this.responseData;
    // this.productArr = this.response.packageSummeryRS;
    // this.loading = false;
    // console.log(this.response)
  }


  public setPopupData(products) : void{

    console.log('method callllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll')
    this.response = products;
    this.productArr = this.response.packageSummeryRS;
    this.loading = false;
    console.log('this.loading'+this.loading +'----------------response-------'+this.response)
  }

  ngOnChanges(): void {
    this.productArr = this.productArrInput;
    this.loading = false;
    // this.buttonLoader = true;
    console.log(this.productArr)
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
