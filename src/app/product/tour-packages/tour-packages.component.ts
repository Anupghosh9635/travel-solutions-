import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProductInfo } from 'src/app/summary-info/product';
import { SummaryInfoService } from 'src/app/summary-info/summary-info.service';

@Component({
  selector: 'app-tour-packages',
  templateUrl: './tour-packages.component.html',
  styleUrls: ['./tour-packages.component.css']
})
export class TourPackagesComponent implements OnInit {

  placeName : string =''
  productArr : IProductInfo [];
  response ;
  loading = true;
  errorMessage
  constructor(private route: ActivatedRoute, private summary: SummaryInfoService) { }


  ngOnInit() {
    let city : string = this.route.snapshot.paramMap.get('name');
    this.placeName =city;
    // this.buttonLoader = true;
    console.log("getSummeryData########city#########--"+ city );
    // console.log('-----------date*************'+date);
    // console.log('-----------destinationsName1*************'+ this.destinationsName1);
    this.summary.getSearchProducts().subscribe({
      next: products => {
        this.response = products;
        this.productArr = this.response.packageSummeryRS;
        this.loading = false;
        // this.buttonLoader = false;
        // this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });
  }

}
