import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailsPageService } from './details-page.service';
import { IProductDetails, DayWiseList, PackageDetails } from './details-api-rs';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {

  idData : number = 2;
  idAnother : number = 2;
  packageDetailsRS : IProductDetails ;
  packageDetails : PackageDetails ;
  constructor(private route: ActivatedRoute, private router : Router, private pageService : DetailsPageService, app : AppComponent) {  
    app.setIsLeftPanalRequired(true);
    // this.packageDetails.highlights =[];
  }

   dayWiseList : DayWiseList [];
   errorMessage;

  ngOnInit() {
    let id : string = this.route.snapshot.paramMap.get('id');
    // this.packageDetailsRS = this.pageService.getHardCodedProducts(id);
    // this.packageDetails = this.packageDetailsRS.packageDetailsRS;
    // this.dayWiseList = this.packageDetails.dayWiseList;

    this.pageService.getProducts(id).subscribe({
      next: products => {
        this.packageDetailsRS = products;
        this.packageDetails = this.packageDetailsRS.packageDetailsRS;
        this.dayWiseList = this.packageDetails.dayWiseList;
        // this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });

    // console.log('dayWiseList ********************* '+this.dayWiseList)
  }




onBack() : void {
  this.router.navigate(['/home']);
}

}
