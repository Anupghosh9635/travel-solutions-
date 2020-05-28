// import { Injectable } from '@angular/core';

// @Injectable({
//     providedIn: 'root'
//   })
export class AmenitiesService {  
  
  public static getAllAmenities() : IAmenities[]{

        return [
            {
              "name": "alcohol",
              "display" : "Alchole Available",
              "value": "assets/images/icon/alcohol.jpg"
            },
            {
              "name": "car",
              "display" : "Car service is available",
              "value": "assets/images/icon/car.jpg"
            },
            {
              "name": "food",
             "display" : "Free Food available",
              "value": "assets/images/icon/food.jpg"
            },
            {
              "name": "wifi",
              "display" : "Free Wifi available",
              "value": "assets/images/icon/wifi.jpg"
            },
            {
              "name": "flight",
              "display" : "Flight service available",
              "value": "assets/images/icon/flight.jpg"
            },
            {
              "name": "londry",
              "display" : "Londry service is available",
              "value": "assets/images/icon/londry.jpg"
            },
            {
              "name": "gim",
              "display" : "Gim is available",
              "value": "assets/images/icon/gim.jpg"
            },
            {
              "name": "doublebed",
              "display" : "Double ded in the room",
              "value": "assets/images/icon/doublebed.jpg"
            },
            {
              "name": "roomService24h",
              "display" : "24 houre room service available ",
              "value": "assets/images/icon/roomService24h.jpg"
            }
          ]
    }


    public static toureType : string [] = [
      "Family",
      "Honeymoon",
      "Honeymoon Special",
      "Friend",
      "Friend & Family",
      
      "Group"
    ];


}


export interface IAmenities{
  name: string,
  display : string,
  value : string
}