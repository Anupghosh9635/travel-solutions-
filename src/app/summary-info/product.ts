export interface IProduct {
  packageSummeryRS : Array<IProductInfo> ;

}

export interface IProductInfo{
    agencyId : string
    agencyName: string,
    agencyReview: string,
    packageId: string,
    packageName: string,
    packageCategory: Array<String>,
    originalPrice: String,
    offerPrice: String,
    noOfDays: string,
    noOfNights: string,
    tripPlaces: Array<string>,
    amenities :Array<string>,
    images : Array<string>,
    currency: string
}