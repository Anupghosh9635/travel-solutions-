export interface IProductDetails {
    packageDetailsRS : PackageDetails;
  
  }

  export interface PackageDetails{
    agencyId : string
    agencyName: string,
    agencyReview: string,
    packageId: string,
    packageName: string,
    currency: string,
    packageCategory: Array<String>,
    originalPrice: String,
    offerPrice: String,
    noOfDays: string,
    noOfNights: string,
    tripPlaces: Array<string>,
    overviewImages : Array<string>,
    highlights : Array<string>,
    overview : Array<string>,
    dayWiseList : Array<DayWiseList>
}

  export interface DayWiseList {
    dayNo: String,
    place :Array<string>,
    amenities :Array<string>,
    images :Array<string | ArrayBuffer>,
    infoData : Array<InfoData>
  }

  export interface InfoData {
    heading : String,
    description : String
  }


//   {
//     "packageDetailsRS": {
//       "agencyId": "101",
//       "agencyName": "Anup Travel Ageny",
//       "agencyReview": "3",
//       "packageId": "643",
//       "packageName": "Spectacular Bali Honeymoon Package",
//       "originalPrice": "1253",
//       "offerPrice": "1000",
//       "noOfDays": "4",
//       "noOfNights": "5",
//       "currency": "INR",
//       "tripPlaces": [
//         "plane",
//         "bear",
//         "Goa"
//       ],
//       "highlights": [
//         "Cruise on the Backwaters/Lake",
//         "Kalaripayattu Show"
//       ],
//       "overview": [
//         "Cruise on the Backwaters/Lake",
//         "Kalaripayattu Show"
//       ],
//       "overviewImages": [
//         "http://test.jpg"
//       ],
//       "dayWiseList": [
//         {
//           "dayNo": "1",
//           "place": [
//             "goa beatch",
//             "sea food market"
//           ],
//           "amenities": [
//             "bear",
//             "food",
//             "car"
//           ],
//           "images": [
//             "https://img.traveltriangle.com/attachments/pictures/871847/original/A_temple_in_Bali.jpg"
//           ],
//           "infoData": [
//             {
//               "heading": "Goa beach",
//               "description": "Upon arrival at Goa airport/railway station, an agent’s representative will pick you up and escort you to the hotel"
//             }
//           ]
//         }
//       ],
//       "packageCategory": [
//         "Family"
//       ]
//     }
//   }
