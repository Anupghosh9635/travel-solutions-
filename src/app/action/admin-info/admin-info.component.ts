import { Component, OnInit } from '@angular/core';
import { HttpEventType } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { from } from 'rxjs';
import { AmenitiesService, IAmenities } from 'src/app/common/AmenitiesInfo';
import { DayWiseList, PackageDetails } from 'src/app/details-page/details-api-rs';
import { IProductInfo } from 'src/app/summary-info/product';
import { SummaryPopupComponent } from 'src/app/summary-info/summary-popup.component';


@Component({
  selector: 'app-admin-info',
  templateUrl: './admin-info.component.html',
  styleUrls: ['./admin-info.component.css']
})
export class AdminInfoComponent implements OnInit {

 
  isSuccesFullSave = false;
  isCreatePackage = false;
  public imagePath;
  public agencyName;
  uploadImage: any = 'assets/images/icon/uploadImage.jpg';
  placeName = '';
  headingData = '';
  descriptionData = '';
  noofDay: number = 0;
  tripPlaces = [];
  agencyId = '';
  amenityList: IAmenities[] = [];
  aminitiesCheck = [];
  packageType =[];
  packageTypeSelcted =[];
  constructor(private sanitizer: DomSanitizer, private popupSummery: SummaryPopupComponent) {
    this.amenityList = AmenitiesService.getAllAmenities();
    let currentUser = localStorage.getItem('currentUser');
    let obj = JSON.parse(currentUser);
    if (obj) {
      this.agencyName = obj.agencyName;
      if (obj.agencyId) {
        this.agencyId = obj.agencyId;
      }
    }
    this.packageType = AmenitiesService.toureType; 
    for (let index = 0; index < this.amenityList.length; index++) {
      this.aminitiesCheck.push(false);
    }

    for (let index = 0; index < this.packageType.length; index++) {
      this.packageTypeSelcted.push(false);
    }
  }


  ngOnInit() {
    // this.uploader.progressSource.subscribe(progress => {
    //   this.progress = progress;
    // });
  }

  createPacage(){
    this.isCreatePackage = true;
  }

  getArrayData(): DayWiseList {
    this.noofDay = this.noofDay + 1;
    return {
      "dayNo": "" + (this.noofDay),
      "place": [],
      "amenities": [],
      "images": [
        this.uploadImage
      ],
      "infoData": []
    }
  }

  // imageURL: string;

  urlData: any = 'assets/images/icon/uploadImage.jpg';
  onSelectFile(event) { // called each time file input changes
    console.log(event);
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      this.imagePath = event.target.files;
      console.log('imagePath' + this.imagePath);
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.urlData = reader.result; //add source to image
        // console.log('url---'+this.urlData)
      }
    }
  }


  dayWiseList: DayWiseList[] = [this.getArrayData()];

  add() {
    this.dayWiseList.push(this.getArrayData());
    console.log('dayWiseList------' + JSON.stringify(this.dayWiseList));
  }


  onDaySelectFile(event, index) { // called each time file input changes
    console.log(event);
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      this.imagePath = event.target.files;
      console.log('imagePath' + this.imagePath);
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        let data = reader.result; //add source to image

        // this.dayWiseList[index].images.push(data);
        this.dayWiseList[index].images[0] = data; ///tempurary hardcoded for array 1st element
      }
    }
  }



  addCityName(city): void {
    if (city) {
      this.tripPlaces.push(city);
      this.placeName = '';
    }
  }

  placeNameArr = [];
  addPlaceName(place, index): void {
    if (place) {
      this.dayWiseList[index].place.push(place);
      this.placeNameArr[index] = '';
      this.placeName = '';
    }
  }

  headingArr: any[] = [];
  descriptionArr: any[] = [];

  addDetailsInfo(headingData, descriptionData, index): void {
    if(headingData || descriptionData){
      this.dayWiseList[index].infoData.push({ "heading": headingData, "description": descriptionData });
      this.headingArr[index] = '';
      this.descriptionArr[index] = '';
    }
  }

  amenities : string[]=[];
  getAmenitiesList() :string[]{
    this.amenities = [];
    for (let index = 0; index < this.aminitiesCheck.length; index++) {
      const element = this.aminitiesCheck[index];
      if(element == true){
        this.amenities.push(this.amenityList[index].name);
      }
    }
    return this.amenities;
  }
  packageCategory = [];
  getPackageCategory() : string [] {
    this.packageCategory = [];
    for (let index = 0; index < this.packageTypeSelcted.length; index++) {
      const element = this.packageTypeSelcted[index];
      if(element == true){
        this.packageCategory.push(this.packageType[index]);
      }
    }
    return this.packageCategory;
  }



//** save summey view data---- */
  packageName;
  originalPrice;
  offerPrice;
  noOfDays;
  noOfNights;
  packageId = '';
  saveSummeryView() {
    let request: IProductInfo = {
      "agencyId": this.agencyId,
      "agencyName": this.agencyName,
      "agencyReview": "",
      "packageId": this.packageId,
      "packageName": this.packageName,
      "originalPrice": this.originalPrice,
      "offerPrice": this.offerPrice,
      "noOfDays": this.noOfDays,
      "noOfNights": this.noOfNights,
      "tripPlaces": this.tripPlaces,
      "amenities": this.getAmenitiesList(),
      "packageCategory": this.getPackageCategory(),
      "images": [this.urlData],
      "currency": "INR"
    };

    console.log('Request----' + JSON.stringify(request));

    console.log(event);
    this.isSuccesFullSave = true;
    let data = this;
    setTimeout(function () {
      data.isSuccesFullSave = false;
      console.log('insidesetTimeout****************************************' + data.isSuccesFullSave)
    }, 2000)
    // console.log('insidesetTimeout*********'+this.isSuccesFullSave)
  }


/** */

highlights;
overview;
saveDetailsView(){

   let request : PackageDetails= {
    "agencyId": this.agencyId,
    "agencyName": this.agencyName,
    "agencyReview": "",
    "packageId": this.packageId,
    "packageName": this.packageName,
    "originalPrice": this.originalPrice,
    "offerPrice": this.offerPrice,
    "packageCategory": this.getPackageCategory(),
    "currency": "INR",
    "noOfDays": this.noOfDays,
    "noOfNights": this.noOfNights,
    "tripPlaces": this.tripPlaces,
    "overviewImages" : [this.urlData],
    "highlights" : [this.highlights],
    "overview" : [this.overview],
    "dayWiseList" : this.dayWiseList
   }

   console.log('Details saveRequest----' + JSON.stringify(request));

  this.isSuccesFullSave = true;
  let data = this;
  setTimeout(function () {
    data.isSuccesFullSave = false;
    console.log('insidesetTimeout****************************************' + data.isSuccesFullSave)
  }, 2000)

}



/** summery popup page */
  popUpReq: IProductInfo[] = []
  setPupUpdata() {
    this.popUpReq = [{
      "agencyId": this.agencyId,
      "agencyName": this.agencyName,
      "agencyReview": "",
      "packageId": this.packageId,
      "packageName": this.packageName,
      "originalPrice": this.originalPrice,
      "offerPrice": this.offerPrice,
      "noOfDays": this.noOfDays,
      "noOfNights": this.noOfNights,
      "tripPlaces": this.tripPlaces,
      "amenities": this.getAmenitiesList(),
      "packageCategory": this.getPackageCategory(),
      "images": [this.urlData],
      "currency": "INR"
    }]
    console.log('Request----' + JSON.stringify(this.popUpReq));
  }





}
