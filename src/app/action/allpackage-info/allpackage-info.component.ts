import { Component, OnInit } from '@angular/core';
import { SummaryInfoService } from 'src/app/summary-info/summary-info.service';

@Component({
  selector: 'app-allpackage-info',
  templateUrl: './allpackage-info.component.html',
  styleUrls: ['./allpackage-info.component.css']
})
export class AllpackageInfoComponent implements OnInit {

  response;
  productArr;
  loading =true;
  errorMessage;
  constructor(private summary : SummaryInfoService) { }

  ngOnInit() {
    this.summary.getProducts().subscribe({
      next: products => {
        this.response = products;
        this.productArr = this.response.packageSummeryRS;
        this.loading = false;
        // this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });
  }

}
