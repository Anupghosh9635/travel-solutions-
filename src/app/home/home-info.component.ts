import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-info',
  templateUrl: './home-info.component.html',
  styleUrls: ['./home-info.component.css']
})
export class HomeInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

 imagePath : string = 'assets/images/icon/icon.jpg';

 alcoholIcon : string ='assets/images/icon/bear.jpg';
 carIcon : string ='assets/images/icon/car.jpg';
 foodIcon : string ='assets/images/icon/food.jpg';
 wifiIcon : string ='assets/images/icon/wifi.jpg';
 planeIcon : string ='assets/images/icon/plane.jpg';

 statRatingValue : number = 3;
 productId = 50 ;


 iconList  = ['assets/images/icon/bear.jpg',
 'assets/images/icon/car.jpg',
 'assets/images/icon/food.jpg',
 'assets/images/icon/wifi.jpg',
 'assets/images/icon/plane.jpg'
            ]; 

}
