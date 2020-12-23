(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/about-info/about-info.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about-info/about-info.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- About section -->\r\n<section class=\"about\" id=\"about\">\r\n\t<div class=\"container\">\r\n\t\t<h3 class=\"heading\">About Us</h3>\r\n\t\t<div class=\"col-md-5 about_left\">\r\n\t\t\t\r\n\t\t</div>\r\n\t\t<div class=\"col-md-7 about_right\">\r\n\t\t\t<h3>Welcome to our travel Journey</h3>\r\n\t\t\t<h4>Enjoy your dream vocation with us. Our Travel Journey is Safe way to reach your destination</h4>\r\n\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporinc \r\n\t\t\t\tididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.\r\n\t\t\t\tCurabitur at arcu eget erat ornare suscipit quis ac nunc. Vestibulum eget mi sed eros elementum pretium. \r\n\t\t\t\tSed et porttitor neque. Sed tristique sapienvellacus tincidunt consectetur ipsum. </p>\r\n\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor \r\n\t\t\t\tincididunt ut labore et dolore magna aliqua. Curabitur at arcu eget erat ornare suscipit quis ac nunc.\r\n\t\t\t\tVestibulum eget mi sed eros elementum pretium.</p>\r\n\t\t\t<ul>\r\n\t\t\t\t<!-- <li><a href=\"#\"  data-toggle=\"modal\" data-target=\"#myModal\" class=\"w3ls_more\" >Read More</a></li> -->\r\n\t\t\t\t<li><a routerLink=\"/contact\" class=\"w3l scroll\">Contact Us</a></li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t\t<div class=\"clearfix\"></div>\r\n\t\t\r\n\t</div>\r\n</section>\r\n<!-- //About section -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/action/admin-info/admin-info.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/action/admin-info/admin-info.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\"  *ngIf=\"isSuccesFullSave\">\n    <div class=\"success-message-position\" >\n      <p class=\"alert alert-success\">\n          <strong>Data Save Successfuly.....</strong>\n      </p>\n    </div>\n</div>\n\n<div class=\"display-4\" style=\"margin: 1em;\" >\n    Welcome to the Admin dash board ....\n</div>\n\n  <div class=\"loader-small\" *ngIf=\"!packageCoutInfo\"> </div>\n\n<table *ngIf=\"packageCoutInfo\" class=\"table table-striped\" style=\"border-bottom: 1px solid;\">\n    <thead>\n        <tr>\n            <th>Package Name</th>\n            <th>Count</th>\n            <th>Action</th>\n        </tr>\n    </thead>\n    <tbody>\n        <!-- <tr>\n            <td>In compleate Package </td>\n            <td>10</td>\n            <td><a target=\"_blank\" routerLink=\"in-cpmpleate\">edit</a> </td>\n        </tr>\n        <tr>\n            <td>In Active Package </td>\n            <td>5</td>\n            <td><a target=\"_blank\" routerLink=\"in-active\">edit</a></td>\n        </tr>\n        <tr>\n            <td>All Package </td>\n            <td>50</td>\n            <td><a target=\"_blank\" routerLink=\"all-package\">edit</a></td>\n        </tr> -->\n\n        <tr *ngFor=\"let packageD of packageCoutInfo\">  \n            <td>{{packageD.name}}</td>\n            <td>{{packageD.count}}</td>\n            <td><a *ngIf=\"packageD.isActionRequire == 'true'\" target=\"_blank\" routerLink=\"{{packageD.actionUrl}}\">edit</a></td>\n        </tr>\n    </tbody>\n</table>\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n  \n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Preview of the page</h4>\n      </div>\n      <div class=\"modal-body\">\n        <app-summery-view [productArr] = popUpReq [isButtonEnabled] =false ></app-summery-view>\n         <!-- <app-summary-popup [productArrInput]='popUpReq'></app-summary-popup>  -->\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n    \n  </div>\n</div>\n\n\n\n\n<!-- \n<div *ngIf=\"isSuccesFullSave\" class=\"success-full-message\">Success full saved the data....</div> -->\n\n\n  <button (click)=\"createPacage()\" class=\"btn btn-info btn-lg\" style=\"float: right; margin: 24px 11px;\" [disabled] ='isCreatePackage'> Create New Package</button>\n\n\n<div class=\"container summery-view1\" *ngIf=\"isCreatePackage\" style=\"margin-top: 7em;\">\n\n   \n\n    <ul class=\"nav nav-tabs\">\n        <li class=\"active\"><a data-toggle=\"tab\" href=\"#summeryV\" class=\"fs12\"> Summery View</a></li>\n        <li><a data-toggle=\"tab\" href=\"#detailsV\" class=\"fs12\">Details View</a></li>\n    </ul>\n    <div class=\"tab-content\">\n        <div id=\"summeryV\" class=\"tab-pane fade in active highlight\" style=\"margin: 10px;\">\n            <div class=\"summery-view\" style=\"min-height: 230px; padding: 10px;\">\n                <div class=\"row outlet-view\" style=\"position:relative;\">\n                    <div class=\"col-sm-4\">\n                        <img [src]='urlData' width=\"80%\">\n                        <br />\n                        <label class=\"custom-file-upload\">\n                            <input type=\"file\" (change)=\"onSelectFile($event)\" />\n                            <i class=\"fa fa-cloud-upload\"></i> Upload Image\n                            <i *ngIf='isSummeryImageLoading' class=\"fa fa-spinner fa-spin\"></i>\n                        </label>\n\n                    </div>\n                    <div class=\"col-sm-5\">\n                        <input class=\"text-box form-control\" [(ngModel)]=\"packageName\" type=\"text\"\n                            title=\"Please provide pakage name\" placeholder=\"Please provide package name\">\n\n                        <div class=\"day-view\" style=\"margin-top:8px; margin-left:0px;\">\n                            <input type=\"number\" [(ngModel)]=\"noOfDays\" placeholder=\" No of Days\" class=\"wid35\"  min=\"0\">\n                            Days <input type=\"number\" [(ngModel)]=\"noOfNights\" class=\"wid35\" placeholder=\" No of Nights\"  min=\"0\">\n                            Nights\n                        </div>\n                        <div>\n                            <span class=\"fs14 agency-color\"> {{agencyName}} </span>\n                            <!-- <app-rating [rating]='product.agencyReview' ></app-rating>  -->\n                        </div>\n                        <div class=\"\">\n                            <h5 class=\"fw6\">DESTINATIONS</h5>\n                            <!-- <input class=\"text-box form-control\" type=\"text\"\n                                placeholder=\"Please provide City Name , separator for diffrent city\"\n                                title=\"Please provide City Name , separator use for diffrent city\"> -->\n                                \n                            <span class=\"rounde-btn-city\" *ngFor=\"let city of tripPlaces\">{{city}}</span>\n                            <input class=\"text-box form-control details-input-day\" type=\"text\"\n                                [(ngModel)]=\"placeName\" title=\"Please provide detination city name\"\n                                placeholder=\"Please provide place Name\">\n                            <button (click)=\"addCityName(placeName)\" class=\"add-button\" >Add City</button>\n                        </div>\n\n                        <div class=\"\">\n                            <h5 class=\"fw6\">INCLUSIONS</h5>\n                            <span *ngFor=\"let amenitie of amenityList; let ind = index\">\n                                <span class=\"click-to-top\">\n                                    <img style=\"max-width: 30px; max-height: 37px;\" src={{amenitie.value}}\n                                        title={{amenitie.display}} /> \n                                    <input type=\"checkbox\" name=\"amenitie.name\" value=\"amenitie.name\"  [(ngModel)]=\"aminitiesCheck[ind]\" />\n                                </span>&nbsp;&nbsp;&nbsp; &nbsp;\n                            </span>\n\n                        </div>\n\n                    </div>\n                    <div class=\"col-sm-3\">\n                        \n                        <span *ngFor=\"let package of packageType; let ind = index\">\n                            <span class=\"click-to-top\"> \n                                <span class=\"rounde-btn-type\">{{package}}</span>\n                                <input type=\"checkbox\" name=\"amenitie.name\" value=\"package\"  [(ngModel)]=\"packageTypeSelcted[ind]\" />\n                            </span> &nbsp;&nbsp;&nbsp; &nbsp;\n                        </span>\n\n                        <h5 style=\"margin-top: 4px; margin-bottom: 3px;\">Starting from: </h5>\n                        <span class=\"green f20 fw8\">\n                            Ex. &nbsp; {{'1000' | currency: 'INR' :'symbol':'2.2-2'}}\n                            <input class=\"text-box form-control\" type=\"number\"\n                                title=\"Please provide price to be taken from user\"\n                                placeholder=\"Please provide Display price\" [(ngModel)]=\"offerPrice\">\n                            <!-- {{'product.offerPrice' | currency: product.currency :'symbol':'2.2-2'}} -->\n                        </span>\n                        <span class=\"f20 fw8\">\n                            Ex. &nbsp; <del> {{'1200' | currency: 'INR':'symbol':'2.2-2'}}</del>\n                            <input class=\"text-box form-control\" type=\"number\"\n                                title=\"Please provide original price it will be show in cross icon\"\n                                placeholder=\"Please provide original Price\" [(ngModel)]=\"originalPrice\">\n                            <!-- <del>  {{product.originalPrice | currency: product.currency:'symbol':'2.2-2'}}</del> -->\n                        </span>\n                        <div class=\"fs12\">\n                            Per person on twin sharing basis\n                        </div>\n                        <!-- Trigger the modal with a button -->\n                        <button type=\"button\" class=\"btn btn-info btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"setPupUpdata()\" style=\"padding: 3px 15px; margin-top: 4px;\">Preview Page</button>\n\n                        <button class=\"details-button\" (click) =\"saveSummeryView()\" [disabled]=\"isSummeryVSaveLoading\">Save Summery View <i *ngIf='isSummeryVSaveLoading' class=\"fa fa-spinner fa-spin\"></i></button>\n                        <!-- <input class=\"details-button\" type=\"button\" (click)=\"saveSummeryView()\" value=\"Save Summery View\"> -->\n\n                    </div>\n                </div>\n            </div>\n        </div>\n\n\n\n\n\n\n\n        <!-- Details Page view  Section -->\n        <div id=\"detailsV\" class=\"tab-pane fade highlight\">\n            <div class=\"mb2 outlet-view\">\n                \n                \n                <div class=\"mb1\">\n                    <span class=\"fw9 fs19\"> {{packageName}}\n                        <!-- Fun ‘n’ Frolic Goa Family Holiday Package -->\n                    </span>\n                    <span class=\"day-view\">\n                        {{noOfDays}} Days &amp; {{noOfNights}} Nights | {{tripPlaces.length}} Cities\n                        <!-- 5 Days &amp; 4 Nights | 4 Cities -->\n                    </span>\n                </div>\n<!-- \n                <div>\n                    <img style=\"max-height: 450px;  width: 80%;\" alt=\"smiley face\" src={{urlData}} onerror=\"this.src='assets/images/alt/enjoy.jpg'\">\n                </div>\n                -->\n\n                <!-- <div class=\"mb1\">\n                    <span class=\"fw9 fs19\">\n                        <input class=\"text-box form-control details-input\" type=\"text\" [(ngModel)]=\"packageName\"\n                            title=\"Please provide pakage name\" placeholder=\"Please provide package name\">\n                        \n                    </span>\n                    <span class=\"day-view\">\n                        <input type=\"number\" [(ngModel)]=\"noOfDays\" placeholder=\"No of Days\" class=\"wid35\">\n                        Days <input type=\"number\" [(ngModel)]=\"noOfNights\" class=\"wid35\" placeholder=\"No of Nights\">\n                        Nights\n                \n                    </span>\n                </div>-->\n                <div>\n                    <img [src]='detailsURLData' width=\"80%\" height=\"400px\">\n                    <br />\n                    <label class=\"custom-file-upload\" title=\"If you want to change the image diffrent from summery image then only upload\">\n                        <input type=\"file\" (change)=\"onSelectDetailsFile($event)\" />\n                        <i class=\"fa fa-cloud-upload\"></i> Upload Image\n                        <i *ngIf='isDetaisImageLoading' class=\"fa fa-spinner fa-spin\"></i>\n                    </label>\n                </div> \n\n                <!-- <div class=\"container summery-view1\"> -->\n                <div class=\"tab-content\" style=\"margin-top: 20px; margin-bottom: 20px;\">\n                    <div>\n                        <label for=\"usr\">Highlights Info</label>\n                        <textarea style=\"height:120px\" class=\"text-box form-control\" type=\"text\"\n                            [(ngModel)]=\"highlights\" title=\"Please provide pakage name\"\n                            placeholder=\"Please provide highlights info...\"></textarea>\n                    </div>\n                    <br />\n                    <div>\n                        <label for=\"usr\">Overview Info</label>\n                        <textarea style=\"height:120px\" class=\"text-box form-control\" type=\"text\" [(ngModel)]=\"overview\"\n                            title=\"Please provide pakage name\" placeholder=\"Please provide overview info...\"></textarea>\n                    </div>\n                </div>\n                <!-- </div> -->\n                <div *ngFor=\"let dayWData of dayWiseList; let in=index\">\n                    <div class=\"half-circle\">\n                        <span class=\"fs15 day-name\"> Day</span>\n                        <!-- [(ngModel)]=\"dayWiseList[in].dayNo\" -->\n                        <span class=\"day-value\">{{in +1}}</span>\n                    </div>\n                    <div class=\"summery-view\" style=\"margin-top: 1em;\">\n                        <div class=\"row outlet-view-details\">\n                            <div class=\"col-sm-4\">\n                                <!-- <img style=\"width: 100%;\" alt=\"smiley face\" src={{dayWData.images[0]}}\n                                    onerror=\"this.src='assets/images/alt/enjoy.jpg'\"> -->\n                                <img [src]='dayWData.images[0]' onerror=\"this.src='assets/images/icon/uploadImage.jpg'\"\n                                    alt=\"smiley face\" width=\"100%\">\n                                <br />\n                                <label class=\"custom-file-upload\">\n                                    <input type=\"file\" (change)=\"onDaySelectFile($event, in)\" />\n                                    <i class=\"fa fa-cloud-upload\"></i> Upload Image\n                                    <i *ngIf='ismageLoading[in]' class=\"fa fa-spinner fa-spin\"></i>\n                                </label>\n                            </div>\n                            <div class=\"col-sm-8\">\n\n                                <span class=\"rounde-btn-type\" *ngFor=\"let placeNm of dayWData.place\">{{placeNm}}</span>\n                                <input class=\"text-box form-control details-input-day\" type=\"text\"\n                                    [(ngModel)]=\"placeNameArr[in]\" title=\"Please provide place name to be visited this day\"\n                                    placeholder=\"Please provide place Name\">\n                                <button (click)=\"addPlaceName(placeNameArr[in], in)\" class=\"add-button\" >Add Place</button>\n\n                                <div class=\"header-line\"></div>\n                                <div *ngFor=\"let dayInfo of dayWData.infoData\">\n                                    <h4><b>{{dayInfo.heading}}</b></h4>\n                                    <div class=\"fs12\">\n                                        {{dayInfo.description}}\n                                    </div>\n                                </div>\n\n                                <div style=\"margin-top: 4em;\">\n                                    <div>\n                                        <label for=\"usr\"> Add Hading Info</label>\n                                        <textarea style=\"height:40px\" class=\"text-box form-control\" type=\"text\"\n                                        [(ngModel)]=\"headingArr[in]\" title=\"Please provide pakage name\"\n                                            placeholder=\"Please provide heading info...\"  name =\"heading\"></textarea>\n                                    </div>\n                                    <br />\n                                    <div>\n                                        <label for=\"usr\"> Add Description</label>\n                                        <textarea style=\"height:80px\" class=\"text-box form-control\" type=\"text\"\n                                        [(ngModel)]=\"descriptionArr[in]\" title=\"Please provide pakage name\"\n                                            placeholder=\"Please provide Description info...\"></textarea>\n                                    </div>\n                                    <button class=\"details-button buttom-right\" type=\"submit\" (click)=\"addDetailsInfo(headingArr[in] , descriptionArr[in], in)\">Add Details info</button>\n                                </div> \n\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div>\n                    <button (click)=\"add()\" class=\"add-button\" style=\"float: right;\">Add Number of Days ({{noofDay +1 }})</button>\n                    <!-- {{dayWiseList | json}} -->\n                    <button (click)=\"saveSummeryView()\" class=\"btn btn-success btn-mm\" style=\"float: right;\" [disabled]=\"isSummeryVSaveLoading\">Save Detais View <i *ngIf='isSummeryVSaveLoading' class=\"fa fa-spinner fa-spin\"></i></button>\n                    <!-- <button (click)=\"saveSummeryView()\" class=\"btn btn-success btn-mm\" style=\"float: right;\" > Save Detais View</button> -->\n                </div>\n\n            </div>\n        </div>\n\n\n    </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/action/allpackage-info/allpackage-info.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/action/allpackage-info/allpackage-info.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\"  *ngIf=\"isSuccessMessage\">\n    <div class=\"success-message-position\" >\n      <p class=\"alert alert-success\">\n          <strong>{{successMsg}}</strong>\n      </p>\n    </div>\n</div>\n\n<div class=\"row\"  *ngIf=\"isErrorMessage\">\n    <div class=\"success-message-position\" >\n      <p class=\"alert alert-danger\">\n          <strong>{{errorMsg}}</strong>\n      </p>\n    </div>\n</div>\n\n<div class=\"display-4\" style=\"margin: 1em;\" >\n    All Package Info ....\n</div>\n\n<div *ngIf=\"loading\">\n    loading ...\n    <div class=\"loader\"></div> \n</div>\n\n<div *ngIf=\"! loading\">\n\n<table class=\"table table-striped\" style=\"border-bottom: 1px solid;\">\n    <thead>\n        <tr>\n            <th>Packahe Name</th>\n            <th>Package Id</th>\n            <th>Make Active</th>\n            <th>Make Inactive</th>\n            <th>Delete</th>\n            <th>Edit</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let package of productArr; let in = index\">\n            <td>{{package.packageName}}</td>\n            <td>{{package.packageId}}</td>\n            <td> <input type=\"radio\" [name]='in' (change) =\"onChangeActiveValue($event.target.value, package.packageId)\"> Active</td>\n            <td> <input type=\"radio\" [name]='in' (change) =\"onChangeInActiveValue($event.target.value, package.packageId)\"> In Active</td>\n            <td> <input type=\"radio\" [name]='in' (change) =\"onChangeDeleteValue($event.target.value, package.packageId)\"> Delete</td>\n            <td><a target=\"_blank\" [routerLink]=\"['/product-modification', package.packageId]\">Edit</a></td>\n        </tr>\n    </tbody>\n\n</table>\n\n<!-- <button style=\"float: right;margin: 5px;\" class=\"btn btn-danger\">Delete</button>\n<button style=\"float: right;margin: 5px;\" class=\"btn btn-warning\">In Active</button>\n<button style=\"float: right; margin: 5px;\" class=\"btn btn-success\">Active</button> -->\n\n<button style=\"float: right; margin: 5px;\" class=\"btn btn-danger\" (click) =\"updateDeleteList()\" [disabled]=\"deleteBLoading\">Delete <i *ngIf='deleteBLoading' class=\"fa fa-spinner fa-spin\"></i></button>\n<button style=\"float: right;margin: 5px;\" class=\"btn btn-warning\" (click) =\"updateInActiveList()\" [disabled]=\"inActiveBLoading\">In Active <i *ngIf='inActiveBLoading' class=\"fa fa-spinner fa-spin\"></i></button>\n<button style=\"float: right; margin: 5px;\" class=\"btn btn-success\" (click)=\"updateActiveList()\" [disabled]=\"activeBLoading\">Active <i *ngIf='activeBLoading' class=\"fa fa-spinner fa-spin\"></i></button>\n\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/action/inactive-info/inactive-info.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/action/inactive-info/inactive-info.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\"  *ngIf=\"isSuccessMessage\">\n    <div class=\"success-message-position\" >\n      <p class=\"alert alert-success\">\n          <strong>{{successMsg}}</strong>\n      </p>\n    </div>\n</div>\n\n<div class=\"row\"  *ngIf=\"isErrorMessage\">\n    <div class=\"success-message-position\" >\n      <p class=\"alert alert-danger\">\n          <strong>{{errorMsg}}</strong>\n      </p>\n    </div>\n</div>\n\n\n\n<div class=\"display-4\" style=\"margin: 1em;\" >\n    In Active dash board ....\n</div>\n\n<div *ngIf=\"loading\">\n    loading ...\n    <div class=\"loader\"></div> \n</div>\n\n\n\n<div *ngIf=\"! loading\">\n<table  class=\"table table-striped\" style=\"border-bottom: 1px solid;\">\n    <thead>\n        <tr>\n            <th>Packahe Name</th>\n            <th>Package Id</th>\n            <th>Make Active</th>\n            <th>Delete</th>\n            <th>Edit</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let package of productArr; let in = index\">\n            <td>{{package.packageName}}</td>\n            <td>{{package.packageId}}</td>\n            <!-- [(ngModel)]=\"deletedArr[in]\" -->\n            <td><input type=\"radio\" [name]='in' (change) =\"onChangeActiveValue($event.target.value, package.packageId)\" > Active</td>\n            <td><input type=\"radio\" [name]='in' (change) =\"onChangeDeleteValue($event.target.value, package.packageId)\" > Delete</td>\n            <td><a target=\"_blank\" [routerLink]=\"['/product-modification', package.packageId]\">Edit</a></td>\n        </tr>\n    </tbody>\n\n</table>\n<!-- {{activeArr | json}} {{deletedArr | json}}  {{mapSelectedValue}} -->\n<button style=\"float: right; margin: 5px;\" class=\"btn btn-danger\" (click) =\"updateDeleteList()\" [disabled]=\"deleteBLoading\">Delete <i *ngIf='deleteBLoading' class=\"fa fa-spinner fa-spin\"></i></button>\n<button style=\"float: right; margin: 5px;\" class=\"btn btn-success\" (click)=\"updateActiveList()\" [disabled]=\"activeBLoading\">Active <i *ngIf='activeBLoading' class=\"fa fa-spinner fa-spin\"></i></button>\n\n<!-- activeBLoading = false; -->\n<!-- deleteBLoading = false; -->\n\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/action/incompleate-info/incompleate-info.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/action/incompleate-info/incompleate-info.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\"  *ngIf=\"isSuccessMessage\">\n    <div class=\"success-message-position\" >\n      <p class=\"alert alert-success\">\n          <strong>{{successMsg}}</strong>\n      </p>\n    </div>\n</div>\n\n<div class=\"row\"  *ngIf=\"isErrorMessage\">\n    <div class=\"success-message-position\" >\n      <p class=\"alert alert-danger\">\n          <strong>{{errorMsg}}</strong>\n      </p>\n    </div>\n</div>\n\n<div class=\"display-4\" style=\"margin: 1em;\" >\n    In Compleate dash board ....\n</div>\n\n<div *ngIf=\"loading\">\n    loading ...\n    <div class=\"loader\"></div> \n</div>\n\n<div *ngIf=\"! loading\"> \n\n<table class=\"table table-striped\" style=\"border-bottom: 1px solid;\">\n    <thead>\n        <tr>\n            <th>Packahe Name</th>\n            <th>Package Id</th>\n            <!-- <th>Make Active</th>\n            <th>Make Inactive</th> -->\n            <th>Delete</th>\n            <th>Edit</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let package of productArr; let in = index\">\n            <td>{{package.packageName}}</td>\n            <td>{{package.packageId}}</td>\n            <!-- <td> <input type=\"radio\" [name]='in'> <a>Active</a></td>\n            <td> <input type=\"radio\" [name]='in'> <a>In Active</a></td> -->\n            <td>  <input type=\"radio\" [name]='in' (change) =\"onChangeDeleteValue($event.target.value, package.packageId)\" > <a>Delete</a></td>\n            <td><a target=\"_blank\" [routerLink]=\"['/product-modification', package.packageId]\"> Compleate </a></td>\n            <!-- [routerLink]=\"['/product-modification', product.packageId]\" -->\n        </tr>\n    </tbody>\n\n</table>\n\n<button style=\"float: right;margin: 5px;\" class=\"btn btn-danger\" (click) =\"updateDeleteList()\" [disabled]=\"deleteBLoading\">Delete <i *ngIf='deleteBLoading' class=\"fa fa-spinner fa-spin\"></i></button>\n<!-- <button style=\"float: right;margin: 5px;\" class=\"btn btn-warning\">In Active</button>\n<button style=\"float: right; margin: 5px;\" class=\"btn btn-success\">Active</button> -->\n\n\n    \n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-heder-info></app-heder-info>\n\n<!-- <i class=\"fab fa-apple\"></i> -->\n<!-- <fa name=\"cog\" animation=\"spin\"></fa>\n\n<fa class=\"fas fa-camera\"></fa>\n<span class=\"fas fa-camera\"></span> -->\n\n\n<!-- <fa-icon icon=\"faCoffee\"></fa-icon> -->\n\n<i fa name=\"times\" border=true></i>\n<!-- <app-heder></app-heder> -->\n\n\n<div class=\"container\" *ngIf=isParentDivActive>\n    <div class=\"row\">\n        <div class=\"col-sm-2\" style=\"margin-bottom: 2em;\">\n            <h5 class=\"heading-grid\">Top Holiday Destinations</h5>\n            <a class=\"rounde-button\" target=\"_blank\" [routerLink]=\"['/tour-packages', 'Manali']\" >Manali</a>\n            <a class=\"rounde-button\" target=\"_blank\" [routerLink]=\"['/tour-packages', 'Kerala']\">Kerala</a>\n            <a class=\"rounde-button\" target=\"_blank\" [routerLink]=\"['/tour-packages', 'Gangtok']\">Gangtok</a>\n            <a class=\"rounde-button\" target=\"_blank\" [routerLink]=\"['/tour-packages', 'Munnar']\">Munnar</a>\n        </div>\n        <div class=\"col-sm-8\">\n\n            <router-outlet></router-outlet>\n\n        </div>\n        <div class=\"col-sm-2\">\n        </div>\n    </div>\n</div>\n\n\n<router-outlet *ngIf= '! isParentDivActive'></router-outlet>\n\n    <app-footer-info></app-footer-info>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/contact-info/contact-info.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contact-info/contact-info.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- contact -->\t\t\r\n<section class=\"contact\" id=\"contact\">\r\n\t<div class=\"container\"> \r\n\t\t<h3 class=\"heading header-info\">Contact Us</h3>\r\n\t\t<div class=\"contact-agileinfo\">\r\n\t\t\t<div class=\"col-md-7 contact-right\"> \r\n\t\t\t\t<form action=\"#\" method=\"post\">  \r\n\t\t\t\t\t<input type=\"text\" name=\"Name\" placeholder=\"Name\" required=\"\">\r\n\t\t\t\t\t<input type=\"email\" class=\"email\" name=\"Email\" placeholder=\"Email\" required=\"\">\r\n\t\t\t\t\t<input type=\"text\" name=\"Phone no\" placeholder=\"Phone\" required=\"\">\r\n\t\t\t\t\t<textarea name=\"Message\" placeholder=\"Message\" required=\"\"></textarea>\r\n\t\t\t\t\t<input class=\"submit-info\" type=\"submit\" value=\"SUBMIT\" > \r\n\t\t\t\t</form>\r\n\t\t\t</div> \r\n\t\t\t<div class=\"col-md-5 contact-left\">\r\n\t\t\t\t<div class=\"address\">\r\n\t\t\t\t\t<h5>Address:</h5>\r\n\t\t\t\t\t<p><i class=\"glyphicon glyphicon-home\"></i> New Town, Kolkata, INDIA</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"address address-mdl\">\r\n\t\t\t\t\t<h5>Phones:</h5>\r\n\t\t\t\t\t<p><i class=\"glyphicon glyphicon-earphone\"></i> +91 9635499033</p>\r\n\t\t\t\t\t<p><i class=\"glyphicon glyphicon-phone\"></i>+91 7699677158</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"address\">\r\n\t\t\t\t\t<h5>Email:</h5>\r\n\t\t\t\t\t<p><i class=\"glyphicon glyphicon-envelope\"></i> <a href=\"mailto:anupghosh9635@gmail.com\">anupghosh9635@gmail.com</a></p>\r\n\t\t\t\t\t<p><i class=\"glyphicon glyphicon-globe\"></i> <a href=\"mailto:website@example.com\">travelJourny\r\n                        .com</a></p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"clearfix\"></div>\r\n\t\t</div>\r\n\t</div>\r\n</section>\r\n<section class=\"agileits-w3layouts-map\">\r\n\t<!-- <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.9503398796587!2d-73.9940307!3d40.719109700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a27e2f24131%3A0x64ffc98d24069f02!2sCANADA!5e0!3m2!1sen!2sin!4v1441710758555\" allowfullscreen></iframe> -->\r\n        <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.921643069012!2d88.4472209145915!3d22.582033785178005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275f2f9a3aa39%3A0x7a9f72a6b68e74fe!2sDLF%201Tower%20Newtown!5e0!3m2!1sen!2sin!4v1588444579660!5m2!1sen!2sin\" allowfullscreen></iframe>\r\n\t\t<!-- <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.921643069012!2d88.4472209145915!3d22.582033785178005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275f2f9a3aa39%3A0x7a9f72a6b68e74fe!2sDLF%201Tower%20Newtown!5e0!3m2!1sen!2sin!4v1588444579660!5m2!1sen!2sin\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\" aria-hidden=\"false\" tabindex=\"0\"></iframe> -->\r\n</section>\r\n<!-- //contact -->\t"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer-info/footer-info.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer-info/footer-info.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Footer -->\n  <section class=\"footer-agile\">\n    <div class=\"container\">\n      <div class=\"footer-btm-agileinfo\">\n        <div class=\"col-md-3 col-xs-12 footer-grid w3social\">\n          <h3>About us</h3>\n          <p class=\"footer-p1\"> This company is use to creare a product that can user any coustomar with free of cost..</p>\n          <a routerLink=\"/about\" data-toggle=\"modal\" >Read More <span class=\"fa fa-long-arrow-right\"></span></a>\n        </div>\n        <div class=\"col-md-3 col-xs-12 footer-grid\">\n          <h3>Contact Info</h3>\n          <ul>\n            <li><i class=\"fa fa-phone\"></i>+91 9635499033</li>\n            <li><i class=\"fa fa-fax\"></i>+91 831068590</li>\n            <li><i class=\"fa fa-map-marker\"></i>New Town, Kolkata, India</li>\n            <li><i class=\"fa fa-envelope-o\"></i><a href=\"mailto:example@mail.com\">anupghosh9635@gmail.com</a></li>\n            <li><i class=\"fa fa-globe\"></i><a href=\"#\">http://travelJourney.com</a></li>\n          </ul>\n        </div>\n        <div class=\"col-md-2 col-xs-12 footer-grid w3social\">\n          <h3>Quick Links</h3>\n          <ul>\n            <li><a routerLink=\"home\">Home</a></li>\n            <li><a routerLink=\"about\" class=\"scroll\">About</a></li>\n            <li><a routerLink=\"packages\" class=\"scroll\">Packages</a></li>\n            <li><a routerLink=\"offers\" class=\"scroll\">Recent Trips</a></li>\n            <li><a routerLink=\"contact\" class=\"scroll\">Contact Us</a></li>\n          </ul>\n        </div>\n        <div class=\"col-md-4 col-xs-12 footer-grid\">\n          <h3>Latest Tweets</h3>\n          <ul class=\"tweet-agile\">\n          <li>\n            <i class=\"fa fa-twitter-square\" aria-hidden=\"true\"></i>\n            <p class=\"tweet-p1\"><a href=\"mailto:support@company.com\">anupghosh9635@gmail.com</a> sit amet consectetur adipiscing. <a href=\"#\">http://travelJourney.com/tweet</a></p>\n            <p class=\"tweet-p2\">Posted 3 days ago.</p>\n          </li>\n          <li>\n            <i class=\"fa fa-twitter-square\" aria-hidden=\"true\"></i>\n            <p class=\"tweet-p1\"><a href=\"mailto:support@company.com\">@example</a> sit amet consectetur adipiscing. <a href=\"#\">http://travelJourney.com/tweet</a></p>\n            <p class=\"tweet-p2\">Posted 3 days ago.</p>\n          </li>\n        </ul>\n        </div>\n        <div class=\"clearfix\"> </div>\n      </div>\n      <div class=\"footer-agilem\">\n        <div class=\"col-sm-8 col-xs-9 copy-w3lsright\">\n          <p>© 2020 Travel Journey. All rights reserved | Design by Anup Ghosh</p>\n        </div>\n        <!-- <div class=\"col-sm-4 col-xs-6 social-w3licon\">\n          <a href=\"#\" class=\"social-button twitter\"><i class=\"fa fa-twitter\"></i></a>\n          <a href=\"#\" class=\"social-button facebook\"><i class=\"fa fa-facebook\"></i></a>\n          <a href=\"#\" class=\"social-button google\"><i class=\"fa fa-google-plus\"></i></a>\n          <a href=\"#\" class=\"social-button dribbble\"><i class=\"fa fa-dribbble\"></i></a>\n        </div> -->\n        <div class=\"clearfix\"></div>\n      </div>\n    </div>\n  </section>\n  <!-- //footer end here -->\n\n<!-- \n\n  <footer class=\"page-footer font-small mdb-color pt-4\">\n    <div class=\"container text-center text-md-left\">\n      <div class=\"row text-center text-md-left mt-3 pb-3\">\n        <div class=\"col-md-3 col-lg-3 col-xl-3 mx-auto mt-3\">\n          <h5 class=\"text-uppercase mb-4 font-weight-bold\">Anup Soft</h5>\n          <p>This company is use to creare a product that can user any coustomar with free of cost.</p>\n        </div>\n        <hr class=\"w-100 clearfix d-md-none\">\n        <div class=\"col-md-2 col-lg-2 col-xl-2 mx-auto mt-3\">\n          <h5 class=\"text-uppercase mb-4 font-weight-bold\">Products</h5>\n          <p>\n            <a href=\"#!\">MDBootstrap</a>\n          </p>\n          <p>\n            <a href=\"#!\">MDWordPress</a>\n          </p>\n          <p>\n            <a href=\"#!\">BrandFlow</a>\n          </p>\n          <p>\n            <a href=\"#!\">Bootstrap Angular</a>\n          </p>\n        </div>\n        <hr class=\"w-100 clearfix d-md-none\">\n        <div class=\"col-md-3 col-lg-2 col-xl-2 mx-auto mt-3\">\n          <h5 class=\"text-uppercase mb-4 font-weight-bold\">Useful links</h5>\n          <p>\n            <a href=\"contact\">Contact Us</a>\n          </p>\n          <p>\n            <a href=\"about\">About</a>\n          </p>\n          <p>\n            <a href=\"home\">Home</a>\n          </p>\n          <p>\n            <a href=\"#!\">Help</a>\n          </p>\n        </div>\n        <hr class=\"w-100 clearfix d-md-none\">\n        <div class=\"col-md-4 col-lg-3 col-xl-3 mx-auto mt-3\">\n          <h5 class=\"text-uppercase mb-4 font-weight-bold\">Contact</h5>\n          <p>\n            <i class=\"fas fa-home mr-3\"></i> New Town, Kolkata, WB, IN</p>\n          <p>\n            <i class=\"fas fa-envelope mr-3\"></i> anupghosh9635@gmail.com</p>\n          <p>\n            <i class=\"fas fa-phone mr-3\"></i> + 91 9635499033</p>\n          <p>\n            <i class=\"fas fa-print mr-3\"></i> +91 8310685190</p>\n        </div>\n      </div> \n      <hr>\n  \n      <div class=\"row d-flex align-items-center\">\n        <div class=\"col-md-7 col-lg-8\">\n          <p class=\"text-center text-md-left\">© 2020 Copyright:\n            <a href=\"https://anupghosh.com/\">\n              <strong> anupghosh.com</strong>\n            </a>\n          </p>\n        </div>\n        <div class=\"col-md-5 col-lg-4 ml-lg-0\">\n          <div class=\"text-center text-md-right\">\n            <ul class=\"list-unstyled list-inline\">\n              <li class=\"list-inline-item\">\n                <a class=\"btn-floating btn-sm rgba-white-slight mx-1\">\n                  <i class=\"fab fa-facebook-f\"></i>\n                </a>\n              </li>\n              <li class=\"list-inline-item\">\n                <a class=\"btn-floating btn-sm rgba-white-slight mx-1\">\n                  <i class=\"fab fa-twitter\"></i>\n                </a>\n              </li>\n              <li class=\"list-inline-item\">\n                <a class=\"btn-floating btn-sm rgba-white-slight mx-1\">\n                  <i class=\"fab fa-google-plus-g\"></i>\n                </a>\n              </li>\n              <li class=\"list-inline-item\">\n                <a class=\"btn-floating btn-sm rgba-white-slight mx-1\">\n                  <i class=\"fab fa-linkedin-in\"></i>\n                </a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </footer> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/heder-info/heder-info.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/heder-info/heder-info.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-inverse\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n\n                <div class=\"navbar-header\">\n                    <button class=\"navbar-toggle\" data-target=\"#mobile_menu\" data-toggle=\"collapse\"><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span></button>\n                    <a routerLink=\"/\" class=\"navbar-brand\"><img src=\"assets/images/logo/travelJourey.png\" class =\"headerIage\" /></a>\n                </div>\n\n                <div class=\"navbar-collapse collapse\" id=\"mobile_menu\">\n                    <ul class=\"nav navbar-nav\">\n                        <li class=\"active\"><a routerLink=\"home\">Home</a></li>\n                        <li><a routerLink=\"/welcome\">Welcome</a></li>\n                        <li><a routerLink=\"/contact\">Contact Us</a></li>\n                        <li><a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"> Others <span class=\"caret\"></span></a>\n                            <ul class=\"dropdown-menu\">\n                                <li><a routerLink=\"packages\" >Packages</a></li>\n                                <!-- <li><a routerLink=\"details\">Details Page</a></li> -->\n                                <li><a routerLink=\"about\">About Us</a></li>\n                                <li><a routerLink=\"admin\">Admin Page</a></li>\n                                <!-- <li><a routerLink=\"summeryView\">summery View</a></li> -->\n                                \n                                \n                            </ul>\n                        </li>\n                    </ul>\n                    <!-- <ul class=\"nav navbar-nav\">\n                        <li>\n                            <form action=\"\" class=\"navbar-form\">\n                                <div class=\"form-group\">\n                                    <div class=\"input-group\">\n                                        <input type=\"search\" name=\"search\" id=\"\" placeholder=\"Search Anything Here...\" class=\"form-control\">\n                                        <span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-search\"></span></span>\n                                    </div>\n                                </div>\n                            </form>\n                        </li>\n                    </ul> -->\n\n                    <ul class=\"nav navbar-nav navbar-right\">\n                        <!-- <li *ngIf='isProfileDataShoW'> <a routerLink=\"profile\"><span class=\"glyphicon glyphicon-user\"></span> Profile</a></li> -->\n                        <li> <a routerLink=\"profile\"><span class=\"glyphicon glyphicon-user\"></span> {{userName || 'Profile'}}</a></li>\n                        <li><a href=\"login\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><span class=\"glyphicon glyphicon-log-in\"></span> Login / Sign Up <span class=\"caret\"></span></a>\n                            <ul class=\"dropdown-menu\">\n                                <li *ngIf =\"! isAlreadyLogIn\"><a routerLink=\"/login\">Login</a></li>\n                                <!-- <li *ngIf =\"isAlreadyLogIn\"><a routerLink=\"/logout\">Log Out</a></li> -->\n                                <li *ngIf =\"isAlreadyLogIn\"><a (click)=\"logOutUser()\" >Log Out</a></li>\n                                <li><a routerLink=\"/singup\">Sign Up</a></li>\n                            </ul>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home-info.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home-info.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-package-info></app-package-info>\n\n\n\n<app-recent-trip-info></app-recent-trip-info> -->\n\n<!-- <app-search-menu></app-search-menu> -->\n\n\n<app-summary-info></app-summary-info> \n\n\n<!-- <app-summary-view-info></app-summary-view-info> -->\n\n\n<!-- \n\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-sm-2\" style=\"margin-bottom: 2em;\">\n            <h5 class=\"heading-grid\">Top Holiday Destinations</h5>\n            <a class=\"rounde-button\" target=\"_blank\" href=\"/tour-packages/munnar\">Manali</a>\n            <a class=\"rounde-button\" target=\"_blank\" href=\"/tour-packages/munnar\">Kerala</a>\n            <a class=\"rounde-button\" target=\"_blank\" href=\"/tour-packages/munnar\">Gantok</a>\n            <a class=\"rounde-button\" target=\"_blank\" href=\"/tour-packages/munnar\">Munnar</a>\n        </div>\n        <div class=\"col-sm-8\">\n\n\n\n            <div class =\"summery-view\" >\n                <div class=\"row outlet-view\" style=\"position:relative;\">\n                    <div class=\"col-sm-4\">\n                        <img alt=\"Astounding Dubai Honeymoon Package\" src=\"https://img.traveltriangle.com/attachments/pictures/856904/original/Goa-beach-fun.jpg\">\n                    </div>\n                    <div class=\"col-sm-5\">\n                        <h4 class=\"fw9 \">Fun ‘n’ Frolic Goa Family Holiday Package</h4>\n                        \n                        <span class=\"day-view-summery\">\n                            5 Days &amp; 4 Nights | 4 Cities\n                        </span>\n                        <div> \n                            <span class=\"fs14 agency-color\"> Anup TravelAgency </span>\n                            <app-rating [rating]='statRatingValue'></app-rating>\n                        </div>\n                        <div class=\"\" >\n                            <h5 class=\"fw6\">DESTINATIONS</h5>\n                            <div>\n                                Delhi | Mumbai | Goa | Panaji\n                            </div>\n                        </div>\n                        \n                        <div class=\"\" >\n                            <h5 class=\"fw6\">INCLUSIONS</h5>\n                            <span *ngFor=\"let product of iconList\">\n                                <span class=\"click-to-top\">\n                                    <img  style=\"max-width: 30px;\" title=\"Test title\" src={{product}} /> &nbsp;\n                                </span>\n                            </span>\n                        </div>\n                        \n                    </div>\n                    <div class=\"col-sm-3\">\n                        <div class=\"rounde-btn-type\">HONEYMOON SPECIAL</div>\n                        <h5 style=\"margin-top: 4px; margin-bottom: 3px;\">Starting from: </h5>\n                        \n                        <span class=\"green f20 fw8\" >\n                            {{100 | currency:'INR':'symbol':'2.2-2'}}\n                        </span>\n                        <span class=\"f20 fw8\" >\n                          <del>  {{120 | currency:'INR':'symbol':'2.2-2'}}</del>\n                        </span>\n                        <div class=\"fs12\"> \n                            Per person on twin sharing basis\n                        </div>\n                        <input class=\"details-button\" type=\"button\" value=\"View Details\" [routerLink]=\"['/product', 10]\" >\n                        <input class=\"submit-info\" type=\"submit\" value=\"Book Info\" >  \n                    </div>\n                </div>\n            </div>\n\n\n            <div class =\"summery-view\" >\n                <div class=\"row outlet-view\" style=\"position:relative;\">\n                    <div class=\"col-sm-4\">\n                        <img alt=\"\" src=\"https://img.traveltriangle.com/attachments/pictures/888638/original/cover9.jpg\">\n                    </div>\n                    <div class=\"col-sm-5\">\n                        <h4 class=\"fw8\">Astounding Dubai Honeymoon Package</h4>\n                        <span class=\"day-view-summery\">\n                            6 Days &amp; 5 Nights | 4 Cities\n                        </span>\n                        <div class=\"\" >\n                            <h5 class=\"fw6\">DESTINATIONS</h5>\n                            <div>\n                                Delhi | Mumbai | Goa | Panaji\n                            </div>\n                        </div>\n                        <div class=\"\" >\n                            <h5 class=\"fw6\">INCLUSIONS</h5>\n                            <span *ngFor=\"let product of iconList\">\n                                <img style=\"max-width: 30px;\" src={{product}} /> &nbsp;\n                            </span>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-3\">\n                        <div class=\"rounde-btn-type\">Family</div>\n                        <h5>Starting from: </h5>\n                        \n                        <span class=\"green f20 fw8\" >\n                            {{100 | currency:'INR':'symbol':'2.2-2'}}\n                        </span>\n                        <span class=\"f20 fw8\" >\n                          <del>  {{120 | currency:'INR':'symbol':'2.2-2'}}</del>\n                        </span>\n                        \n                        <input class=\"details-button\" type=\"button\" value=\"View Details\" routerLink=\"/details\" >\n                        <input class=\"submit-info\" type=\"submit\" value=\"Book Info\"> \n                    </div>\n                </div>\n            </div>\n\n\n\n\n\n            <div class =\"summery-view\" >\n                <div class=\"row outlet-view\" style=\"position:relative;\">\n                    <div class=\"col-sm-4\">\n                        <img alt=\"\" src=\"https://img.traveltriangle.com/attachments/pictures/871847/original/A_temple_in_Bali.jpg\">\n                    </div>\n                    <div class=\"col-sm-5\">\n                        <h4 class=\"fw8\">Spectacular Bali Honeymoon Package</h4>\n                        <span class=\"day-view-summery\">\n                            5 Days &amp; 4 Nights | 4 Cities\n                        </span>\n                        <div class=\"\" >\n                            <h5 class=\"fw6\">DESTINATIONS</h5>\n                            <div>\n                                Delhi | Mumbai | Goa | Panaji\n                            </div>\n                        </div>\n                        <div class=\"\" >\n                            <h5 class=\"fw6\">INCLUSIONS</h5>\n                            <span *ngFor=\"let product of iconList\">\n                                <img style=\"max-width: 30px;\" src={{product}} /> &nbsp;\n                            </span>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-3\">\n                        <div class=\"rounde-btn-type\">Family</div>\n                        <h5>Starting from: </h5>\n                        \n                        <span class=\"green f20 fw8\" >\n                            {{100 | currency:'INR':'symbol':'2.2-2'}}\n                        </span>\n                        <span class=\"f20 fw8\" >\n                          <del>  {{120 | currency:'INR':'symbol':'2.2-2'}}</del>\n                        </span>\n                        \n                        <input class=\"details-button\" type=\"button\" value=\"Add to cart\" routerLink=\"/details\" >\n                        <input class=\"submit-info\" type=\"submit\" value=\"Book Now\" > \n                    </div>\n                </div>\n            </div>\n\n\n\n            <div class =\"summery-view\" >\n                <div class=\"row outlet-view\" style=\"position:relative;\">\n                    <div class=\"col-sm-4\">\n                        <img alt=\"Astounding Dubai Honeymoon Package\" src=\"https://img.traveltriangle.com/attachments/pictures/856955/original/A-Goa-beach-Holiday.jpg\">\n                    </div>\n                    <div class=\"col-sm-5\">\n                        <h4 class=\"fw8\">Romantic Goa Honeymoon Package: Dolphin Spotting & Beach Walks</h4>\n                        <span class=\"day-view-summery\">\n                            4 Days &amp; 3 Nights | 3 Cities\n                        </span>\n                        <div class=\"\" >\n                            <h5 class=\"fw6\">DESTINATIONS</h5>\n                            <div>\n                                Delhi | Mumbai | Goa \n                            </div>\n                        </div>\n                        <div class=\"\" >\n                            <h5 class=\"fw6\">INCLUSIONS</h5>\n                            <span *ngFor=\"let product of iconList\">\n                                <img style=\"max-width: 30px;\" src={{product}} /> &nbsp;\n                            </span>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-3\">\n                        <div class=\"rounde-btn-type\">Family</div>\n                        <h5>Starting from: </h5>\n                       \n                        <span class=\"green f20 fw8\" >\n                            {{100 | currency:'INR':'symbol':'2.2-2'}}\n                        </span>\n                        <span class=\"f20 fw8\" >\n                          <del>  {{120 | currency:'INR':'symbol':'2.2-2'}}</del>\n                        </span>\n                        <div> \n                            per person on twin sharing basis\n                        </div>\n                        <input class=\"details-button\" type=\"button\" value=\"View Details\" routerLink=\"/details\">\n                        <input class=\"submit-info\" type=\"submit\" value=\"Book Info\" > \n                    </div>\n                </div>\n            </div>\n\n      \n                <div class=\"row outlet-view\">\n                    <div class=\"col-sm-4\">\n                        <img alt=\"Astounding Dubai Honeymoon Package\" src=\"https://img.traveltriangle.com/attachments/pictures/888638/original/cover9.jpg\">\n                    </div>\n                    <div class=\"col-sm-4\">\n                         <h5>Title description, Sep 2, 2017</h5>\n                    </div>\n                    <div class=\"col-sm-4\">\n                        <p>Some text..</p>\n                        <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>\n                    </div>\n                </div>\n            </div> \n\n\n\n\n        </div>\n\n        <div class=\"col-sm-2\">\n\n            Add sence\n\n        </div>\n\n    </div>\n</div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login-info/login-info.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login-info/login-info.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\"  *ngIf=\"isErrorMessage\">\n    <div class=\"success-message-position\" >\n      <p class=\"alert alert-danger\">\n          <strong>Invalid Username or Password</strong>\n      </p>\n    </div>\n</div>\n\n<div class=\"row\"  *ngIf=\"isSuccessMessage\">\n    <div class=\"success-message-position\" >\n      <p class=\"alert alert-success\" >\n          <strong>Succcess fully login ..</strong>\n      </p>\n    </div>\n</div>\n\n<div class=\"container\">\n    <div id=\"loginbox\" style=\"margin-top:50px;\" class=\"mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2\">\n        <div class=\"panel panel-info\">\n            <div class=\"panel-heading\">\n                <div class=\"panel-title\">Sign In</div>\n                <div style=\"float:right; font-size: 80%; position: relative; top:-10px\"><a href=\"#\">Forgot password?</a>\n                </div>\n            </div>\n            <div style=\"padding-top:30px\" class=\"panel-body\">\n                <div style=\"display:none\" id=\"login-alert\" class=\"alert alert-danger col-sm-12\"></div>\n                <!-- <form id=\"loginform\" class=\"form-horizontal\" role=\"form\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\"> -->\n                <form class=\"form-horizontal\" *ngIf=\"loginForm\"  [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n                    <div style=\"margin-bottom: 25px\" class=\"input-group\">\n                        <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n                        <input id=\"login-username\" type=\"text\" class=\"form-control\" formControlName=\"username\" name=\"username\" value=\"\"\n                            placeholder=\"username or email\">\n                    </div>\n\n                    <div style=\"margin-bottom: 25px\" class=\"input-group\">\n                        <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n                        <input id=\"login-password\" type=\"password\" class=\"form-control\" formControlName=\"password\" name=\"password\"\n                            placeholder=\"password\">\n                    </div>\n\n                    <div class=\"input-group\">\n                        <div class=\"checkbox\">\n                            <label>\n                                <input id=\"login-remember\" type=\"checkbox\" name=\"remember\" value=\"1\"> Remember me\n                            </label>\n                        </div>\n                    </div>\n\n\n                    <div style=\"margin-top:10px\" class=\"form-group\">\n                        <!-- Button -->\n\n                        <div class=\"col-sm-12 controls\">\n                            <button id=\"btn-login\" class=\"btn btn-success\" [disabled]=\"loading\"  > Login <i *ngIf='loading' class=\"fa fa-spinner fa-spin\"></i> </button>\n                            <!-- <a id=\"btn-login\" href=\"#\" class=\"btn btn-success\">Login </a> -->\n                            <!-- <a id=\"btn-fblogin\" href=\"#\" class=\"btn btn-primary\">Login with Facebook</a> -->\n\n                        </div>\n                    </div>\n\n\n                    <div class=\"form-group\">\n                        <div class=\"col-md-12 control\">\n                            <div style=\"border-top: 1px solid#888; padding-top:15px; font-size:85%\">\n                                Don't have an account!\n                                <a routerLink=\"/singup\">\n                                    Sign Up Here\n                                </a>\n                                <!-- <a href=\"#\" onClick=\"$('#loginbox').hide(); $('#signupbox').show()\">\n                                    Sign Up Here\n                                </a> -->\n                            </div>\n                        </div>\n                    </div>\n                </form>\n\n\n\n            </div>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login-info/logout-info.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login-info/logout-info.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"animated-header\">\n    <div class=\"loading\">Waiting for \"load\" event...</div>\n    <div class=\"earth\">\n      <img src={{earthIng}}>\n    </div>\n    <div class=\"moon\">\n      <img src={{moonIng}}>\n    </div>\n</div>\n\n<div>Aru you want Log Out</div>\n<button (click) =\"logoutUser()\" >Logout </button>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/not-found/not-found.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/not-found/not-found.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id = \"color\">\n<div class=\"container\" >\n\n  <div class=\"error\">\n    <p class=\"p\">4</p>\n    <span class=\"dracula\">\n      <div class=\"con\">\n        <div class=\"hair\"></div>\n        <div class=\"hair-r\"></div>\n        <div class=\"head\"></div>\n        <div class=\"eye\"></div>\n        <div class=\"eye eye-r\"></div>\n        <div class=\"mouth\"></div>\n        <div class=\"blod\"></div>\n        <div class=\"blod blod2\"></div>\n      </div>\n    </span>\n    <p class=\"p\">4</p>\n\n    <div class=\"page-ms\">\n      <p class=\"page-msg\"> Oops, the page you're looking for Disappeared </p>\n      <a href=\"/\">\n        <button class=\"go-back\">Go Back</button>\n      </a>\n    </div>\n  </div>\n</div>\n\n<iframe style=\"width:0;height:0;border:0; border:none;\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\"\n  src=\"https://instaud.io/_/2Vvu.mp3\"></iframe>\n\n\n</div> "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/package-info/package-info.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/package-info/package-info.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"packages\" id=\"packages\">\n\t<div class=\"container\">\n\t\t<h3 class=\"heading header-font\">Popular Packages</h3>\n\t\t<div class=\"popular_packages_grids\">\n\t\t\t<div class=\"package_top_grid\">\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"packages_left\">\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"packages_right\">\n\t\t\t\t\t\t<h3>Eiffel Tower</h3>\n\t\t\t\t\t\t<h4>Starts from ₹ 80000 </h4>\n\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, con sectetur adipiscing elit. Proin sed ligula \n\t\t\t\t\t\tac metus finibus hendrerit sed at libero. Praesent reiciendis voluptatibus maiores alias.</p>\n\t\t\t\t\t\t<a href=\"#\">Read More <span class=\"fa fa-long-arrow-right\"></span></a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"package_middle_grid\">\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"packages_right packages_right1\">\n\t\t\t\t\t\t<h3>London Clock Tower</h3>\n\t\t\t\t\t\t<h4>Starts from ₹ 90000</h4>\n\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, con sectetur adipiscing elit. Proin sed ligula \n\t\t\t\t\t\tac metus finibus hendrerit sed at libero. Praesent reiciendis voluptatibus maiores alias.</p>\n\t\t\t\t\t\t<a href=\"#\">Read More <span class=\"fa fa-long-arrow-right\"></span></a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"packages_left1\">\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"package_bottom_grid\">\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"packages_left2\">\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"packages_right packages_right2\">\n\t\t\t\t\t\t<h3>Modern Museum Art</h3>\n\t\t\t\t\t\t<h4>Starts from₹ 85000</h4>\n\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, con sectetur adipiscing elit. Proin sed ligula \n\t\t\t\t\t\tac metus finibus hendrerit sed at libero. Praesent reiciendis voluptatibus maiores alias.</p>\n\t\t\t\t\t\t<a href=\"#\">Read More <span class=\"fa fa-long-arrow-right\"></span></a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\t\n</section>\t\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/product/details-page/details-page.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product/details-page/details-page.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-sm-2\" style=\"margin-bottom: 2em;\">\n            <h5 class=\"heading-grid\">Top Holiday Destinations</h5>\n            <a class=\"rounde-button\" target=\"_blank\" href=\"/tour-packages/munnar\">Manali</a>\n            <a class=\"rounde-button\" target=\"_blank\" href=\"/tour-packages/munnar\">Kerala</a>\n            <a class=\"rounde-button\" target=\"_blank\" href=\"/tour-packages/munnar\">Gantok</a>\n            <a class=\"rounde-button\" target=\"_blank\" href=\"/tour-packages/munnar\">Munnar</a>\n        </div>\n\n        <div class=\"col-sm-8\"> -->\n\n            <div *ngIf=\"loading\">\n                loading ...\n                <div class=\"loader\"></div> \n            </div>\n\n            <div class=\"mb2 outlet-view\" *ngIf=\"! loading\">\n\n                <div class=\"mb1\">\n                    <span class=\"fw9 fs19\"> {{packageDetails.packageName}}\n                        <!-- Fun ‘n’ Frolic Goa Family Holiday Package -->\n                    </span>\n                    <span class=\"day-view\">\n                        {{packageDetails.noOfDays}} Days &amp; {{packageDetails.noOfNights}} Nights | {{packageDetails.tripPlaces.length}} Cities\n                        <!-- 5 Days &amp; 4 Nights | 4 Cities -->\n                    </span>\n                </div>\n\n                <div>\n                    <!-- <img style=\"max-height: 450px;  width: 100%;\" alt=\"Astounding Dubai Honeymoon Package\"\n                        src=\"https://wallpaper-house.com/data/out/5/wallpaper2you_45998.jpg\"> -->\n                    <img style=\"max-height: 450px;  width: 100%;\" alt=\"smiley face\" src={{packageDetails.overviewImages[0]}} onerror=\"this.src='assets/images/alt/enjoy.jpg'\">\n                </div>\n\n                <!-- <div class=\"summery-view\" style=\"margin-top: 1em;\">\n                    <div class=\"header-lineData\">\n                        <div class=\"fs15 \"> Highlights </div>\n                        <div class=\"header-line\"></div>\n                        <div class=\"fw9\">\n                            <ul>\n                                <li>Cruise on the Backwaters/Lake</li>\n                                <li>Kalaripayattu Show</li>\n                                <li>Periyar Boat Ride</li>\n                                <li>Elephant Ride</li>\n                            </ul>\n                        </div>\n                    </div>\n                </div> -->\n\n                <div class=\"container summery-view1\" >\n\n                    <ul class=\"nav nav-tabs\">\n                        <li class=\"active\"><a data-toggle=\"tab\" href=\"#highlights\" class=\"fs15\"> Highlights</a></li>\n                        <li><a data-toggle=\"tab\" href=\"#overview\" class=\"fs15\">Overview</a></li>\n                    </ul>\n                    <div class=\"tab-content\">\n                        <div id=\"highlights\" class=\"tab-pane fade in active highlight\" >\n                          <ul>\n                            <li *ngFor=\"let data of (packageDetails.highlights || []) \">{{data}}</li>\n                        </ul>\n                        </div>\n                        <div id=\"overview\" class=\"tab-pane fade highlight\">\n                          <p *ngFor=\"let data of (packageDetails.overview || []) \" >{{data}}</p>\n                        </div>\n                    </div>\n                   \n                </div>\n\n                <div *ngFor=\"let dayWData of dayWiseList\">\n                    <div class=\"half-circle\">\n                        <span class=\"fs15 day-name\"> Day</span>\n                        <span class=\"day-value\">{{dayWData.dayNo}}</span>\n                    </div>\n                    <div class=\"summery-view\" style=\"margin-top: 1em;\">\n                        <div class=\"row outlet-view\">\n                            <div class=\"col-sm-4\">\n                                <!-- <img style=\"width:100%\" alt=\"Astounding Dubai Honeymoon Package\"\n                                    src=\"https://img.traveltriangle.com/attachments/pictures/856904/original/Goa-beach-fun.jpg\"> -->\n                                    <img style=\"width: 100%;\" alt=\"smiley face\" src={{dayWData.images[0]}} onerror=\"this.src='assets/images/alt/enjoy.jpg'\">\n                            </div>\n                            <div class=\"col-sm-8\">\n                                <span class=\"rounde-btn-type\" *ngFor=\"let placeNm of dayWData.place\">{{placeNm}}</span>\n                                \n                                <div class=\"header-line\"></div>\n                                <div *ngFor=\"let dayInfo of dayWData.infoData\">\n                                    <h4>{{dayInfo.heading}}</h4>\n                                    <div class=\"fs12\">\n                                        {{dayInfo.description}}\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- <div>\n                    <div class=\"half-circle\">\n                        <span class=\"fs15 day-name\"> Day</span>\n                        <span class=\"day-value\">2</span>\n                    </div>\n                    <div class=\"summery-view\" style=\"margin-top: 1em;\">\n                        <div class=\"row outlet-view\">\n                            <div class=\"col-sm-4\">\n                                <img style=\"width:100%\" alt=\"Astounding Dubai Honeymoon Package\"\n                                    src=\"https://img.traveltriangle.com/attachments/pictures/856940/original/Goa-holiday-tour.jpg\">\n                            </div>\n                            <div class=\"col-sm-8\">\n                                <span class=\"rounde-btn-type\">Dolphin Spotting</span>\n                                <span class=\"rounde-btn-type\">Calangute Beach</span>\n                                <div class=\"header-line\"></div>\n                                <div>\n                                    <h4>This day, embark on a North Goa sightseeing tour and experience the best part of your Goa holiday</h4>\n                                    <div class=\"fs12\">\n                                        Wake up early and head out together for a fun-filled dolphin sightseeing tour. Watch dolphins dancing in the sea waves. Come back to the hotel and have breakfast. Later, set out for North Goa sightseeing tour. Explore Coco Beach, Calangute Annexe, Calangute Beach, Baga Beach, and Anjuna Beach with this Goa tour package for couples.\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div> -->\n\n\n            </div>\n\n        <!-- </div>\n\n\n        <div class=\"col-sm-2\">\n            <div class='card-footer'>\n                <button class='btn btn-outline-secondary'\n                        (click)='onBack()'\n                        style='width:80px'>\n                  <i class='fa fa-chevron-left'></i> Back\n                </button>\n              </div>\n        </div>\n    </div>\n</div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/product/edit-package/edit-package.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product/edit-package/edit-package.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"isSuccesFullSave\">\n    <div class=\"success-message-position\">\n        <p class=\"alert alert-success\">\n            <strong>Data Save Successfuly.....</strong>\n        </p>\n    </div>\n</div>\n\n<div class=\"display-4\" style=\"margin: 1em;\">\n    Product Modification dash board ....\n</div>\n\n<div *ngIf=\"loading\">\n    loading ...\n    <div class=\"loader\"></div> \n</div>\n\n<div *ngIf=\"! loading\">\n\n<!--////////////////// Summery View ///////////////////-->\n\n<div class=\"tab-content\">\n    <div class=\"heading-text\"> Summery View</div>\n    <div id=\"summeryV\" >\n        <div class=\"summery-view\" style=\"min-height: 230px; padding: 10px;\">\n            <div class=\"row outlet-view\" style=\"position:relative;\">\n                <div class=\"col-sm-4\">\n                    <img [src]='urlData' width=\"97%\">\n                    <br />\n                    <label class=\"custom-file-upload\">\n                        <input type=\"file\" (change)=\"onSelectFile($event)\" />\n                        <i class=\"fa fa-cloud-upload\"></i> Upload Image\n                        <i *ngIf='isSummeryImageLoading' class=\"fa fa-spinner fa-spin\"></i>\n                    </label>\n\n                </div>\n                <div class=\"col-sm-5\">\n                    <input class=\"text-box form-control\" [(ngModel)]=\"packageName\" type=\"text\"\n                        title=\"Please provide pakage name\" placeholder=\"Please provide package name\">\n\n                    <div class=\"day-view\" style=\"margin-top:8px; margin-left:0px;\">\n                        <input type=\"number\" [(ngModel)]=\"noOfDays\" placeholder=\" No of Days\" class=\"wid35\" min=\"0\">\n                        Days <input type=\"number\" [(ngModel)]=\"noOfNights\" class=\"wid35\" placeholder=\" No of Nights\"\n                            min=\"0\">\n                        Nights\n                    </div>\n                    <div>\n                        <span class=\"fs14 agency-color\"> {{agencyName}} </span>\n                        <!-- <app-rating [rating]='product.agencyReview' ></app-rating>  -->\n                    </div>\n                    <div class=\"\">\n                        <h5 class=\"fw6\">DESTINATIONS</h5>\n                        <!-- <input class=\"text-box form-control\" type=\"text\"\n                            placeholder=\"Please provide City Name , separator for diffrent city\"\n                            title=\"Please provide City Name , separator use for diffrent city\"> -->\n\n                        <span class=\"rounde-btn-city\" *ngFor=\"let city of tripPlaces\">{{city}}</span>\n                        <input class=\"text-box form-control details-input-day\" type=\"text\" [(ngModel)]=\"placeName\"\n                            title=\"Please provide detination city name\" placeholder=\"Please provide place Name\">\n                        <button (click)=\"addCityName(placeName)\" class=\"add-button\">Add City</button>\n                    </div>\n\n                    <div class=\"\">\n                        <h5 class=\"fw6\">INCLUSIONS</h5>\n                        <span *ngFor=\"let amenitie of amenityList; let ind = index\">\n                            <span class=\"click-to-top\">\n                                <img style=\"max-width: 30px; max-height: 37px;\" src={{amenitie.value}}\n                                    title={{amenitie.display}} />\n                                <input type=\"checkbox\" name=\"amenitie.name\" value=\"amenitie.name\"\n                                    [(ngModel)]=\"aminitiesCheck[ind]\" />\n                            </span>&nbsp;&nbsp;&nbsp; &nbsp;\n                        </span>\n\n                    </div>\n\n                </div>\n                <div class=\"col-sm-3\">\n\n                    <span *ngFor=\"let package of packageType; let ind = index\">\n                        <span class=\"click-to-top\">\n                            <span class=\"rounde-btn-type\">{{package}}</span>\n                            <input type=\"checkbox\" name=\"amenitie.name\" value=\"package\"\n                                [(ngModel)]=\"packageTypeSelcted[ind]\" />\n                        </span> &nbsp;&nbsp;&nbsp; &nbsp;\n                    </span>\n\n                    <h5 style=\"margin-top: 4px; margin-bottom: 3px;\">Starting from: </h5>\n                    <span class=\"green f20 fw8\">\n                        Ex. &nbsp; {{'1000' | currency: 'INR' :'symbol':'2.2-2'}}\n                        <input class=\"text-box form-control\" type=\"number\"\n                            title=\"Please provide price to be taken from user\"\n                            placeholder=\"Please provide Display price\" [(ngModel)]=\"offerPrice\">\n                        <!-- {{'product.offerPrice' | currency: product.currency :'symbol':'2.2-2'}} -->\n                    </span>\n                    <span class=\"f20 fw8\">\n                        Ex. &nbsp; <del> {{'1200' | currency: 'INR':'symbol':'2.2-2'}}</del>\n                        <input class=\"text-box form-control\" type=\"number\"\n                            title=\"Please provide original price it will be show in cross icon\"\n                            placeholder=\"Please provide original Price\" [(ngModel)]=\"originalPrice\">\n                        <!-- <del>  {{product.originalPrice | currency: product.currency:'symbol':'2.2-2'}}</del> -->\n                    </span>\n                    <div class=\"fs12\">\n                        Per person on twin sharing basis\n                    </div>\n                    <!-- Trigger the modal with a button -->\n                    <!-- <button type=\"button\" class=\"btn btn-info btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\"\n                        (click)=\"setPupUpdata()\" style=\"padding: 3px 15px; margin-top: 4px;\">Preview Page</button> -->\n<!-- \n                    <button class=\"details-button\" (click)=\"saveSummeryView()\" [disabled]=\"isSummeryVSaveLoading\">Save\n                        Summery View <i *ngIf='isSummeryVSaveLoading' class=\"fa fa-spinner fa-spin\"></i></button> -->\n                    <!-- <input class=\"details-button\" type=\"button\" (click)=\"saveSummeryView()\" value=\"Save Summery View\"> -->\n\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n\n\n    <!-- Details Page view  Section -->\n    <div id=\"detailsV\" >\n            <div class=\"heading-text\"> Details View</div>\n        <div  class=\"details-view\" style=\"padding: 10px;\">\n\n\n            <div class=\"mb1\">\n                <span class=\"fw9 fs19\"> {{packageName}}\n                    <!-- Fun ‘n’ Frolic Goa Family Holiday Package -->\n                </span>\n                <span class=\"day-view\">\n                    {{noOfDays}} Days &amp; {{noOfNights}} Nights | {{tripPlaces.length}} Cities\n                    <!-- 5 Days &amp; 4 Nights | 4 Cities -->\n                </span>\n            </div>\n\n            <div>\n                <img [src]='detailsURLData' width=\"80%\" height=\"400px\">\n                <br />\n                <label class=\"custom-file-upload\"\n                    title=\"If you want to change the image diffrent from summery image then only upload\">\n                    <input type=\"file\" (change)=\"onSelectDetailsFile($event)\" />\n                    <i class=\"fa fa-cloud-upload\"></i> Upload Image\n                    <i *ngIf='isDetaisImageLoading' class=\"fa fa-spinner fa-spin\"></i>\n                </label>\n            </div>\n\n            <!-- <div class=\"container summery-view1\"> -->\n            <div class=\"tab-content\" style=\"margin-top: 20px; margin-bottom: 20px;\">\n                <div>\n                    <label for=\"usr\">Highlights Info</label>\n                    <textarea style=\"height:120px\" class=\"text-box form-control\" type=\"text\" [(ngModel)]=\"highlights\"\n                        title=\"Please provide pakage name\" placeholder=\"Please provide highlights info...\"></textarea>\n                </div>\n                <br />\n                <div>\n                    <label for=\"usr\">Overview Info</label>\n                    <textarea style=\"height:120px\" class=\"text-box form-control\" type=\"text\" [(ngModel)]=\"overview\"\n                        title=\"Please provide pakage name\" placeholder=\"Please provide overview info...\"></textarea>\n                </div>\n            </div>\n            <!-- </div> -->\n            <div *ngFor=\"let dayWData of dayWiseList; let in=index\">\n                <div class=\"half-circle\">\n                    <span class=\"fs15 day-name\"> Day</span>\n                    <!-- [(ngModel)]=\"dayWiseList[in].dayNo\" -->\n                    <span class=\"day-value\">{{in +1}}</span>\n                </div>\n                <div class=\"summery-view\" style=\"margin-top: 1em; padding: 1em;\">\n                    <div class=\"row outlet-view-details\">\n                        <div class=\"col-sm-4\">\n                            <!-- <img style=\"width: 100%;\" alt=\"smiley face\" src={{dayWData.images[0]}}\n                                        onerror=\"this.src='assets/images/alt/enjoy.jpg'\"> -->\n                            <img [src]='dayWData.images[0]' onerror=\"this.src='assets/images/icon/uploadImage.jpg'\"\n                                alt=\"smiley face\" width=\"100%\">\n                            <br />\n                            <label class=\"custom-file-upload\">\n                                <input type=\"file\" (change)=\"onDaySelectFile($event, in)\" />\n                                <i class=\"fa fa-cloud-upload\"></i> Upload Image\n                                <i *ngIf='ismageLoading[in]' class=\"fa fa-spinner fa-spin\"></i>\n                            </label>\n                        </div>\n                        <div class=\"col-sm-8\">\n\n                            <span class=\"rounde-btn-type\" *ngFor=\"let placeNm of dayWData.place\">{{placeNm}}</span>\n                            <input class=\"text-box form-control details-input-day\" type=\"text\"\n                                [(ngModel)]=\"placeNameArr[in]\" title=\"Please provide place name to be visited this day\"\n                                placeholder=\"Please provide place Name\">\n                            <button (click)=\"addPlaceName(placeNameArr[in], in)\" class=\"add-button\">Add Place</button>\n\n                            <div class=\"header-line\"></div>\n                            <div *ngFor=\"let dayInfo of dayWData.infoData\">\n                                <h4><b>{{dayInfo.heading}}</b></h4>\n                                <div class=\"fs12\">\n                                    {{dayInfo.description}}\n                                </div>\n                            </div>\n\n                            <div style=\"margin-top: 4em;\">\n                                <div>\n                                    <label for=\"usr\"> Add Hading Info</label>\n                                    <textarea style=\"height:40px\" class=\"text-box form-control\" type=\"text\"\n                                        [(ngModel)]=\"headingArr[in]\" title=\"Please provide pakage name\"\n                                        placeholder=\"Please provide heading info...\" name=\"heading\"></textarea>\n                                </div>\n                                <br />\n                                <div>\n                                    <label for=\"usr\"> Add Description</label>\n                                    <textarea style=\"height:80px\" class=\"text-box form-control\" type=\"text\"\n                                        [(ngModel)]=\"descriptionArr[in]\" title=\"Please provide pakage name\"\n                                        placeholder=\"Please provide Description info...\"></textarea>\n                                </div>\n                                <button class=\"details-button buttom-right\" type=\"submit\"\n                                    (click)=\"addDetailsInfo(headingArr[in] , descriptionArr[in], in)\">Add Details\n                                    info</button>\n                            </div>\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div>\n                <button (click)=\"add()\" class=\"add-button\" style=\"float: right;\">Add Number of Days\n                    ({{noofDay +1 }})</button>\n                <!-- {{dayWiseList | json}} -->\n                <button (click)=\"saveSummeryView()\" class=\"btn btn-success btn-mm\" style=\"float: right;\"\n                    [disabled]=\"isSummeryVSaveLoading\">Save Data<i *ngIf='isSummeryVSaveLoading'\n                        class=\"fa fa-spinner fa-spin\"></i></button>\n                <!-- <button (click)=\"saveSummeryView()\" class=\"btn btn-success btn-mm\" style=\"float: right;\" > Save Detais View</button> -->\n            </div>\n\n        </div>\n    </div>\n\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/product/summary-info/summary-info.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product/summary-info/summary-info.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-sm-2\" style=\"margin-bottom: 2em;\">\n            <h5 class=\"heading-grid\">Top Holiday Destinations</h5>\n            <a class=\"rounde-button\" target=\"_blank\" href=\"/tour-packages/munnar\">Manali</a>\n            <a class=\"rounde-button\" target=\"_blank\" href=\"/tour-packages/munnar\">Kerala</a>\n            <a class=\"rounde-button\" target=\"_blank\" href=\"/tour-packages/munnar\">Gantok</a>\n            <a class=\"rounde-button\" target=\"_blank\" href=\"/tour-packages/munnar\">Munnar</a>\n        </div>\n        <div class=\"col-sm-8\"> -->\n\n\n            <section class=\"search-sec mb1\">\n                \n                    <form action=\"#\" method=\"post\" novalidate=\"novalidate\" #myform=\"ngForm\">\n                        <div class=\"row\">\n                            <div class=\"col-lg-12\">\n                                <div class=\"row\">\n                                    <div class=\"col-lg-4 col-md-4 col-sm-8 p-0\">\n                                        <input type=\"text\" class=\"form-control search-slt\" #destinationsName placeholder=\"Enter Destinations City\"  [(ngModel)]='destinationsName1' name=\"destinationsName\" >\n                                    </div>\n                                    \n                                    <div class=\"col-lg-4 col-md-4 col-sm-8 p-0\">\n                                        <input type=\"date\" class=\"form-control search-slt\" #dateRange>\n                                    </div>\n                                    <div class=\"col-lg-4 col-md-4 col-sm-8 p-0\" *ngIf=\"!buttonLoader\">\n                                        <button type=\"button\" class=\"btn btn-danger wrn-btn\" (click)=\"getSummeryData(destinationsName.value, dateRange.value)\" style=\"padding: 0px;\">Search</button>\n                                    </div>\n                                    <div class=\"col-lg-4 col-md-4 col-sm-8 p-0\" *ngIf=\"buttonLoader\">\n                                        <button class=\"btn btn-danger wrn-btn\" type=\"button\" disabled>\n                                            <span class=\"spinner-border spinner-border-sm\"></span>\n                                            Loading...\n                                        </button>\t\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n\n            </section>\n            \n\n\n            <!-- <div *ngIf=\"loading\">\n                loading ...\n                <div class=\"loader\"></div> \n            </div> -->\n            <div *ngIf=\"loading\">\n                loading ...\n            </div>\n            <app-loading-info *ngIf=\"loading\"> loading ...</app-loading-info>\n\n            <app-summery-view [productArr] = productArr ></app-summery-view>\n            \n \n        <!-- </div>\n\n        <div class=\"col-sm-2\">\n\n            Add sence\n\n        </div>\n\n    </div>\n</div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/product/tour-packages/tour-packages.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product/tour-packages/tour-packages.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<app-summery-view [productArr] = productArr ></app-summery-view>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/profile-info/profile-info.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile-info/profile-info.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\" style=\"min-height: 566px;\">\n    <div class=\"row my-2\">\n        <div class=\"col-lg-4 order-lg-1 text-center\">\n            <img [src]='imagePath' width=\"80%\" class=\"mx-auto img-fluid img-circle d-block\" alt=\"Smiley face\">\n                        <br />\n            <label class=\"custom-file-upload\">\n                <input type=\"file\" (change)=\"onSelectFile($event)\" />\n                <i class=\"fa fa-cloud-upload\"></i> Upload Image\n            </label>\n            <!-- <img src={{imagePath}} class=\"mx-auto img-fluid img-circle d-block\" alt=\"Smiley face\">\n            <h6 class=\"mt-2\">Upload a different photo</h6>\n            <label class=\"custom-file\">\n                <input type=\"file\" id=\"file\" class=\"custom-file-input\">\n                <span class=\"custom-file-control\">Choose file</span>\n            </label> -->\n        </div>\n        <div class=\"col-lg-8 order-lg-2\">\n            <ul class=\"nav nav-tabs\">\n                <li class=\"nav-item\">\n                    <a href=\"\" data-target=\"#profile\" data-toggle=\"tab\" class=\"nav-link active\">Profile</a>\n                </li>\n                <!-- <li class=\"nav-item\">\n                    <a href=\"\" data-target=\"#messages\" data-toggle=\"tab\" class=\"nav-link\">Messages</a>\n                </li> --> \n                <li class=\"nav-item\">\n                    <a href=\"\" data-target=\"#edit\" data-toggle=\"tab\" class=\"nav-link\">Edit</a>\n                </li>\n            </ul>\n            <div class=\"tab-content py-4\">\n                <div class=\"tab-pane active\" id=\"profile\">\n                    <h5 class=\"mb-3\">User Profile</h5>\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <h5>Name</h5>\n                            <p>\n                                {{profile.firstName +' '+ profile.lastName}}\n                                 \n                            </p>\n                            <h6>Email</h6>\n                            <p>\n                                {{profile.mailId}}\n                            </p>\n                            <h6>Company</h6>\n                            <p>\n                                {{profile.agencyName}}\n                            </p>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <h6>Recent badges</h6>\n                            <a href=\"#\" class=\"badge badge-dark badge-pill\">html5</a>\n                            <a href=\"#\" class=\"badge badge-dark badge-pill\">react</a>\n                            <a href=\"#\" class=\"badge badge-dark badge-pill\">codeply</a>\n                            <a href=\"#\" class=\"badge badge-dark badge-pill\">angularjs</a>\n                            <a href=\"#\" class=\"badge badge-dark badge-pill\">css3</a>\n                            <a href=\"#\" class=\"badge badge-dark badge-pill\">jquery</a>\n                            <a href=\"#\" class=\"badge badge-dark badge-pill\">bootstrap</a>\n                            <a href=\"#\" class=\"badge badge-dark badge-pill\">responsive-design</a>\n                            <hr>\n                            <span class=\"badge badge-primary\"><i class=\"fa fa-user\"></i> 900 Followers</span>\n                            <span class=\"badge badge-success\"><i class=\"fa fa-cog\"></i> 43 Forks</span>\n                            <span class=\"badge badge-danger\"><i class=\"fa fa-eye\"></i> 245 Views</span>\n                        </div>\n                        <!-- <div class=\"col-md-12\">\n                            <h5 class=\"mt-2\"><span class=\"fa fa-clock-o ion-clock float-right\"></span> Recent Activity</h5>\n                            <table class=\"table table-sm table-hover table-striped\">\n                                <tbody>                                    \n                                    <tr>\n                                        <td>\n                                            <strong>Abby</strong> joined ACME Project Team in <strong>`Collaboration`</strong>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>\n                                            <strong>Gary</strong> deleted My Board1 in <strong>`Discussions`</strong>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>\n                                            <strong>Kensington</strong> deleted MyBoard3 in <strong>`Discussions`</strong>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>\n                                            <strong>John</strong> deleted My Board1 in <strong>`Discussions`</strong>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>\n                                            <strong>Skell</strong> deleted his post Look at Why this is.. in <strong>`Discussions`</strong>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div> -->\n                    </div>\n                    <!--/row-->\n                </div>\n                <div class=\"tab-pane\" id=\"edit\">\n                    <form role=\"form\" style=\"margin-top: 1em;\">\n                        <div class=\"form-group row\">\n                            <label class=\"col-lg-3 col-form-label form-control-label\">First name</label>\n                            <div class=\"col-lg-9\">\n                                <input class=\"form-control\" type=\"text\" [(ngModel)]=\"profile.firstName\" name=\"firstName\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-lg-3 col-form-label form-control-label\">Last name</label>\n                            <div class=\"col-lg-9\">\n                                <input class=\"form-control\" [(ngModel)]=\"profile.lastName\"  type=\"text\" name=\"lastName\" >\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-lg-3 col-form-label form-control-label\">Email</label>\n                            <div class=\"col-lg-9\">\n                                <input class=\"form-control\" type=\"email\" name=\"email\" [(ngModel)]=\"profile.mailId\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-lg-3 col-form-label form-control-label\">Company</label>\n                            <div class=\"col-lg-9\">\n                                <input class=\"form-control\" type=\"text\" name=\"agencyName\" placeholder=\"Company\" [(ngModel)]=\"profile.agencyName\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-lg-3 col-form-label form-control-label\">Website</label>\n                            <div class=\"col-lg-9\">\n                                <input class=\"form-control\" type=\"url\" placeholder=\"Website\" name=\"website\" [(ngModel)]=\"profile.website\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-lg-3 col-form-label form-control-label\">Address</label>\n                            <div class=\"col-lg-9\">\n                                <input class=\"form-control\" type=\"text\" value=\"\" placeholder=\"Street\" name=\"Street\" [(ngModel)]=\"profile.address\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-lg-3 col-form-label form-control-label\"></label>\n                            <div class=\"col-lg-6\">\n                                <input class=\"form-control\" type=\"text\" name=\"website\" [(ngModel)]=\"profile.city\" placeholder=\"City\">\n                            </div>\n                            <div class=\"col-lg-3\">\n                                <input class=\"form-control\" type=\"text\" value=\"\" placeholder=\"State\" name=\"state\" [(ngModel)]=\"profile.state\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-lg-3 col-form-label form-control-label\">Time Zone</label>\n                            <div class=\"col-lg-9\">\n                                <select id=\"user_time_zone\" class=\"form-control\" size=\"0\">\n                                    <option value=\"Hawaii\">(GMT-10:00) Hawaii</option>\n                                    <option value=\"Alaska\">(GMT-09:00) Alaska</option>\n                                    <option value=\"Pacific Time (US &amp; Canada)\">(GMT-08:00) Pacific Time (US &amp; Canada)</option>\n                                    <option value=\"Arizona\">(GMT-07:00) Arizona</option>\n                                    <option value=\"Mountain Time (US &amp; Canada)\">(GMT-07:00) Mountain Time (US &amp; Canada)</option>\n                                    <option value=\"Central Time (US &amp; Canada)\" selected=\"selected\">(GMT-06:00) Central Time (US &amp; Canada)</option>\n                                    <option value=\"Eastern Time (US &amp; Canada)\">(GMT-05:00) Eastern Time (US &amp; Canada)</option>\n                                    <option value=\"Indiana (East)\">(GMT-05:00) Indiana (East)</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-lg-3 col-form-label form-control-label\">Username</label>\n                            <div class=\"col-lg-9\">\n                                <input class=\"form-control\" type=\"text\" name=\"userName\" [(ngModel)]=\"profile.userName\">\n                            </div>\n                        </div>\n                        <!-- <div class=\"form-group row\">\n                            <label class=\"col-lg-3 col-form-label form-control-label\">Password</label>\n                            <div class=\"col-lg-9\">\n                                <input class=\"form-control\" type=\"password\" value=\"11111122333\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-lg-3 col-form-label form-control-label\">Confirm password</label>\n                            <div class=\"col-lg-9\">\n                                <input class=\"form-control\" type=\"password\" value=\"11111122333\">\n                            </div>\n                        </div> -->\n                        <div class=\"form-group row\">\n                            <label class=\"col-lg-3 col-form-label form-control-label\"></label>\n                            <div class=\"col-lg-9\">\n                                <input type=\"reset\" class=\"btn btn-secondary\" value=\"Clear All\">\n                                <input type=\"button\" class=\"btn btn-primary\" value=\"Save Changes\">\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n        \n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/recent-trip-info/recent-trip-info.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recent-trip-info/recent-trip-info.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div id=\"dataInfo\">\n\t\t<h2>Information</h2>\n\t\t<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n\t\t\t<div class=\"carousel-inner\">\n\t\t\t\t<div class=\"carousel-item active\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t<img class=\"card-img-top img-fluid\" src=\"https://images.freeimages.com/images/large-previews/85a/daisy-s-1375598.jpg\" width=\"100\"\n\t\t\t\t\t\t\t\t height=\"100\" alt=\"Card image cap\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">Card 1</h4>\n\t\t\t\t\t\t\t\t\t<p class=\"card-text\">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little\n\t\t\t\t\t\t\t\t\t\tbit longer.</p>\n\t\t\t\t\t\t\t\t\t<p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t<img class=\"card-img-top img-fluid\" src=\"https://images.freeimages.com/images/large-previews/85a/daisy-s-1375598.jpg\" width=\"100\"\n\t\t\t\t\t\t\t\t height=\"100\" alt=\"Card image cap\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">Card 2</h4>\n\t\t\t\t\t\t\t\t\t<p class=\"card-text\">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little\n\t\t\t\t\t\t\t\t\t\tbit longer.</p>\n\t\t\t\t\t\t\t\t\t<p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t<img class=\"card-img-top img-fluid\" src=\"https://images.freeimages.com/images/large-previews/85a/daisy-s-1375598.jpg\" width=\"100\"\n\t\t\t\t\t\t\t\t height=\"100\" alt=\"Card image cap\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">Card 3</h4>\n\t\t\t\t\t\t\t\t\t<p class=\"card-text\">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little\n\t\t\t\t\t\t\t\t\t\tbit longer.</p>\n\t\t\t\t\t\t\t\t\t<p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"carousel-item\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t<img class=\"card-img-top img-fluid\" src=\"https://images.freeimages.com/images/large-previews/85a/daisy-s-1375598.jpg\" width=\"100\"\n\t\t\t\t\t\t\t\t height=\"100\" alt=\"Card image cap\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">Card 4</h4>\n\t\t\t\t\t\t\t\t\t<p class=\"card-text\">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little\n\t\t\t\t\t\t\t\t\t\tbit longer.</p>\n\t\t\t\t\t\t\t\t\t<p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t<img class=\"card-img-top img-fluid\" src=\"https://images.freeimages.com/images/large-previews/85a/daisy-s-1375598.jpg\" width=\"100\"\n\t\t\t\t\t\t\t\t height=\"100\" alt=\"Card image cap\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">Card 5</h4>\n\t\t\t\t\t\t\t\t\t<p class=\"card-text\">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little\n\t\t\t\t\t\t\t\t\t\tbit longer.</p>\n\t\t\t\t\t\t\t\t\t<p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t<img class=\"card-img-top img-fluid\" src=\"https://images.freeimages.com/images/large-previews/85a/daisy-s-1375598.jpg\" width=\"100\"\n\t\t\t\t\t\t\t\t height=\"100\" alt=\"Card image cap\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">Card 6</h4>\n\t\t\t\t\t\t\t\t\t<p class=\"card-text\">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little\n\t\t\t\t\t\t\t\t\t\tbit longer.</p>\n\t\t\t\t\t\t\t\t\t<p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"carousel-item\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t<img class=\"card-img-top img-fluid\" src=\"https://images.freeimages.com/images/large-previews/85a/daisy-s-1375598.jpg\" width=\"100\"\n\t\t\t\t\t\t\t\t height=\"100\" alt=\"Card image cap\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">Card 7</h4>\n\t\t\t\t\t\t\t\t\t<p class=\"card-text\">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little\n\t\t\t\t\t\t\t\t\t\tbit longer.</p>\n\t\t\t\t\t\t\t\t\t<p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<a class=\"carousel-control-prev\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\n\t\t\t\t<span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n\t\t\t\t<span class=\"sr-only\">Previous</span>\n\t\t\t</a>\n\t\t\t<a class=\"carousel-control-next\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\n\t\t\t\t<span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n\t\t\t\t<span class=\"sr-only\">Next</span>\n\t\t\t</a>\n\t\t</div>\n\n\t</div>\n\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/recent-trip/recent-trip.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recent-trip/recent-trip.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- Tour trips  -->\n<section class=\"special\" id=\"offers\">\n\t<div class=\"container\">\n\t<h3 class=\"heading\">Recent Trips</h3>\n\t\t<div class=\"agileits-special-grids\">\n\t\t\t<div id=\"owl-demo\" class=\"owl-carousel owl-theme\">\n\t\t\t\t<div class=\"item\">\n\t\t\t\t\t<div class=\"special-info\">\n\t\t\t\t\t\t<div class=\"special-info-top\">\n\t\t\t\t\t\t\t<div class=\"special-star\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<h4>Paris</h4>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"special-info-bottom\">\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li>65 <span>hotels</span></li>\n\t\t\t\t\t\t\t\t<li>25 <span>Cities</span></li>\n\t\t\t\t\t\t\t\t<li>46 <span>Tours</span></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<p>Vivamus pulvinar imperdiet lorem vel aliquam. Maecenas nunc tellus.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\t\n\t\t\t\t</div>\n\t\t\t\t<div class=\"item\">\n\t\t\t\t\t<div class=\"special-info special-info1\">\n\t\t\t\t\t\t<div class=\"special-info-top\">\n\t\t\t\t\t\t\t<div class=\"special-star\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star-half-o\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<h4>London</h4>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"special-info-bottom\">\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li>70 <span>hotels</span></li>\n\t\t\t\t\t\t\t\t<li>35 <span>Cities</span></li>\n\t\t\t\t\t\t\t\t<li>21 <span>Tours</span></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<p>Vivamus pulvinar imperdiet lorem vel aliquam. Maecenas nunc tellus.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"item\">\n\t\t\t\t\t<div class=\"special-info special-info2\">\n\t\t\t\t\t\t<div class=\"special-info-top\">\n\t\t\t\t\t\t\t<div class=\"special-star\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<h4>Maldives</h4>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"special-info-bottom\">\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li>30 <span>hotels</span></li>\n\t\t\t\t\t\t\t\t<li>10 <span>Cities</span></li>\n\t\t\t\t\t\t\t\t<li>05 <span>Tours</span></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<p>Vivamus pulvinar imperdiet lorem vel aliquam. Maecenas nunc tellus.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"item\">\n\t\t\t\t\t<div class=\"special-info\">\n\t\t\t\t\t\t<div class=\"special-info-top\">\n\t\t\t\t\t\t\t<div class=\"special-star\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star-half-o\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<h4>Bermuda</h4>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"special-info-bottom\">\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li>120 <span>hotels</span></li>\n\t\t\t\t\t\t\t\t<li>50 <span>Cities</span></li>\n\t\t\t\t\t\t\t\t<li>24 <span>Tours</span></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<p>Vivamus pulvinar imperdiet lorem vel aliquam. Maecenas nunc tellus.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\t\n\t\t\t\t</div>\n\t\t\t\t<div class=\"item\">\n\t\t\t\t\t<div class=\"special-info special-info1\">\n\t\t\t\t\t\t<div class=\"special-info-top\">\n\t\t\t\t\t\t\t<div class=\"special-star\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<h4>Australia</h4>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"special-info-bottom\">\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li>70 <span>hotels</span></li>\n\t\t\t\t\t\t\t\t<li>35 <span>Cities</span></li>\n\t\t\t\t\t\t\t\t<li>21 <span>Tours</span></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<p>Vivamus pulvinar imperdiet lorem vel aliquam. Maecenas nunc tellus.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"item\">\n\t\t\t\t\t<div class=\"special-info special-info2\">\n\t\t\t\t\t\t<div class=\"special-info-top\">\n\t\t\t\t\t\t\t<div class=\"special-star\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star-half-o\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<h4>Thailand</h4>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"special-info-bottom\">\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li>30 <span>hotels</span></li>\n\t\t\t\t\t\t\t\t<li>10 <span>Cities</span></li>\n\t\t\t\t\t\t\t\t<li>05 <span>Tours</span></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<p>Vivamus pulvinar imperdiet lorem vel aliquam. Maecenas nunc tellus.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n<!-- //Tour packages -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/booker-info/booker-info.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/booker-info/booker-info.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>booker-info works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/loading-info/loading-info.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/loading-info/loading-info.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"animated-header\">\n    <div class=\"loading\">Waiting for \"load\" event...</div>\n    <div class=\"earth\">\n      <img src={{earthIng}}>\n    </div>\n    <div class=\"moon\">\n      <img src={{moonIng}}>\n    </div>\n</div>\n\n  <!-- <div class=\"js-loading\"></div> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/rating.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/rating.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"rating\">\r\n    <!-- <input type=\"radio\" [name]=\"inputName\" value=\"5\" [checked]=\"rating==5\" /> -->\r\n    <input type=\"radio\" value=\"5\" [checked]=\"rating==5\" />\r\n    <label title=\"Rocks!\" >5 stars</label>\r\n    <!-- <label title=\"Rocks!\" >5 stars</label> -->\r\n  \r\n  \r\n    <input type=\"radio\" value=\"4\" [checked]=\"rating==4\" />\r\n    <label title=\"Pretty good\">4 stars</label>\r\n  \r\n    <input type=\"radio\" value=\"3\" [checked]=\"rating==3\" />\r\n    <label title=\"Meh\" >3 stars</label>\r\n  \r\n    <input type=\"radio\" value=\"2\" [checked]=\"rating==2\" />\r\n    <label title=\"Kinda bad\">2 stars</label>\r\n  \r\n    <input type=\"radio\" value=\"1\" [checked]=\"rating==1\" />\r\n    <label title=\"Sucks big time\" >1 star</label> \r\n    <!-- <label title=\"Sucks big time\" (click)='onClick(1)'>1 star</label> -->\r\n  </span>\r\n  \r\n\r\n\r\n  <!-- http://embed.plnkr.co/Qi6tEdIyaRoGgSj2z4M9/ -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/star-rating/star-rating.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/star-rating/star-rating.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"rating\">\n    <!-- <input type=\"radio\" [name]=\"inputName\" value=\"5\" [checked]=\"rating==5\" /> -->\n    <input type=\"radio\" value=\"5\" [checked]=\"rating==5\" />\n    <label title=\"Rocks!\" >5 stars</label>\n    <!-- <label title=\"Rocks!\" >5 stars</label> -->\n  \n  \n    <input type=\"radio\" value=\"4\" [checked]=\"rating==4\" />\n    <label title=\"Pretty good\">4 stars</label>\n  \n    <input type=\"radio\" value=\"3\" [checked]=\"rating==3\" />\n    <label title=\"Meh\" >3 stars</label>\n  \n    <input type=\"radio\" value=\"2\" [checked]=\"rating==2\" />\n    <label title=\"Kinda bad\">2 stars</label>\n  \n    <input type=\"radio\" value=\"1\" [checked]=\"rating==1\" />\n    <label title=\"Sucks big time\" >1 star</label> \n    <!-- <label title=\"Sucks big time\" (click)='onClick(1)'>1 star</label> -->\n  </span>\n  \n\n\n  <!-- http://embed.plnkr.co/Qi6tEdIyaRoGgSj2z4M9/ -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/summery-view/summery-view.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/summery-view/summery-view.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loading\">\n    loading ...\n    <div class=\"loader\"></div>\n</div>\n\n\n<div class=\"summery-view\" *ngFor=\"let product of productArr\">\n    <div class=\"row outlet-view\" style=\"position:relative;\">\n        <div class=\"col-sm-4\">\n            <img alt=\"smiley face\" src={{product.images[0]}} onerror=\"this.src='assets/images/alt/enjoy.jpg'\">\n        </div>\n        <div class=\"col-sm-5\">\n            <h4 class=\"fw9 \">{{product.packageName}}</h4>\n\n            <span class=\"day-view-summery\">\n                {{product.noOfDays}} Days &amp; {{product.noOfNights}} Nights | {{product.tripPlaces.length}} Cities\n                <!-- 5 Days &amp; 4 Nights | 4 Cities -->\n            </span>\n            <div>\n                <span class=\"fs14 agency-color\"> {{product.agencyName}} </span>\n                <app-star-rating [rating]='product.agencyReview'></app-star-rating>\n                <!-- <app-rating [rating]='product.agencyReview'  ></app-rating>  -->\n            </div>\n            <div class=\"\">\n                <h5 class=\"fw6\">DESTINATIONS</h5>\n                <!-- <span *ngFor=\"let place of product.tripPlaces, let i=index\" [attr.data-index]=\"i\" >\n                    {{ place }} {{i === product.tripPlaces.length- 1 ? '' : ' | '}} \n                </span> -->\n                <span *ngFor=\"let place of product.tripPlaces\" class=\"rounde-btn-city\">\n                    {{ place }}\n                </span>\n            </div>\n\n            <div class=\"\">\n                <h5 class=\"fw6\">INCLUSIONS</h5>\n                <span *ngFor=\"let amenitie of product.amenities\">\n                    <span class=\"click-to-top\">\n                        <img style=\"max-width: 30px;\" title='{{amenitie}}' src='assets/images/icon/{{amenitie}}.jpg' />\n                        &nbsp;\n                        <!-- <span class=\"tooltiptext\">Tooltip text</span> -->\n                    </span>\n                </span>\n            </div>\n\n        </div>\n        <div class=\"col-sm-3\">\n            <!-- <div class=\"rounde-btn-type\">{{product.packageCategory}}</div> -->\n            <span *ngFor=\"let category of product.packageCategory\" class=\"rounde-btn-type\"> {{category}}</span>\n            <h5 style=\"margin-top: 4px; margin-bottom: 3px;\">Starting from: </h5>\n            <!-- <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p> -->\n\n            <span class=\"green f20 fw8\">\n                {{product.offerPrice | currency: product.currency :'symbol':'2.2-2'}}\n            </span>\n            <span class=\"f20 fw8\">\n                <del> {{product.originalPrice | currency: product.currency:'symbol':'2.2-2'}}</del>\n            </span>\n            <div class=\"fs12\">\n                Per person on twin sharing basis\n            </div>\n            <input *ngIf=\"isButtonEnabled\" class=\"details-button disabled-button\" type=\"button\" value=\"View Details\"\n                [routerLink]=\"['/product', product.packageId]\">\n            <input *ngIf=\"! isButtonEnabled\" disabled class=\"details-button disabled-button\" type=\"button\"\n                value=\"View Details\" [routerLink]=\"['/product', product.packageId]\">\n            <!-- <input class=\"details-button\" type=\"button\" value=\"Add to cart\" > -->\n            <input *ngIf=\"isButtonEnabled\" class=\"submit-info disabled-button\" type=\"submit\" value=\"Booking Info\"\n                (click)=\"openModalInfo(product.agencyId)\">\n            <input *ngIf=\"! isButtonEnabled\" disabled class=\"submit-info disabled-button\" type=\"submit\"\n                value=\"Booking Info\">\n        </div>\n    </div>\n</div>\n\n\n\n\n\n\n<!-- Trigger/Open The Modal -->\n<!-- <button id=\"myBtn\" (click) = \"openModalInfo()\">Open Modal**************</button> -->\n\n<!-- The Modal -->\n<div id=\"myModal\" class=\"modal\" *ngIf=\"isModalOpen\" data-backdrop=\"static\" data-keyboard=\"false\">\n\n    <!-- Modal content -->\n    <div class=\"modal-content\">\n        <div class=\"modal-header\">\n            <span class=\"close\" (click)=\"closeModalInfo()\">&times;</span>\n            <h3>Booker Details...</h3>\n        </div>\n\n        <div class=\"modal-body\">\n\n            <div class=\"loader-small\" style=\"margin-top: 8em;\" *ngIf=\"isModalLoading\"> </div>\n            <div *ngIf=\"! isModalLoading\">\n                <div class=\"col-md-5 contact-left\">\n                    <div class=\"address\">\n                        <h5><b>{{bookerInfo.agencyName}}</b></h5>\n                    </div>\n                    <div class=\"address\" style=\"margin-top: 20px;\">\n                        <h5>Address:</h5>\n                        <p><i class=\"glyphicon glyphicon-home gColor\"></i><span\n                                class=\"ml1\">{{bookerInfo.address}}</span></p>\n                    </div>\n                    <div class=\"address address-mdl\">\n                        <h5>Phones:</h5>\n                        <p><i class=\"glyphicon glyphicon-earphone gColor\"></i> <span\n                                class=\"ml1\">{{bookerInfo.phoneNo}}</span> </p>\n                        <p><i class=\"glyphicon glyphicon-phone gColor\"></i> <span\n                                class=\"ml1\">{{bookerInfo.mobileNo}}</span> </p>\n                    </div>\n                    <div class=\"address\">\n                        <h5>Email:</h5>\n                        <p><i class=\"glyphicon glyphicon-envelope gColor\"></i> <span\n                                class=\"ml1\">{{bookerInfo.email}}</span></p>\n                        <p *ngIf=\"bookerInfo.webside\"><i class=\"glyphicon glyphicon-globe gColor\"></i>\n                            {{bookerInfo.webside}} </p>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"closeModalInfo()\">Close</button>\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sign-up-info/sign-up-info.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sign-up-info/sign-up-info.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"isSuccessMessage\">\n    <div class=\"success-message-position\">\n        <p class=\"alert alert-success\">\n            <strong>{{successMsg}}</strong>\n        </p>\n    </div>\n</div>\n\n<div class=\"row\" *ngIf=\"isErrorMessage\">\n    <div class=\"success-message-position\">\n        <p class=\"alert alert-danger\">\n            <strong>{{errorMsg}}</strong>\n        </p>\n    </div>\n</div>\n\n<div class=\"container\">\n    <div id=\"loginbox\" style=\"margin-top:50px;\" class=\"mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2\">\n        <div class=\"panel panel-info\">\n            <div class=\"panel-heading\">\n                <div class=\"panel-title\">Sign Up</div>\n                <div style=\"float:right; font-size: 80%; position: relative; top:-10px\"><a href=\"#\">Forgot password?</a>\n                </div>\n            </div>\n            <div style=\"padding-top:30px\" class=\"panel-body\">\n                <div style=\"display:none\" id=\"login-alert\" class=\"alert alert-danger col-sm-12\"></div>\n                <form id=\"loginform\" class=\"form-horizontal\" role=\"form\">\n\n\n                    <div class=\"form-group\" style=\"margin: 1px; margin-bottom: 25px\">\n                        <div class=\"input-group\">\n                            <span class=\"input-group-addon\"><i class=\"fa fa-user\"></i></span>\n                            <input type=\"text\" class=\"form-control\" name=\"fName\" placeholder=\"First Name\"\n                                required=\"required\" [(ngModel)]=\"fName\">\n                        </div>\n                    </div>\n                    <div class=\"form-group\" style=\"margin: 1px; margin-bottom: 25px\">\n                        <div class=\"input-group\">\n                            <span class=\"input-group-addon\"><i class=\"fa fa-user\"></i></span>\n                            <input type=\"text\" class=\"form-control\" name=\"lName\" placeholder=\"Last Name\"\n                                required=\"required\" [(ngModel)]=\"lName\">\n                        </div>\n                    </div>\n\n                    <div class=\"form-group\" style=\"margin: 1px; margin-bottom: 25px\">\n                        <div class=\"input-group\">\n                            <span class=\"input-group-addon\"><i class=\"fa fa-paper-plane\"></i></span>\n                            <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Email Address\"\n                                required=\"required\" [(ngModel)]=\"email\">\n                        </div>\n                    </div>\n\n                    <!-- <div style=\"margin-bottom: 25px\" class=\"input-group\">\n                        <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n                        <input id=\"login-password\" type=\"password\" class=\"form-control\" name=\"password\"\n                            placeholder=\"password\">\n                    </div> -->\n\n                    <div class=\"form-group\" style=\"margin: 1px; margin-bottom: 25px\">\n                        <div class=\"input-group\">\n                            <span class=\"input-group-addon\"><i class=\"fas fa-mobile-alt\"></i></span>\n                            <input type=\"text\" class=\"form-control\" name=\"phoneNo\" placeholder=\"Phone No\"\n                                required=\"required\" [(ngModel)]=\"phoneNo\">\n                        </div>\n                    </div>\n\n                    <div class=\"form-group\" style=\"margin: 1px; margin-bottom: 25px\">\n                        <div class=\"input-group\">\n                            <span class=\"input-group-addon\"><i class=\"fas fa-calendar\"></i></span>\n                            <span>Date Of Birdth </span>\n                            <input type=\"date\" class=\"form-control\" name=\"dateOfBirth\" placeholder=\"Date Of Birdth\"\n                                required=\"required\" [(ngModel)]=\"dateOfBirth\">\n                        </div>\n                    </div>\n                   \n                    <div class=\"form-group\" style=\"margin: 1px; margin-bottom: 25px\">\n                        <div class=\"input-group\">\n                            <span class=\"input-group-addon\"><i class=\"fa fa-lock\"></i></span>\n                            <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\"\n                                required=\"required\" [(ngModel)]=\"password\">\n                        </div>\n                    </div>\n                    <div class=\"form-group\" style=\"margin: 1px; margin-bottom: 25px\">\n                        <div class=\"input-group\">\n                            <span class=\"input-group-addon\">\n                                <i class=\"fa fa-lock\"></i>\n                                <i class=\"fa fa-check\"></i>\n                            </span>\n                            <input type=\"password\" class=\"form-control\" name=\"confirm_password\"\n                                placeholder=\"Confirm Password\" required=\"required\" [(ngModel)]=\"confirmPassword\">\n                        </div>\n                    </div>\n\n                    <div class=\"form-group\" style=\"margin: 1px; margin-bottom: 25px\">\n                        <div class=\"input-group\">\n                            <input type=\"radio\" [value]='PlaneUser' name=\"userDarta\"\n                                (change)=\"onChangeValue($event.target.value, 'PlaneUser')\" [checked]=true> Plane User\n                            &nbsp;\n                            <input type=\"radio\" [value]=\"TravelAgencyUser\" name=\"userDarta\" \n                                (change)=\"onChangeValue($event.target.value, 'trvelAgent')\">Travel Agency User\n                        </div>\n                    </div>\n\n                    <div *ngIf='isAgencyUser'>\n                        <div class=\"form-group\" style=\"margin: 1px; margin-bottom: 25px\">\n                            <div class=\"input-group\">\n                                <span class=\"input-group-addon\">Agency Name</span>\n                                <input type=\"text\" class=\"form-control\" name=\"agencyName\" placeholder=\"Agency Name\"\n                                    required=\"required\" [(ngModel)]=\"agencyName\">\n                            </div>\n                        </div>\n                        <div class=\"form-group\" style=\"margin: 1px; margin-bottom: 25px\">\n                            <div class=\"input-group\">\n                                <span class=\"input-group-addon\">Agency Currency</span>\n                                <input type=\"text\" class=\"form-control\" name=\"currency\" placeholder=\"Currency Ex. INR \"\n                                    required=\"required\" [(ngModel)]=\"currency\">\n                            </div>\n                        </div>\n                    </div>\n\n\n                    <!-- \n                    <div class=\"input-group\">\n                        <div class=\"checkbox\">\n                            <label>\n                                <input id=\"login-remember\" type=\"checkbox\" name=\"remember\" value=\"1\"> Remember me\n                            </label>\n                        </div>\n                    </div> -->\n                    <div class=\"form-group\" style=\"margin: 1px; margin-bottom: 25px\">\n                        <label class=\"checkbox-inline\"><input type=\"checkbox\" name=\"isAccept\" required=\"required\" [(ngModel)]=\"isAccept\" > I accept the <a>Terms\n                                of Use</a> &amp; <a>Privacy Policy</a></label>\n                    </div>\n\n\n\n                    <div style=\"margin-top:10px\" class=\"form-group\">\n                        <!-- Button -->\n\n                        <div class=\"col-sm-12 controls\">\n                            <!-- <a id=\"btn-login\" routerLink=\"/welcome\" class=\"btn btn-success\">Sign Up </a> -->\n                            <!-- <a id=\"btn-fblogin\" href=\"#\" class=\"btn btn-primary\">Login with Facebook</a> -->\n                            <button type=\"submit\" class=\"btn btn-success\" (click)=\"userSignUp()\"\n                                [disabled]=\"isLoading\">Sign Up &nbsp;<i *ngIf='isLoading'\n                                    class=\"fa fa-spinner fa-spin\"></i></button>\n                            <!-- <button (click)=\"saveSummeryView()\" class=\"btn btn-success btn-mm\" style=\"float: right;\" [disabled]=\"isSummeryVSaveLoading\">Save Detais View <i *ngIf='isSummeryVSaveLoading' class=\"fa fa-spinner fa-spin\"></i></button> -->\n\n                        </div>\n                    </div>\n\n\n                    <div class=\"form-group\">\n                        <div class=\"col-md-12 control\">\n                            <div style=\"border-top: 1px solid#888; padding-top:15px; font-size:85%\">\n                                I am the Existing user !\n                                <a routerLink=\"/login\">\n                                    Log In\n                                </a>\n                                <!-- <a href=\"#\" onClick=\"$('#loginbox').hide(); $('#signupbox').show()\">\n                                    Sign Up Here\n                                </a> -->\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/test-info/test-info.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/test-info/test-info.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>test-info works!</p>\n\n\n<!-- Trigger/Open The Modal -->\n<button id=\"myBtn\" (click) = \"openModalInfo()\">Open Modal</button>\n\n<!-- The Modal -->\n<div id=\"myModal\" class=\"modal\" *ngIf=\"isModalOpen\" data-backdrop=\"static\" data-keyboard=\"false\">\n\n  <!-- Modal content -->\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <span class=\"close\" (click)=\"closeModalInfo()\">&times;</span>\n      <h2>Modal Header</h2>\n    </div>\n\n    <div class=\"modal-body\">\n      <p>Some text in the Modal Body</p>\n      <p>Some other text...</p>\n    </div>\n\n\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"closeModalInfo()\">Close</button>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/welcome-info/welcome-info.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/welcome-info/welcome-info.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"mbr-section content4 cid-qwYTGS06Eb\" id=\"content4-9\" data-rv-view=\"977\">\n    <div class=\"container\" style=\"margin-top: -30px;\">\n        <div class=\"media-container-row\">\n            <div class=\"title col-12 col-md-8\">\n                <h2 class=\"align-center pb-3 mbr-fonts-style display-2\">\n                    Welcome to Travel Journey ! </h2>\n            </div>\n        </div>\n    </div>\n</section>\n\n\n\n<section class=\"cid-qwYSQ4CzZl\" id=\"image1-8\" data-rv-view=\"979\" style=\"padding-top:0px\">\n    <figure class=\"mbr-figure container\">\n        <div class=\"image-block\" style=\"width: 80%;\">\n            <img src=\"assets/images/alexandre-godreau-188906.jpg\" width=\"1400\" alt=\"Mobirise\" title=\"\"\n                media-simple=\"true\">\n\n        </div>\n    </figure>\n</section>\n\n\n\n\n\n<section class=\"mbr-section content4 cid-qwYTGS06Eb\" id=\"content4-9\" data-rv-view=\"977\">\n    <div class=\"container\">\n        <div class=\"media-container-row\">\n            <div class=\"title col-12 col-md-8\">\n                <h2 class=\"align-center pb-3 mbr-fonts-style display-2\">\n                    Explore the world!</h2>\n                <h3 class=\"mbr-section-subtitle align-center mbr-light mbr-fonts-style display-5\">We'll take care of\n                    everything else.</h3>\n\n            </div>\n        </div>\n    </div>\n</section>\n\n<section class=\"features3 cid-qwYWjewzYp\" id=\"features3-a\" data-rv-view=\"981\">\n    <div class=\"container\">\n        <div class=\"media-container-row\">\n            <div class=\"card p-3 col-12 col-md-6 col-lg-4\">\n                <div class=\"card-wrapper\">\n                    <div class=\"card-img\">\n                        <img src=\"assets/images/jeremy-bishop-262140.jpg\" alt=\"Mobirise\" title=\"\" media-simple=\"true\">\n                    </div>\n                    <div class=\"card-box\">\n                        <h4 class=\"card-title  display-5\">Experienced Guides</h4>\n                        <p class=\"mbr-text mbr-fonts-style display-7\">\n                            In Iceland at every step there are hot pools, not to swim in which it is sinful.\n                        </p>\n                    </div>\n\n                </div>\n            </div>\n\n            <div class=\"card p-3 col-12 col-md-6 col-lg-4\">\n                <div class=\"card-wrapper\">\n                    <div class=\"card-img\">\n                        <img src=\"assets/images/isabella-juskova-100383.jpg\" alt=\"Mobirise\" title=\"\"\n                            media-simple=\"true\">\n                    </div>\n                    <div class=\"card-box\">\n                        <h4 class=\"card-title mbr-fonts-style display-5\">\n                            Choose your Tour</h4>\n                        <p class=\"mbr-text mbr-fonts-style display-7\">\n                            Since Iceland is a developed and progressive country, you can do without cash.\n                        </p>\n                    </div>\n\n                </div>\n            </div>\n\n            <div class=\"card p-3 col-12 col-md-6 col-lg-4\">\n                <div class=\"card-wrapper\">\n                    <div class=\"card-img\">\n                        <img src=\"assets/images/john-salvino-317388.jpg\" alt=\"Mobirise\" title=\"\" media-simple=\"true\">\n                    </div>\n                    <div class=\"card-box\">\n                        <h4 class=\"card-title mbr-fonts-style display-5\">\n                            Chargers Available</h4>\n                        <p class=\"mbr-text mbr-fonts-style display-7\">On the western fjords there is the most difficult\n                            and picturesque road.<br></p>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n\n\n\n<!-- gallery -->\n\n\n\n<div class=\"gallery\" id=\"gallery\">  \n    <div class=\"container\"> \n        <h3 class=\"w3ls-title align-center gallary-font\">Our Gallery</h3>\n        <div class=\"gallery-agileinfo\">\n            \n            <div class=\"col-lg-4 col-sm-6 w3gallery-grids\">\n                <a href=\"assets/images/welcome/g1.jpg\" class=\"imghvr-hinge-right figure\">\n                    <img src=\"assets/images/welcome/g1.jpg\" alt=\"\" title=\"Travel Adventure Image\"> \n                    <div class=\"agile-figcaption\">\n                      <h4>High Mountain</h4>\n                      <p>Phasellus elementum ullamcorper urna, eu rhoncus.</p>\n                    </div>\n                </a> \n            </div> \n            <div class=\"col-lg-4 col-sm-6 w3gallery-grids\">\n                <a href=\"assets/images/welcome/g2.jpg\" class=\"imghvr-hinge-right figure\">\n                    <img src=\"assets/images/welcome/g2.jpg\" alt=\"\" title=\"Travel Adventure Image\"> \n                    <div class=\"agile-figcaption\">\n                      <h4>Climb Mountain</h4>\n                      <p>Phasellus elementum ullamcorper urna, eu rhoncus.</p>\n                    </div>\n                </a> \n            </div>\n            <div class=\"col-lg-4 col-sm-6   w3gallery-grids\">\n                <a href=\"assets/images/welcome/g3.jpg\" class=\"imghvr-hinge-right figure\">\n                    <img src=\"assets/images/welcome/g3.jpg\" alt=\"\" title=\"Travel Adventure Image\"> \n                    <div class=\"agile-figcaption\"> \n                      <h4> Mountain Ocean</h4>\n                      <p>Phasellus elementum ullamcorper urna, eu rhoncus.</p>\n                    </div>\n                </a> \n            </div>\n            <div class=\"col-lg-4 col-sm-6 w3gallery-grids\">\n                <a href=\"assets/images/welcome/g4.jpg\" class=\"imghvr-hinge-right figure\">\n                    <img src=\"assets/images/welcome/g4.jpg\" alt=\"\" title=\"Travel Adventure Image\"> \n                    <div class=\"agile-figcaption\">\n                      <h4>Forest Adventure</h4>\n                      <p>Phasellus elementum ullamcorper urna, eu rhoncus.</p>\n                    </div>\n                </a> \n            </div>\n            <div class=\"col-lg-4 col-sm-6 w3gallery-grids\">\n                <a href=\"assets/images/welcome/g5.jpg\" class=\"imghvr-hinge-right figure\">\n                    <img src=\"assets/images/welcome/g5.jpg\" alt=\"\" title=\"Travel Adventure Image\"> \n                    <div class=\"agile-figcaption\">\n                      <h4>Sky Dive</h4>\n                      <p>Phasellus elementum ullamcorper urna, eu rhoncus.</p>\n                    </div>\n                </a> \n            </div> \n            <div class=\"col-lg-4 col-sm-6 w3gallery-grids\">\n                <a href=\"assets/images/welcome/g6.jpg\" class=\"imghvr-hinge-right figure\">\n                    <img src=\"assets/images/welcome/g6.jpg\" alt=\"\" title=\"Travel Adventure Image\"> \n                    <div class=\"agile-figcaption\">\n                      <h4>Photo Adventure</h4>\n                      <p>Phasellus elementum ullamcorper urna, eu rhoncus.</p>\n                    </div>\n                </a> \n            </div> \n            <div class=\"clearfix\"> </div>\n        </div> \n    </div>\n</div>"

/***/ }),

/***/ "./src/app/Auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/Auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var currentUser = localStorage.getItem('currentUser');
        var obj;
        try {
            obj = JSON.parse(currentUser);
        }
        catch (err) {
            console.log(err);
        }
        //  console.log('****currentUser*******'+currentUser)
        if (obj && 'true' == obj.isValidUser) {
            return true;
        }
        else {
            this.router.navigate(['login']);
        }
        return false;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/Auth/authentication.service.ts":
/*!************************************************!*\
  !*** ./src/app/Auth/authentication.service.ts ***!
  \************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _common_AppConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/AppConstants */ "./src/app/common/AppConstants.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.getLoggedInName = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._baseURL = _common_AppConstants__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].apiURL;
    }
    AuthenticationService.prototype.loginValidate = function (username, password) {
        var _this = this;
        this.requestBody = { userName: username, password: password };
        return this.http.post(this._baseURL + 'LoginService/authenticate', this.requestBody)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
            console.log('All: ');
            _this.getLoggedInName.emit(data.firstName);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        // return this.http.post<any>(this._baseURL + 'LoginService/authenticate', this.requestBody)
        //   .pipe(map(user => {
        //     // login successful if there's a jwt token in the response
        //     if (user && user.token) {
        //       // store user details and jwt token in local storage to keep user logged in between page refreshes
        //       localStorage.setItem('currentUser', JSON.stringify(user));
        //     }
        //     return user;
        //   }));
    };
    AuthenticationService.prototype.userRegistration = function (request) {
        return this.http.post(this._baseURL + 'LoginService/userRegistration', request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
            // console.log('All: ');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    AuthenticationService.prototype.profileIinfo = function (request) {
        return this.http.post(this._baseURL + 'LoginService/profile', request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
            // console.log('All: ');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    AuthenticationService.prototype.handleError = function (err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        var errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message;
        }
        console.error(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(errorMessage);
    };
    AuthenticationService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], AuthenticationService.prototype, "getLoggedInName", void 0);
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/about-info/about-info.component.css":
/*!*****************************************************!*\
  !*** ./src/app/about-info/about-info.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nh3.heading {\r\n    text-align: center;\r\n    font-size: 45px;\r\n    text-transform: capitalize;\r\n    color: #000;\r\n    margin-bottom: 50px;\r\n    font-weight: 300;\r\n    position: relative;\r\n    font-family: Playball, Helvetica, sans-serif;\r\n}\r\n\r\nh3.heading:before {\r\n    content: '';\r\n    background: #da9d40;\r\n    height: 3px;\r\n    width: 10%;\r\n    bottom: -15%;\r\n    left: 45%;\r\n    position: absolute;\r\n}\r\n\r\n/*-- about --*/\r\n\r\nh3.text-center {\r\n    font-size: 40px;\r\n    margin-bottom: 1.5em;\r\n    color: #000;\r\n    text-transform: capitalize;\r\n}\r\n\r\n.about,.w3-services{\r\n\tpadding:5em 0;\r\n}\r\n\r\n.about_left {\r\n    background: url('https://anupghosh9635.github.io/product-image/img/extra/victoria-memorial-hall-calcutta-kolkata-srijan-roy-choudhury.jpg') no-repeat 0px 0px;\r\n    background-size: cover;\r\n    min-height: 500px;\r\n}\r\n\r\n.about_right h3 {\r\n    font-size: 28px;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0px;\r\n    color: #da9d40;\r\n    margin-bottom: .6em;\r\n}\r\n\r\n.about_right h4 {\r\n    text-transform: capitalize;\r\n    color: #353535;\r\n    margin-bottom: 1em;\r\n    line-height: 30px;\r\n}\r\n\r\n.about_right p {\r\n    line-height: 28px;\r\n    color: #212121;\r\n    letter-spacing: .5px;\r\n    font-size: 14px;\r\n    text-transform: capitalize;\r\n    padding-top: 1em;\r\n    padding-bottom: 1em;\r\n    border-top: 1px dashed #646464;\r\n}\r\n\r\n.about_right {\r\n    padding-left: 4em;\r\n}\r\n\r\n.about_right ul li a {\r\n    padding: 10px 30px;\r\n    text-decoration: none;\r\n    color: #333;\r\n    font-size: 15px;\r\n    border: 2px solid #333;\r\n}\r\n\r\n.about_right ul li {\r\n    display: inline-block;\r\n    margin-top: 2em;\r\n}\r\n\r\n.about_right .w3l, .about_right .w3ls_more:hover {\r\n    border: 2px solid #da9d40;\r\n    color: #fff !important;\r\n    background: #da9d40;\r\n}\r\n\r\n.about_right .w3l:hover, .about_right .w3ls_more {\r\n    border: 2px solid #333;\r\n    color: #fff !important;\r\n    background: #333;\r\n}\r\n\r\n/*-- //about --*/\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQtaW5mby9hYm91dC1pbmZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZiwwQkFBMEI7SUFDMUIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFVBQVU7SUFDVixZQUFZO0lBQ1osU0FBUztJQUNULGtCQUFrQjtBQUN0Qjs7QUFFQSxjQUFjOztBQUNkO0lBQ0ksZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsMEJBQTBCO0FBQzlCOztBQUNBO0NBQ0MsYUFBYTtBQUNkOztBQUNBO0lBQ0ksNkpBQTZKO0lBQzdKLHNCQUFzQjtJQUN0QixpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksMEJBQTBCO0lBQzFCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLDhCQUE4QjtBQUNsQzs7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsV0FBVztJQUNYLGVBQWU7SUFDZixzQkFBc0I7QUFDMUI7O0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixnQkFBZ0I7QUFDcEI7O0FBQ0EsZ0JBQWdCIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQtaW5mby9hYm91dC1pbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaDMuaGVhZGluZyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDQ1cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmb250LWZhbWlseTogUGxheWJhbGwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaDMuaGVhZGluZzpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGE5ZDQwO1xyXG4gICAgaGVpZ2h0OiAzcHg7XHJcbiAgICB3aWR0aDogMTAlO1xyXG4gICAgYm90dG9tOiAtMTUlO1xyXG4gICAgbGVmdDogNDUlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4vKi0tIGFib3V0IC0tKi9cclxuaDMudGV4dC1jZW50ZXIge1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41ZW07XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcbi5hYm91dCwudzMtc2VydmljZXN7XHJcblx0cGFkZGluZzo1ZW0gMDtcclxufVxyXG4uYWJvdXRfbGVmdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vYW51cGdob3NoOTYzNS5naXRodWIuaW8vcHJvZHVjdC1pbWFnZS9pbWcvZXh0cmEvdmljdG9yaWEtbWVtb3JpYWwtaGFsbC1jYWxjdXR0YS1rb2xrYXRhLXNyaWphbi1yb3ktY2hvdWRodXJ5LmpwZycpIG5vLXJlcGVhdCAwcHggMHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG59XHJcbi5hYm91dF9yaWdodCBoMyB7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgIGNvbG9yOiAjZGE5ZDQwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLjZlbTtcclxufVxyXG4uYWJvdXRfcmlnaHQgaDQge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBjb2xvcjogIzM1MzUzNTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG59XHJcbi5hYm91dF9yaWdodCBwIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgY29sb3I6ICMyMTIxMjE7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjVweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgcGFkZGluZy10b3A6IDFlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxZW07XHJcbiAgICBib3JkZXItdG9wOiAxcHggZGFzaGVkICM2NDY0NjQ7XHJcbn1cclxuLmFib3V0X3JpZ2h0IHtcclxuICAgIHBhZGRpbmctbGVmdDogNGVtO1xyXG59XHJcbi5hYm91dF9yaWdodCB1bCBsaSBhIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzMzMztcclxufVxyXG4uYWJvdXRfcmlnaHQgdWwgbGkge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMmVtO1xyXG59XHJcbi5hYm91dF9yaWdodCAudzNsLCAuYWJvdXRfcmlnaHQgLnczbHNfbW9yZTpob3ZlciB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZGE5ZDQwO1xyXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6ICNkYTlkNDA7XHJcbn1cclxuLmFib3V0X3JpZ2h0IC53M2w6aG92ZXIsIC5hYm91dF9yaWdodCAudzNsc19tb3JlIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMzMzM7XHJcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogIzMzMztcclxufVxyXG4vKi0tIC8vYWJvdXQgLS0qLyJdfQ== */"

/***/ }),

/***/ "./src/app/about-info/about-info.component.ts":
/*!****************************************************!*\
  !*** ./src/app/about-info/about-info.component.ts ***!
  \****************************************************/
/*! exports provided: AboutInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutInfoComponent", function() { return AboutInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutInfoComponent = /** @class */ (function () {
    function AboutInfoComponent() {
    }
    AboutInfoComponent.prototype.ngOnInit = function () {
    };
    AboutInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-info',
            template: __webpack_require__(/*! raw-loader!./about-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/about-info/about-info.component.html"),
            styles: [__webpack_require__(/*! ./about-info.component.css */ "./src/app/about-info/about-info.component.css")]
        })
    ], AboutInfoComponent);
    return AboutInfoComponent;
}());



/***/ }),

/***/ "./src/app/action/action.module.ts":
/*!*****************************************!*\
  !*** ./src/app/action/action.module.ts ***!
  \*****************************************/
/*! exports provided: ActionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionModule", function() { return ActionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _incompleate_info_incompleate_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./incompleate-info/incompleate-info.component */ "./src/app/action/incompleate-info/incompleate-info.component.ts");
/* harmony import */ var _inactive_info_inactive_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inactive-info/inactive-info.component */ "./src/app/action/inactive-info/inactive-info.component.ts");
/* harmony import */ var _allpackage_info_allpackage_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./allpackage-info/allpackage-info.component */ "./src/app/action/allpackage-info/allpackage-info.component.ts");
/* harmony import */ var _admin_info_admin_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-info/admin-info.component */ "./src/app/action/admin-info/admin-info.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _Auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Auth/auth.guard */ "./src/app/Auth/auth.guard.ts");









var routes = [
    // { path: 'admin', component: AdminInfoComponent },  
    { path: 'admin', component: _admin_info_admin_info_component__WEBPACK_IMPORTED_MODULE_6__["AdminInfoComponent"], canActivate: [_Auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'admin/in-cpmpleate', component: _incompleate_info_incompleate_info_component__WEBPACK_IMPORTED_MODULE_3__["IncompleateInfoComponent"] },
    { path: 'admin/in-active', component: _inactive_info_inactive_info_component__WEBPACK_IMPORTED_MODULE_4__["InactiveInfoComponent"] },
    { path: 'admin/all-package', component: _allpackage_info_allpackage_info_component__WEBPACK_IMPORTED_MODULE_5__["AllpackageInfoComponent"] }
];
var ActionModule = /** @class */ (function () {
    function ActionModule() {
    }
    ActionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: [
                _incompleate_info_incompleate_info_component__WEBPACK_IMPORTED_MODULE_3__["IncompleateInfoComponent"],
                _inactive_info_inactive_info_component__WEBPACK_IMPORTED_MODULE_4__["InactiveInfoComponent"],
                _allpackage_info_allpackage_info_component__WEBPACK_IMPORTED_MODULE_5__["AllpackageInfoComponent"],
                _admin_info_admin_info_component__WEBPACK_IMPORTED_MODULE_6__["AdminInfoComponent"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ActionModule);
    return ActionModule;
}());



/***/ }),

/***/ "./src/app/action/admin-info/admin-info.component.css":
/*!************************************************************!*\
  !*** ./src/app/action/admin-info/admin-info.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wid35{\r\n    width: 30%;\r\n    margin: 3px;\r\n    padding: 2px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.text-box {\r\n    font-weight: 600;\r\n    height: 27px;\r\n}\r\n\r\ninput{\r\n    color: black;\r\n}\r\n\r\n.agency-color{\r\n    color: #c46f06;\r\n    margin-top: 1px;\r\n}\r\n\r\n.file {\r\n    position: relative;\r\n    display: inline-block;\r\n    cursor: pointer;\r\n    height: 2.5rem;\r\n}\r\n\r\n.file input {\r\n    min-width: 14rem;\r\n    margin: 0;\r\n    filter: alpha(opacity=0);\r\n    opacity: 0;\r\n}\r\n\r\n.file-custom {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    left: 0;\r\n    z-index: 5;\r\n    height: 2.5rem;\r\n    padding: .5rem 1rem;\r\n    line-height: 1.5;\r\n    color: #555;\r\n    background-color: #fff;\r\n    border: .075rem solid #ddd;\r\n    border-radius: .25rem;\r\n    box-shadow: inset 0 0.2rem 0.4rem rgba(0,0,0,.05);\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n}\r\n\r\n.file-custom:before {\r\n    position: absolute;\r\n    top: -.075rem;\r\n    right: -.075rem;\r\n    bottom: -.075rem;\r\n    z-index: 6;\r\n    display: block;\r\n    content: \"Browse\";\r\n    height: 2.5rem;\r\n    padding: .5rem 1rem;\r\n    line-height: 1.5;\r\n    color: #555;\r\n    background-color: #eee;\r\n    border: .075rem solid #ddd;\r\n    border-radius: 0 .25rem .25rem 0;\r\n}\r\n\r\ninput[type=\"file\"] {\r\n    display: none;\r\n}\r\n\r\n.custom-file-upload {\r\n    border: 1px solid #ccc;\r\n    display: inline-block;\r\n    padding: 6px 12px;\r\n    cursor: pointer;\r\n    background: rgb(211, 210, 196);\r\n    margin-top: 10px;\r\n}\r\n\r\n.summery-view {\r\n    padding: 0;\r\n    font-size: 12px;\r\n    color: hsl(0, 0%, 0%);\r\n    border-radius: 4px;\r\n    box-shadow: hsl(0, 14%, 90%) 0 0 16px;\r\n    overflow: hidden;\r\n    background-color: hsl(0, 0%, 100%);\r\n    display: flex;\r\n    width: 100%;\r\n    margin-bottom: 17px;\r\n    border-bottom: 1px solid;\r\n    border-left: 1px solid;\r\n    border-right: 1px solid;\r\n}\r\n\r\n.outlet-view{ \r\n    padding: 10px;\r\n    color: rgb(10, 10, 10);\r\n    position: relative;\r\n    min-height: 350px;\r\n    font-family: \"Times New Roman;\"\r\n    \r\n}\r\n\r\n.outlet-view-details{\r\n    padding: 10px;\r\n    color: rgb(10, 10, 10);\r\n    position: relative;\r\n    min-height: 260px;\r\n    font-family: \"Times New Roman;\"\r\n}\r\n\r\n/* .modal-dialog {\r\n    width: 70%;\r\n    margin: 100px auto;\r\n} */\r\n\r\n@media (min-width: 768px){\r\n    .modal-dialog {\r\n        width: 70%;\r\n        margin: 100px auto;\r\n    }\r\n}\r\n\r\n.success-message-position{\r\n    position: fixed;\r\n    z-index: 1;\r\n    width :60%;\r\n    margin-left: 5%;\r\n}\r\n\r\n@media (max-width: 768px){\r\n    .success-message-position{\r\n        position: fixed;\r\n        z-index: 1;\r\n        width :90%;\r\n        margin-left: 5%;\r\n    }\r\n}\r\n\r\n.disabled-button {\r\n    pointer-events: none;\r\n    opacity: 0.4;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWN0aW9uL2FkbWluLWluZm8vYWRtaW4taW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCx3QkFBd0I7SUFDeEIsVUFBVTtBQUNkOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixRQUFRO0lBQ1IsT0FBTztJQUNQLFVBQVU7SUFDVixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLDBCQUEwQjtJQUMxQixxQkFBcUI7SUFDckIsaURBQWlEO0lBQ2pELHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLDBCQUEwQjtJQUMxQixnQ0FBZ0M7QUFDcEM7O0FBR0E7SUFDSSxhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLDhCQUE4QjtJQUM5QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIscUNBQXFDO0lBQ3JDLGdCQUFnQjtJQUNoQixrQ0FBa0M7SUFDbEMsYUFBYTtJQUNiLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7O0FBVUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakI7O0FBRUo7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakI7QUFDSjs7QUFLQTs7O0dBR0c7O0FBRUg7SUFDSTtRQUNJLFVBQVU7UUFDVixrQkFBa0I7SUFDdEI7QUFDSjs7QUFFQTtJQUNJLGVBQWU7SUFDZixVQUFVO0lBQ1YsVUFBVTtJQUNWLGVBQWU7QUFDbkI7O0FBRUE7SUFDSTtRQUNJLGVBQWU7UUFDZixVQUFVO1FBQ1YsVUFBVTtRQUNWLGVBQWU7SUFDbkI7QUFDSjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYWN0aW9uL2FkbWluLWluZm8vYWRtaW4taW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndpZDM1e1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIG1hcmdpbjogM3B4O1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4udGV4dC1ib3gge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGhlaWdodDogMjdweDtcclxufSBcclxuXHJcbmlucHV0e1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uYWdlbmN5LWNvbG9ye1xyXG4gICAgY29sb3I6ICNjNDZmMDY7XHJcbiAgICBtYXJnaW4tdG9wOiAxcHg7XHJcbn1cclxuXHJcbi5maWxlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGhlaWdodDogMi41cmVtO1xyXG59XHJcblxyXG4uZmlsZSBpbnB1dCB7XHJcbiAgICBtaW4td2lkdGg6IDE0cmVtO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG4uZmlsZS1jdXN0b20ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogNTtcclxuICAgIGhlaWdodDogMi41cmVtO1xyXG4gICAgcGFkZGluZzogLjVyZW0gMXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IC4wNzVyZW0gc29saWQgI2RkZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMC4ycmVtIDAuNHJlbSByZ2JhKDAsMCwwLC4wNSk7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG59IFxyXG5cclxuLmZpbGUtY3VzdG9tOmJlZm9yZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0uMDc1cmVtO1xyXG4gICAgcmlnaHQ6IC0uMDc1cmVtO1xyXG4gICAgYm90dG9tOiAtLjA3NXJlbTtcclxuICAgIHotaW5kZXg6IDY7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbnRlbnQ6IFwiQnJvd3NlXCI7XHJcbiAgICBoZWlnaHQ6IDIuNXJlbTtcclxuICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgYm9yZGVyOiAuMDc1cmVtIHNvbGlkICNkZGQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIC4yNXJlbSAuMjVyZW0gMDtcclxufVxyXG5cclxuXHJcbmlucHV0W3R5cGU9XCJmaWxlXCJdIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmN1c3RvbS1maWxlLXVwbG9hZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjExLCAyMTAsIDE5Nik7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uc3VtbWVyeS12aWV3IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogaHNsKDAsIDAlLCAwJSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3gtc2hhZG93OiBoc2woMCwgMTQlLCA5MCUpIDAgMCAxNnB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxN3B4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZDtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi5vdXRsZXQtdmlld3sgXHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgY29sb3I6IHJnYigxMCwgMTAsIDEwKTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1pbi1oZWlnaHQ6IDM1MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuO1wiXHJcbiAgICBcclxufVxyXG5cclxuLm91dGxldC12aWV3LWRldGFpbHN7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgY29sb3I6IHJnYigxMCwgMTAsIDEwKTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1pbi1oZWlnaHQ6IDI2MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuO1wiXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8qIC5tb2RhbC1kaWFsb2cge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIG1hcmdpbjogMTAwcHggYXV0bztcclxufSAqL1xyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KXtcclxuICAgIC5tb2RhbC1kaWFsb2cge1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgbWFyZ2luOiAxMDBweCBhdXRvO1xyXG4gICAgfVxyXG59IFxyXG5cclxuLnN1Y2Nlc3MtbWVzc2FnZS1wb3NpdGlvbntcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB3aWR0aCA6NjAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpe1xyXG4gICAgLnN1Y2Nlc3MtbWVzc2FnZS1wb3NpdGlvbntcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICB3aWR0aCA6OTAlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIH1cclxufVxyXG5cclxuLmRpc2FibGVkLWJ1dHRvbiB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIG9wYWNpdHk6IDAuNDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/action/admin-info/admin-info.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/action/admin-info/admin-info.component.ts ***!
  \***********************************************************/
/*! exports provided: AdminInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminInfoComponent", function() { return AdminInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var src_app_common_AmenitiesInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/AmenitiesInfo */ "./src/app/common/AmenitiesInfo.ts");
/* harmony import */ var _admin_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-info.service */ "./src/app/action/admin-info/admin-info.service.ts");





var AdminInfoComponent = /** @class */ (function () {
    function AdminInfoComponent(sanitizer, adminInfoService) {
        this.sanitizer = sanitizer;
        this.adminInfoService = adminInfoService;
        this.isSuccesFullSave = false;
        this.isCreatePackage = false;
        this.uploadImage = 'assets/images/icon/uploadImage.jpg';
        this.placeName = '';
        this.headingData = '';
        this.descriptionData = '';
        this.noofDay = 0;
        this.tripPlaces = [];
        this.agencyId = '';
        this.amenityList = [];
        this.aminitiesCheck = [];
        this.packageType = [];
        this.packageTypeSelcted = [];
        this.isSummeryVSaveLoading = false;
        this.isDetailsVSaveLoading = false;
        this.isSummeryImageLoading = false;
        this.isDetaisImageLoading = false;
        this.ismageLoading = [];
        this.isManualyFileCahge = false;
        // imageURL: string;
        this.urlData = 'assets/images/icon/uploadImage.jpg';
        this.detailsURLData = 'assets/images/icon/uploadImage.jpg';
        this.dayWiseList = [this.getArrayData()];
        this.placeNameArr = [];
        this.headingArr = [];
        this.descriptionArr = [];
        this.amenities = [];
        this.packageCategory = [];
        this.packageId = '';
        /** summery popup page */
        this.popUpReq = [];
        this.amenityList = src_app_common_AmenitiesInfo__WEBPACK_IMPORTED_MODULE_3__["AmenitiesService"].getAllAmenities();
        var currentUser = localStorage.getItem('currentUser');
        try {
            var obj = JSON.parse(currentUser);
            if (obj) {
                this.agencyName = obj.agencyName;
                if (obj.agencyId) {
                    this.agencyId = obj.agencyId;
                }
                this.currency = obj.currency;
                this.agencyReview = obj.agencyReview;
            }
        }
        catch (error) {
            console.log(error);
        }
        this.packageType = src_app_common_AmenitiesInfo__WEBPACK_IMPORTED_MODULE_3__["AmenitiesService"].toureType;
        for (var index = 0; index < this.amenityList.length; index++) {
            this.aminitiesCheck.push(false);
        }
        for (var index = 0; index < this.packageType.length; index++) {
            this.packageTypeSelcted.push(false);
        }
    }
    AdminInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.uploader.progressSource.subscribe(progress => {
        //   this.progress = progress;
        // });
        var currentUser = localStorage.getItem('currentUser');
        var obj = JSON.parse(currentUser);
        this.adminInfoService.getProductsInfo(obj.agencyId, obj.agencyName).subscribe({
            next: function (products) {
                _this.packageCoutInfo = products.packageList;
            },
            error: function (err) { return _this.errorMessage = err; }
        });
    };
    AdminInfoComponent.prototype.createPacage = function () {
        this.isCreatePackage = true;
    };
    AdminInfoComponent.prototype.getArrayData = function () {
        this.noofDay = this.noofDay + 1;
        return {
            "dayNo": "" + (this.noofDay),
            "place": [],
            "amenities": [],
            "images": [
                this.uploadImage
            ],
            "infoData": []
        };
    };
    AdminInfoComponent.prototype.onSelectFile = function (event) {
        var _this = this;
        // console.log(event); 
        // console.log(JSON.stringify(event));
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            this.imagePath = event.target.files;
            console.log('imagePath' + this.imagePath);
            reader.readAsDataURL(event.target.files[0]); // read file as data url
            this.fileNameUrl = event.target.files[0].name;
            reader.onload = function (event) {
                console.log(event);
                _this.urlData = reader.result; //add source to image
                // console.log('url---'+this.urlData)
                _this.uploadImageData(_this.fileNameUrl, _this.urlData);
            };
        }
    };
    AdminInfoComponent.prototype.uploadImageData = function (fileName, encodedValue) {
        var _this = this;
        this.isSummeryImageLoading = true;
        var req = {
            "agencyId": this.agencyId,
            "agencyName": this.agencyName,
            "imageList": [
                {
                    "fileName": fileName,
                    "imageEncodedInfo": encodedValue
                }
            ]
        };
        this.adminInfoService.uploadImageFile(req).subscribe({
            next: function (products) {
                var productResp = products.imageList;
                // console.log('productResp'+productResp)
                if (productResp.length > 0) {
                    var imageList = productResp[0];
                    // console.log(imageList);
                    _this.urlData = imageList.imageUrl;
                    _this.isSummeryImageLoading = false;
                    _this.updateImageDetailsView(_this.urlData);
                }
            },
            error: function (err) {
                _this.errorMessage = err;
                _this.updateImageDetailsView(encodedValue);
            }
        });
    };
    AdminInfoComponent.prototype.updateImageDetailsView = function (data) {
        if (!this.isManualyFileCahge) {
            this.detailsURLData = data;
        }
    };
    AdminInfoComponent.prototype.onSelectDetailsFile = function (event) {
        var _this = this;
        this.isManualyFileCahge = true;
        // console.log(event); 
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            this.imagePath = event.target.files;
            console.log('imagePath' + this.imagePath);
            reader.readAsDataURL(event.target.files[0]); // read file as data url
            var fileName_1 = event.target.files[0].name;
            reader.onload = function (event) {
                console.log(event);
                _this.detailsURLData = reader.result; //add source to image
                // console.log('url---'+this.urlData)
                _this.uploadDetailsImageData(fileName_1, _this.detailsURLData);
            };
        }
    };
    AdminInfoComponent.prototype.uploadDetailsImageData = function (fileName, encodedValue) {
        var _this = this;
        this.isDetaisImageLoading = true;
        var req = {
            "agencyId": this.agencyId,
            "agencyName": this.agencyName,
            "imageList": [
                {
                    "fileName": fileName,
                    "imageEncodedInfo": encodedValue
                }
            ]
        };
        this.adminInfoService.uploadImageFile(req).subscribe({
            next: function (products) {
                var productResp = products.imageList;
                // console.log('productResp'+productResp)
                if (productResp.length > 0) {
                    var imageList = productResp[0];
                    // console.log(imageList);
                    _this.detailsURLData = imageList.imageUrl;
                    _this.isDetaisImageLoading = false;
                }
                _this.isDetaisImageLoading = false;
            },
            error: function (err) { _this.errorMessage = err; }
        });
    };
    AdminInfoComponent.prototype.add = function () {
        this.dayWiseList.push(this.getArrayData());
        console.log('dayWiseList------' + JSON.stringify(this.dayWiseList));
    };
    AdminInfoComponent.prototype.onDaySelectFile = function (event, index) {
        var _this = this;
        console.log(event);
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            this.imagePath = event.target.files;
            console.log('imagePath' + this.imagePath);
            reader.readAsDataURL(event.target.files[0]); // read file as data url
            var fileName_2 = event.target.files[0].name;
            reader.onload = function (event) {
                var data = reader.result; //add source to image
                // this.dayWiseList[index].images.push(data);
                _this.dayWiseList[index].images[0] = data; ///tempurary hardcoded for array 1st element
                try {
                    _this.ismageLoading[index] = true;
                    var req = {
                        "agencyId": _this.agencyId,
                        "agencyName": _this.agencyName,
                        "imageList": [
                            {
                                "fileName": fileName_2,
                                "imageEncodedInfo": data
                            }
                        ]
                    };
                    _this.adminInfoService.uploadImageFile(req).subscribe({
                        next: function (products) {
                            var productResp = products.imageList;
                            // console.log('productResp'+productResp)
                            if (productResp.length > 0) {
                                var imageList = productResp[0];
                                // console.log(imageList);
                                _this.dayWiseList[index].images[0] = imageList.imageUrl;
                                _this.ismageLoading[index] = false;
                            }
                        },
                        error: function (err) { return _this.errorMessage = err; }
                    });
                }
                catch (error) {
                }
            };
        }
    };
    AdminInfoComponent.prototype.addCityName = function (city) {
        if (city) {
            this.tripPlaces.push(city);
            this.placeName = '';
        }
    };
    AdminInfoComponent.prototype.addPlaceName = function (place, index) {
        if (place) {
            this.dayWiseList[index].place.push(place);
            this.placeNameArr[index] = '';
            this.placeName = '';
        }
    };
    AdminInfoComponent.prototype.addDetailsInfo = function (headingData, descriptionData, index) {
        if (headingData || descriptionData) {
            this.dayWiseList[index].infoData.push({ "heading": headingData, "description": descriptionData });
            this.headingArr[index] = '';
            this.descriptionArr[index] = '';
        }
    };
    AdminInfoComponent.prototype.getAmenitiesList = function () {
        this.amenities = [];
        for (var index = 0; index < this.aminitiesCheck.length; index++) {
            var element = this.aminitiesCheck[index];
            if (element == true) {
                this.amenities.push(this.amenityList[index].name);
            }
        }
        return this.amenities;
    };
    AdminInfoComponent.prototype.getPackageCategory = function () {
        this.packageCategory = [];
        for (var index = 0; index < this.packageTypeSelcted.length; index++) {
            var element = this.packageTypeSelcted[index];
            if (element == true) {
                this.packageCategory.push(this.packageType[index]);
            }
        }
        return this.packageCategory;
    };
    AdminInfoComponent.prototype.saveSummeryView = function () {
        var _this = this;
        this.isSummeryVSaveLoading = true;
        var request = {
            "agencyId": this.agencyId,
            "agencyName": this.agencyName,
            "agencyReview": this.agencyReview,
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
            "currency": this.currency,
            "overviewImages": [this.detailsURLData],
            "highlights": [this.highlights],
            "overview": [this.overview],
            "dayWiseList": this.dayWiseList
        };
        var requestInfo = {
            "packageDetailsRQ": request
        };
        console.log('Request----' + JSON.stringify(request));
        this.adminInfoService.updateProducts(requestInfo).subscribe({
            next: function (products) {
                var productResp = products.packageDetailsRS;
                _this.packageId = productResp.packageId;
                _this.isSummeryVSaveLoading = false;
                _this.isSuccesFullSave = true;
                var data = _this;
                setTimeout(function () {
                    data.isSuccesFullSave = false;
                    console.log('insidesetTimeout****************************************' + data.isSuccesFullSave);
                }, 2000);
            },
            error: function (err) { _this.errorMessage = err; }
        });
        console.log(event);
        // this.isSuccesFullSave = true;
        // let data = this;
        // setTimeout(function () {
        //   data.isSuccesFullSave = false;
        //   console.log('insidesetTimeout****************************************' + data.isSuccesFullSave)
        // }, 2000)
        // console.log('insidesetTimeout*********'+this.isSuccesFullSave)
    };
    AdminInfoComponent.prototype.saveDetailsView = function () {
        this.isDetailsVSaveLoading = false;
        var request = {
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
            "overviewImages": [this.detailsURLData],
            "highlights": [this.highlights],
            "overview": [this.overview],
            "dayWiseList": this.dayWiseList
        };
        console.log('Details saveRequest----' + JSON.stringify(request));
        this.isDetailsVSaveLoading = false;
        // AdminInfoService
        this.isSuccesFullSave = true;
        var data = this;
        setTimeout(function () {
            data.isSuccesFullSave = false;
            console.log('insidesetTimeout****************************************' + data.isSuccesFullSave);
        }, 2000);
    };
    AdminInfoComponent.prototype.setPupUpdata = function () {
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
            }];
        console.log('Request----' + JSON.stringify(this.popUpReq));
    };
    AdminInfoComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
        { type: _admin_info_service__WEBPACK_IMPORTED_MODULE_4__["AdminInfoService"] }
    ]; };
    AdminInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-info',
            template: __webpack_require__(/*! raw-loader!./admin-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/action/admin-info/admin-info.component.html"),
            styles: [__webpack_require__(/*! ./admin-info.component.css */ "./src/app/action/admin-info/admin-info.component.css")]
        })
    ], AdminInfoComponent);
    return AdminInfoComponent;
}());



/***/ }),

/***/ "./src/app/action/admin-info/admin-info.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/action/admin-info/admin-info.service.ts ***!
  \*********************************************************/
/*! exports provided: AdminInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminInfoService", function() { return AdminInfoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_common_AppConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/AppConstants */ "./src/app/common/AppConstants.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var AdminInfoService = /** @class */ (function () {
    function AdminInfoService(http) {
        this.http = http;
        this._baseURL = src_app_common_AppConstants__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].apiURL;
    }
    AdminInfoService.prototype.updateProducts = function (requestData) {
        var url = this._baseURL + 'SearchDetails/updateProductInfo';
        return this.http.post(url, requestData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { console.log('All: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    AdminInfoService.prototype.getProductsInfo = function (agencyId, agencyName) {
        var url = this._baseURL + 'ActionService/allPackageOverview';
        var req = {
            agencyId: agencyId,
            agencyName: agencyName
        };
        return this.http.post(url, req)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { console.log('All: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    AdminInfoService.prototype.getProductInfoDetails = function (request) {
        var url = this._baseURL + 'ActionService/packageInfoDetails';
        return this.http.post(url, request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { console.log('All: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    AdminInfoService.prototype.uploadImageFile = function (request) {
        var url = this._baseURL + 'ImageService/imageUpload';
        return this.http.post(url, request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { console.log('All: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    AdminInfoService.prototype.handleError = function (err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        var errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message;
        }
        console.error(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errorMessage);
    };
    AdminInfoService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AdminInfoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AdminInfoService);
    return AdminInfoService;
}());



/***/ }),

/***/ "./src/app/action/allpackage-info/allpackage-info.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/action/allpackage-info/allpackage-info.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjdGlvbi9hbGxwYWNrYWdlLWluZm8vYWxscGFja2FnZS1pbmZvLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/action/allpackage-info/allpackage-info.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/action/allpackage-info/allpackage-info.component.ts ***!
  \*********************************************************************/
/*! exports provided: AllpackageInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllpackageInfoComponent", function() { return AllpackageInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_product_summary_info_summary_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/product/summary-info/summary-info.service */ "./src/app/product/summary-info/summary-info.service.ts");
/* harmony import */ var _inactive_info_action_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../inactive-info/action-info.service */ "./src/app/action/inactive-info/action-info.service.ts");




var AllpackageInfoComponent = /** @class */ (function () {
    function AllpackageInfoComponent(summary, actionInfoService) {
        this.summary = summary;
        this.actionInfoService = actionInfoService;
        this.loading = true;
        this.activeArr = [];
        this.deletedArr = [];
        this.inActiveArr = [];
        this.mapSelectedValue = new Map();
        this.isSuccessMessage = false;
        this.isErrorMessage = false;
        this.activeBLoading = false;
        this.deleteBLoading = false;
        this.inActiveBLoading = false;
        var currentUser = localStorage.getItem('currentUser');
        try {
            var obj = JSON.parse(currentUser);
            if (obj) {
                this.agencyId = obj.agencyId;
                this.agencyName = obj.agencyName;
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    // getAllActionDetails
    AllpackageInfoComponent.prototype.ngOnInit = function () {
        // this.summary.getProducts().subscribe({
        //   next: products => {
        //     this.response = products;
        //     this.productArr = this.response.packageSummeryRS;
        //     this.loading = false;
        //     // this.filteredProducts = this.products;
        //   },
        //   error: err => this.errorMessage = err
        // });
        var _this = this;
        var Req = {
            agencyId: this.agencyId,
            agencyName: this.agencyName
        };
        this.actionInfoService.getAllActionDetails(Req).subscribe({
            next: function (products) {
                _this.response = products;
                _this.productArr = _this.response.packageSummeryRS;
                _this.loading = false;
                // this.filteredProducts = this.products;
            },
            error: function (err) { return _this.errorMessage = err; }
        });
    };
    AllpackageInfoComponent.prototype.onChangeActiveValue = function (value, packageId) {
        this.mapSelectedValue.set(packageId, 'Active');
        console.log("onChangeActiveValue------" + value + " packageId----" + packageId);
        // this.getMapValue();
    };
    AllpackageInfoComponent.prototype.onChangeDeleteValue = function (value, packageId) {
        this.mapSelectedValue.set(packageId, 'Delete');
        console.log("onChangeDeleteValue------" + value + " packageId----" + packageId);
        // this.getMapValue();
    };
    AllpackageInfoComponent.prototype.onChangeInActiveValue = function (value, packageId) {
        this.mapSelectedValue.set(packageId, 'InActive');
        console.log("onChangeInActiveValue------" + value + " packageId----" + packageId);
        // this.getMapValue();
    };
    // getMapValue() {
    //   for (let key of this.mapSelectedValue.keys()) {
    //     let value = this.mapSelectedValue.get(key);
    //     console.log("key------" + key + " value----" + value);
    //   }
    // }
    /**
     * Active part
     */
    AllpackageInfoComponent.prototype.getActiveList = function () {
        var e_1, _a;
        this.activeArr = [];
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.mapSelectedValue.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                var value = this.mapSelectedValue.get(key);
                if ('Active' == value) {
                    this.activeArr.push(key);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return this.activeArr;
    };
    AllpackageInfoComponent.prototype.updateActiveList = function () {
        var _this = this;
        var activeList = this.getActiveList();
        this.activeBLoading = true;
        var Req = {
            agencyId: this.agencyId,
            agencyName: this.agencyName,
            activePackage: activeList
        };
        if (activeList.length > 0) {
            this.actionInfoService.modifyCompleateDetails(Req).subscribe({
                next: function (products) {
                    _this.response = products;
                    _this.activeBLoading = false;
                    _this.successFullMessage();
                },
                error: function (err) { return _this.errorMessage = err; }
            });
        }
        else {
            this.activeBLoading = false;
            this.errorFullMessage(true);
        }
    };
    /**
     * Delete part
     */
    AllpackageInfoComponent.prototype.getDeleteList = function () {
        var e_2, _a;
        this.deletedArr = [];
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.mapSelectedValue.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                var value = this.mapSelectedValue.get(key);
                if ('Delete' == value) {
                    this.deletedArr.push(key);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return this.deletedArr;
    };
    AllpackageInfoComponent.prototype.updateDeleteList = function () {
        var _this = this;
        var deleteList = this.getDeleteList();
        this.deleteBLoading = true;
        var Req = {
            agencyId: this.agencyId,
            agencyName: this.agencyName,
            deletedPackage: deleteList
        };
        if (deleteList.length > 0) {
            this.actionInfoService.modifyCompleateDetails(Req).subscribe({
                next: function (products) {
                    _this.response = products;
                    _this.deleteBLoading = false;
                    _this.successFullMessage();
                },
                error: function (err) {
                    _this.errorMessage = err;
                    _this.errorFullMessage(false);
                }
            });
        }
        else {
            this.deleteBLoading = false;
            this.errorFullMessage(true);
        }
    };
    /**
     * In Active part
     */
    AllpackageInfoComponent.prototype.getInActiveList = function () {
        var e_3, _a;
        this.inActiveArr = [];
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.mapSelectedValue.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                var value = this.mapSelectedValue.get(key);
                if ('InActive' == value) {
                    this.inActiveArr.push(key);
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return this.inActiveArr;
    };
    AllpackageInfoComponent.prototype.updateInActiveList = function () {
        var _this = this;
        var inActiveList = this.getInActiveList();
        this.deleteBLoading = true;
        var Req = {
            agencyId: this.agencyId,
            agencyName: this.agencyName,
            inActivePackage: inActiveList
        };
        if (inActiveList.length > 0) {
            this.actionInfoService.modifyCompleateDetails(Req).subscribe({
                next: function (products) {
                    _this.response = products;
                    _this.deleteBLoading = false;
                    _this.successFullMessage();
                },
                error: function (err) {
                    _this.errorMessage = err;
                    _this.errorFullMessage(false);
                }
            });
        }
        else {
            this.deleteBLoading = false;
            this.errorFullMessage(true);
        }
    };
    AllpackageInfoComponent.prototype.successFullMessage = function () {
        this.successMsg = 'Successfuly updated .....';
        this.isSuccessMessage = true;
        var data = this;
        setTimeout(function () {
            data.isSuccessMessage = false;
        }, 2000);
    };
    AllpackageInfoComponent.prototype.errorFullMessage = function (isPlaneErr) {
        if (isPlaneErr) {
            this.errorMsg = 'Before click any Action please select some item ....';
        }
        else {
            this.errorMsg = 'Unable to Update (Server Error) ......';
        }
        this.isErrorMessage = true;
        var data = this;
        setTimeout(function () {
            data.isErrorMessage = false;
        }, 3000);
    };
    AllpackageInfoComponent.ctorParameters = function () { return [
        { type: src_app_product_summary_info_summary_info_service__WEBPACK_IMPORTED_MODULE_2__["SummaryInfoService"] },
        { type: _inactive_info_action_info_service__WEBPACK_IMPORTED_MODULE_3__["ActionInfoService"] }
    ]; };
    AllpackageInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-allpackage-info',
            template: __webpack_require__(/*! raw-loader!./allpackage-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/action/allpackage-info/allpackage-info.component.html"),
            styles: [__webpack_require__(/*! ./allpackage-info.component.css */ "./src/app/action/allpackage-info/allpackage-info.component.css")]
        })
    ], AllpackageInfoComponent);
    return AllpackageInfoComponent;
}());



/***/ }),

/***/ "./src/app/action/inactive-info/action-info.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/action/inactive-info/action-info.service.ts ***!
  \*************************************************************/
/*! exports provided: ActionInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionInfoService", function() { return ActionInfoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_common_AppConstants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/AppConstants */ "./src/app/common/AppConstants.ts");






var ActionInfoService = /** @class */ (function () {
    function ActionInfoService(http) {
        this.http = http;
        this._baseURL = src_app_common_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].apiURL;
    }
    ActionInfoService.prototype.getAllActionDetails = function (requestData) {
        var url = this._baseURL + 'ActionService/allActionInfo';
        return this.http.post(url, requestData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { console.log('All: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ActionInfoService.prototype.getInCompleateDetails = function (requestData) {
        var url = this._baseURL + 'ActionService/inCompleateInfo';
        return this.http.post(url, requestData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { console.log('All: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ActionInfoService.prototype.getInActiveDetails = function (requestData) {
        var url = this._baseURL + 'ActionService/inActiveInfo';
        return this.http.post(url, requestData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { console.log('All: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ActionInfoService.prototype.modifyCompleateDetails = function (requestData) {
        var url = this._baseURL + 'ActionService/upadatePackageActionInfo';
        return this.http.post(url, requestData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { console.log('All: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ActionInfoService.prototype.handleError = function (err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        var errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message;
        }
        console.error(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    };
    ActionInfoService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ActionInfoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ActionInfoService);
    return ActionInfoService;
}());



/***/ }),

/***/ "./src/app/action/inactive-info/inactive-info.component.css":
/*!******************************************************************!*\
  !*** ./src/app/action/inactive-info/inactive-info.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjdGlvbi9pbmFjdGl2ZS1pbmZvL2luYWN0aXZlLWluZm8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/action/inactive-info/inactive-info.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/action/inactive-info/inactive-info.component.ts ***!
  \*****************************************************************/
/*! exports provided: InactiveInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InactiveInfoComponent", function() { return InactiveInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_product_summary_info_summary_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/product/summary-info/summary-info.service */ "./src/app/product/summary-info/summary-info.service.ts");
/* harmony import */ var _action_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action-info.service */ "./src/app/action/inactive-info/action-info.service.ts");




var InactiveInfoComponent = /** @class */ (function () {
    function InactiveInfoComponent(summary, actionInfoService) {
        this.summary = summary;
        this.actionInfoService = actionInfoService;
        this.loading = true;
        this.activeArr = [];
        this.deletedArr = [];
        this.mapSelectedValue = new Map();
        this.isSuccessMessage = false;
        this.isErrorMessage = false;
        this.activeBLoading = false;
        this.deleteBLoading = false;
        var currentUser = localStorage.getItem('currentUser');
        try {
            var obj = JSON.parse(currentUser);
            if (obj) {
                this.agencyId = obj.agencyId;
                this.agencyName = obj.agencyName;
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    InactiveInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        var Req = {
            agencyId: this.agencyId,
            agencyName: this.agencyName
        };
        this.actionInfoService.getInActiveDetails(Req).subscribe({
            next: function (products) {
                _this.response = products;
                _this.productArr = _this.response.packageSummeryRS;
                _this.loading = false;
                // this.filteredProducts = this.products;
            },
            error: function (err) { return _this.errorMessage = err; }
        });
    };
    InactiveInfoComponent.prototype.onChangeActiveValue = function (value, packageId) {
        this.mapSelectedValue.set(packageId, 'Active');
        console.log("onChangeActiveValue------" + value + " packageId----" + packageId);
        // this.getMapValue();
    };
    InactiveInfoComponent.prototype.onChangeDeleteValue = function (value, packageId) {
        this.mapSelectedValue.set(packageId, 'Delete');
        console.log("onChangeDeleteValue------" + value + " packageId----" + packageId);
        // this.getMapValue();
    };
    // getMapValue() {
    //   for (let key of this.mapSelectedValue.keys()) {
    //     let value = this.mapSelectedValue.get(key);
    //     console.log("key------" + key + " value----" + value);
    //   }
    // }
    /**
     * Acive part
     */
    InactiveInfoComponent.prototype.getActiveList = function () {
        var e_1, _a;
        this.activeArr = [];
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.mapSelectedValue.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                var value = this.mapSelectedValue.get(key);
                if ('Active' == value) {
                    this.activeArr.push(key);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return this.activeArr;
    };
    InactiveInfoComponent.prototype.updateActiveList = function () {
        var _this = this;
        var activeList = this.getActiveList();
        this.activeBLoading = true;
        var Req = {
            agencyId: this.agencyId,
            agencyName: this.agencyName,
            activePackage: activeList
        };
        if (activeList.length > 0) {
            this.actionInfoService.modifyCompleateDetails(Req).subscribe({
                next: function (products) {
                    _this.response = products;
                    _this.activeBLoading = false;
                    _this.successFullMessage();
                },
                error: function (err) { return _this.errorMessage = err; }
            });
        }
        else {
            this.activeBLoading = false;
            this.errorFullMessage(true);
        }
    };
    /**
     * Deleted logic
     */
    InactiveInfoComponent.prototype.getDeleteList = function () {
        var e_2, _a;
        this.deletedArr = [];
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.mapSelectedValue.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                var value = this.mapSelectedValue.get(key);
                if ('Delete' == value) {
                    this.deletedArr.push(key);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return this.deletedArr;
    };
    InactiveInfoComponent.prototype.updateDeleteList = function () {
        var _this = this;
        var deleteList = this.getDeleteList();
        this.deleteBLoading = true;
        var Req = {
            agencyId: this.agencyId,
            agencyName: this.agencyName,
            deletedPackage: deleteList
        };
        if (deleteList.length > 0) {
            this.actionInfoService.modifyCompleateDetails(Req).subscribe({
                next: function (products) {
                    _this.response = products;
                    _this.deleteBLoading = false;
                    _this.successFullMessage();
                },
                error: function (err) {
                    _this.errorMessage = err;
                    _this.errorFullMessage(false);
                }
            });
        }
        else {
            this.deleteBLoading = false;
            this.errorFullMessage(true);
        }
    };
    InactiveInfoComponent.prototype.successFullMessage = function () {
        this.successMsg = 'Successfuly updated .....';
        this.isSuccessMessage = true;
        var data = this;
        setTimeout(function () {
            data.isSuccessMessage = false;
        }, 2000);
    };
    InactiveInfoComponent.prototype.errorFullMessage = function (isPlaneErr) {
        if (isPlaneErr) {
            this.errorMsg = 'Before click any Action please select some item ....';
        }
        else {
            this.errorMsg = 'Unable to Update (Server Error) ......';
        }
        this.isErrorMessage = true;
        var data = this;
        setTimeout(function () {
            data.isErrorMessage = false;
        }, 3000);
    };
    InactiveInfoComponent.ctorParameters = function () { return [
        { type: src_app_product_summary_info_summary_info_service__WEBPACK_IMPORTED_MODULE_2__["SummaryInfoService"] },
        { type: _action_info_service__WEBPACK_IMPORTED_MODULE_3__["ActionInfoService"] }
    ]; };
    InactiveInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inactive-info',
            template: __webpack_require__(/*! raw-loader!./inactive-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/action/inactive-info/inactive-info.component.html"),
            styles: [__webpack_require__(/*! ./inactive-info.component.css */ "./src/app/action/inactive-info/inactive-info.component.css")]
        })
    ], InactiveInfoComponent);
    return InactiveInfoComponent;
}());



/***/ }),

/***/ "./src/app/action/incompleate-info/incompleate-info.component.css":
/*!************************************************************************!*\
  !*** ./src/app/action/incompleate-info/incompleate-info.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjdGlvbi9pbmNvbXBsZWF0ZS1pbmZvL2luY29tcGxlYXRlLWluZm8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/action/incompleate-info/incompleate-info.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/action/incompleate-info/incompleate-info.component.ts ***!
  \***********************************************************************/
/*! exports provided: IncompleateInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncompleateInfoComponent", function() { return IncompleateInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_product_summary_info_summary_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/product/summary-info/summary-info.service */ "./src/app/product/summary-info/summary-info.service.ts");
/* harmony import */ var _inactive_info_action_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../inactive-info/action-info.service */ "./src/app/action/inactive-info/action-info.service.ts");




var IncompleateInfoComponent = /** @class */ (function () {
    function IncompleateInfoComponent(summary, actionInfoService) {
        this.summary = summary;
        this.actionInfoService = actionInfoService;
        this.loading = true;
        this.activeArr = [];
        this.deletedArr = [];
        this.mapSelectedValue = new Map();
        this.isSuccessMessage = false;
        this.isErrorMessage = false;
        this.activeBLoading = false;
        this.deleteBLoading = false;
        var currentUser = localStorage.getItem('currentUser');
        try {
            var obj = JSON.parse(currentUser);
            if (obj) {
                this.agencyId = obj.agencyId;
                this.agencyName = obj.agencyName;
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    IncompleateInfoComponent.prototype.ngOnInit = function () {
        // this.summary.getProducts().subscribe({
        //   next: products => {
        //     this.response = products;
        //     this.productArr = this.response.packageSummeryRS;
        //     this.loading = false;
        //     // this.filteredProducts = this.products;
        //   },
        //   error: err => this.errorMessage = err
        // });
        var _this = this;
        var Req = {
            agencyId: this.agencyId,
            agencyName: this.agencyName
        };
        this.actionInfoService.getInCompleateDetails(Req).subscribe({
            next: function (products) {
                _this.response = products;
                _this.productArr = _this.response.packageSummeryRS;
                _this.loading = false;
                // this.filteredProducts = this.products;
            },
            error: function (err) { return _this.errorMessage = err; }
        });
    };
    IncompleateInfoComponent.prototype.onChangeDeleteValue = function (value, packageId) {
        this.mapSelectedValue.set(packageId, 'Delete');
        console.log("onChangeDeleteValue------" + value + " packageId----" + packageId);
        // this.getMapValue();
    };
    IncompleateInfoComponent.prototype.getDeleteList = function () {
        var e_1, _a;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.mapSelectedValue.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                var value = this.mapSelectedValue.get(key);
                if ('Delete' == value) {
                    this.deletedArr.push(key);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return this.deletedArr;
    };
    IncompleateInfoComponent.prototype.updateDeleteList = function () {
        var _this = this;
        var deleteList = this.getDeleteList();
        this.deleteBLoading = true;
        var Req = {
            agencyId: this.agencyId,
            agencyName: this.agencyName,
            deletedPackage: deleteList
        };
        if (deleteList.length > 0) {
            this.actionInfoService.modifyCompleateDetails(Req).subscribe({
                next: function (products) {
                    _this.response = products;
                    _this.deleteBLoading = false;
                    _this.successFullMessage();
                },
                error: function (err) {
                    _this.errorMessage = err;
                    _this.errorFullMessage(false);
                }
            });
        }
        else {
            this.deleteBLoading = false;
            this.errorFullMessage(true);
        }
    };
    IncompleateInfoComponent.prototype.successFullMessage = function () {
        this.successMsg = 'Successfuly updated .....';
        this.isSuccessMessage = true;
        var data = this;
        setTimeout(function () {
            data.isSuccessMessage = false;
        }, 2000);
    };
    IncompleateInfoComponent.prototype.errorFullMessage = function (isPlaneErr) {
        if (isPlaneErr) {
            this.errorMsg = 'Before click any Action please select some item ....';
        }
        else {
            this.errorMsg = 'Unable to Update (Server Error) ......';
        }
        this.isErrorMessage = true;
        var data = this;
        setTimeout(function () {
            data.isErrorMessage = false;
        }, 3000);
    };
    IncompleateInfoComponent.ctorParameters = function () { return [
        { type: src_app_product_summary_info_summary_info_service__WEBPACK_IMPORTED_MODULE_2__["SummaryInfoService"] },
        { type: _inactive_info_action_info_service__WEBPACK_IMPORTED_MODULE_3__["ActionInfoService"] }
    ]; };
    IncompleateInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-incompleate-info',
            template: __webpack_require__(/*! raw-loader!./incompleate-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/action/incompleate-info/incompleate-info.component.html"),
            styles: [__webpack_require__(/*! ./incompleate-info.component.css */ "./src/app/action/incompleate-info/incompleate-info.component.css")]
        })
    ], IncompleateInfoComponent);
    return IncompleateInfoComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home-info.component */ "./src/app/home/home-info.component.ts");
/* harmony import */ var _about_info_about_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about-info/about-info.component */ "./src/app/about-info/about-info.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _contact_info_contact_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact-info/contact-info.component */ "./src/app/contact-info/contact-info.component.ts");
/* harmony import */ var _login_info_login_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login-info/login-info.component */ "./src/app/login-info/login-info.component.ts");
/* harmony import */ var _sign_up_info_sign_up_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sign-up-info/sign-up-info.component */ "./src/app/sign-up-info/sign-up-info.component.ts");
/* harmony import */ var _profile_info_profile_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile-info/profile-info.component */ "./src/app/profile-info/profile-info.component.ts");
/* harmony import */ var _welcome_info_welcome_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./welcome-info/welcome-info.component */ "./src/app/welcome-info/welcome-info.component.ts");
/* harmony import */ var _package_info_package_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./package-info/package-info.component */ "./src/app/package-info/package-info.component.ts");
/* harmony import */ var _action_action_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./action/action.module */ "./src/app/action/action.module.ts");
/* harmony import */ var _product_product_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./product/product.module */ "./src/app/product/product.module.ts");
/* harmony import */ var _login_info_logout_info_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login-info/logout-info.component */ "./src/app/login-info/logout-info.component.ts");
/* harmony import */ var _test_info_test_info_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./test-info/test-info.component */ "./src/app/test-info/test-info.component.ts");












// import { DetailsPageComponent } from './details-page/details-page.component';




var routes = [
    { path: 'home', component: _home_home_info_component__WEBPACK_IMPORTED_MODULE_3__["HomeInfoComponent"] },
    { path: 'about', component: _about_info_about_info_component__WEBPACK_IMPORTED_MODULE_4__["AboutInfoComponent"] },
    { path: 'contact', component: _contact_info_contact_info_component__WEBPACK_IMPORTED_MODULE_6__["ContactInfoComponent"] },
    { path: 'login', component: _login_info_login_info_component__WEBPACK_IMPORTED_MODULE_7__["LoginInfoComponent"] },
    { path: 'logout', component: _login_info_logout_info_component__WEBPACK_IMPORTED_MODULE_14__["LogoutInfoComponent"] },
    { path: 'singup', component: _sign_up_info_sign_up_info_component__WEBPACK_IMPORTED_MODULE_8__["SignUpInfoComponent"] },
    { path: 'profile', component: _profile_info_profile_info_component__WEBPACK_IMPORTED_MODULE_9__["ProfileInfoComponent"] },
    { path: 'welcome', component: _welcome_info_welcome_info_component__WEBPACK_IMPORTED_MODULE_10__["WelcomeInfoComponent"] },
    { path: 'packages', component: _package_info_package_info_component__WEBPACK_IMPORTED_MODULE_11__["PackageInfoComponent"] },
    { path: 'test', component: _test_info_test_info_component__WEBPACK_IMPORTED_MODULE_15__["TestInfoComponent"] },
    // { path: 'details', component: DetailsPageComponent },
    // { path: 'product/:id', component: DetailsPageComponent },
    // { path: 'admin', component: AdminInfoComponent , canActivate :[AuthGuard] },  
    // { path: 'admin/in-cpmpleate', component: IncompleateInfoComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    // { path: '', component: HomeInfoComponent },
    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _action_action_module__WEBPACK_IMPORTED_MODULE_12__["ActionModule"],
                _product_product_module__WEBPACK_IMPORTED_MODULE_13__["ProductModule"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'travel-journey';
        this.alterNateImage = 'assets/images/alt/enjoy.jpg';
        this.isParentDivActive = true;
        // router.events.subscribe((val) => {
        //   if(val instanceof NavigationEnd){
        //     let uri = val.url; 
        //     if('/welcome' == uri || '/profile' == uri || '/profile' == uri|| '/login' == uri || '/singup' == uri ){
        //       this.isParentDivActive = false;
        //     }else{ 
        //       this.isParentDivActive = true;
        //     }
        //     // console.log("URIiiiiiiiiiiiiiiiiiiiii------------"+uri) 
        //   }
        // })
    }
    AppComponent.prototype.setIsLeftPanalRequired = function (value) {
        this.isParentDivActive = value;
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _heder_info_heder_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./heder-info/heder-info.component */ "./src/app/heder-info/heder-info.component.ts");
/* harmony import */ var _footer_info_footer_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer-info/footer-info.component */ "./src/app/footer-info/footer-info.component.ts");
/* harmony import */ var _home_home_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home-info.component */ "./src/app/home/home-info.component.ts");
/* harmony import */ var _about_info_about_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./about-info/about-info.component */ "./src/app/about-info/about-info.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _contact_info_contact_info_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contact-info/contact-info.component */ "./src/app/contact-info/contact-info.component.ts");
/* harmony import */ var _login_info_login_info_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login-info/login-info.component */ "./src/app/login-info/login-info.component.ts");
/* harmony import */ var _sign_up_info_sign_up_info_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sign-up-info/sign-up-info.component */ "./src/app/sign-up-info/sign-up-info.component.ts");
/* harmony import */ var _profile_info_profile_info_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./profile-info/profile-info.component */ "./src/app/profile-info/profile-info.component.ts");
/* harmony import */ var _welcome_info_welcome_info_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./welcome-info/welcome-info.component */ "./src/app/welcome-info/welcome-info.component.ts");
/* harmony import */ var _recent_trip_recent_trip_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./recent-trip/recent-trip.component */ "./src/app/recent-trip/recent-trip.component.ts");
/* harmony import */ var _package_info_package_info_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./package-info/package-info.component */ "./src/app/package-info/package-info.component.ts");
/* harmony import */ var _recent_trip_info_recent_trip_info_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./recent-trip-info/recent-trip-info.component */ "./src/app/recent-trip-info/recent-trip-info.component.ts");
/* harmony import */ var _shared_rating_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/rating.component */ "./src/app/shared/rating.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _product_product_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./product/product.module */ "./src/app/product/product.module.ts");
/* harmony import */ var _login_info_logout_info_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./login-info/logout-info.component */ "./src/app/login-info/logout-info.component.ts");
/* harmony import */ var _test_info_test_info_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./test-info/test-info.component */ "./src/app/test-info/test-info.component.ts");




// import { AngularFontAwesomeModule } from 'angular-font-awesome';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatToolbarModule,  MatIconModule,  MatCardModule, MatButtonModule, MatProgressSpinnerModule } from '@angular/material';





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _heder_info_heder_info_component__WEBPACK_IMPORTED_MODULE_7__["HederInfoComponent"],
                _footer_info_footer_info_component__WEBPACK_IMPORTED_MODULE_8__["FooterInfoComponent"],
                _home_home_info_component__WEBPACK_IMPORTED_MODULE_9__["HomeInfoComponent"],
                _about_info_about_info_component__WEBPACK_IMPORTED_MODULE_10__["AboutInfoComponent"],
                _contact_info_contact_info_component__WEBPACK_IMPORTED_MODULE_12__["ContactInfoComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundComponent"],
                _login_info_login_info_component__WEBPACK_IMPORTED_MODULE_13__["LoginInfoComponent"],
                _sign_up_info_sign_up_info_component__WEBPACK_IMPORTED_MODULE_14__["SignUpInfoComponent"],
                _profile_info_profile_info_component__WEBPACK_IMPORTED_MODULE_15__["ProfileInfoComponent"],
                _welcome_info_welcome_info_component__WEBPACK_IMPORTED_MODULE_16__["WelcomeInfoComponent"],
                _recent_trip_recent_trip_component__WEBPACK_IMPORTED_MODULE_17__["RecentTripComponent"],
                _package_info_package_info_component__WEBPACK_IMPORTED_MODULE_18__["PackageInfoComponent"],
                _recent_trip_info_recent_trip_info_component__WEBPACK_IMPORTED_MODULE_19__["RecentTripInfoComponent"],
                _shared_rating_component__WEBPACK_IMPORTED_MODULE_20__["RatingComponent"],
                _login_info_logout_info_component__WEBPACK_IMPORTED_MODULE_23__["LogoutInfoComponent"],
                _test_info_test_info_component__WEBPACK_IMPORTED_MODULE_24__["TestInfoComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
                _product_product_module__WEBPACK_IMPORTED_MODULE_22__["ProductModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

// AngularFontAwesomeModule,
// BrowserAnimationsModule,
// MatToolbarModule,
// MatIconModule,
// MatButtonModule,
// MatCardModule,
// MatProgressSpinnerModule,


/***/ }),

/***/ "./src/app/common/AmenitiesInfo.ts":
/*!*****************************************!*\
  !*** ./src/app/common/AmenitiesInfo.ts ***!
  \*****************************************/
/*! exports provided: AmenitiesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmenitiesService", function() { return AmenitiesService; });
// import { Injectable } from '@angular/core';
// @Injectable({
//     providedIn: 'root'
//   })
var AmenitiesService = /** @class */ (function () {
    function AmenitiesService() {
    }
    AmenitiesService.getAllAmenities = function () {
        return [
            {
                "name": "alcohol",
                "display": "Alchole Available",
                "value": "assets/images/icon/alcohol.jpg"
            },
            {
                "name": "car",
                "display": "Car service is available",
                "value": "assets/images/icon/car.jpg"
            },
            {
                "name": "food",
                "display": "Free Food available",
                "value": "assets/images/icon/food.jpg"
            },
            {
                "name": "wifi",
                "display": "Free Wifi available",
                "value": "assets/images/icon/wifi.jpg"
            },
            {
                "name": "flight",
                "display": "Flight service available",
                "value": "assets/images/icon/flight.jpg"
            },
            {
                "name": "sightseeing",
                "display": "sightseeing",
                "value": "assets/images/icon/sightseeing.jpg"
            },
            {
                "name": "londry",
                "display": "Londry service is available",
                "value": "assets/images/icon/londry.jpg"
            },
            {
                "name": "gim",
                "display": "Gim is available",
                "value": "assets/images/icon/gim.jpg"
            },
            {
                "name": "doublebed",
                "display": "Double ded in the room",
                "value": "assets/images/icon/doublebed.jpg"
            },
            {
                "name": "roomService24h",
                "display": "24 houre room service available ",
                "value": "assets/images/icon/roomService24h.jpg"
            }
        ];
    };
    AmenitiesService.toureType = [
        "Family",
        "Honeymoon",
        "Honeymoon Special",
        "Friend",
        "Friend & Family",
        "Group"
    ];
    return AmenitiesService;
}());



/***/ }),

/***/ "./src/app/common/AppConstants.ts":
/*!****************************************!*\
  !*** ./src/app/common/AppConstants.ts ***!
  \****************************************/
/*! exports provided: AppConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConstants", function() { return AppConstants; });
var AppConstants = /** @class */ (function () {
    function AppConstants() {
    }
    AppConstants.apiURL = "https://test-app-services.herokuapp.com/";
    // public static apiURL: string = "http://localhost:8585/"; 
    AppConstants.siteTitle = "This is example of ItSolutionStuff.com";
    AppConstants.headers = new Headers({ 'Content-Type': 'application/json' });
    return AppConstants;
}());



/***/ }),

/***/ "./src/app/contact-info/contact-info.component.css":
/*!*********************************************************!*\
  !*** ./src/app/contact-info/contact-info.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.header-info{\r\n    font-family: \"Playball\", sans-serif;\r\n    font-size: 3em;\r\n    margin-left: 15%;\r\n    margin-top: -1em;\r\n    margin-bottom: -17px;\r\n}\r\n\r\n\r\n.submit-info { \r\nfont-family: \"Playball\", sans-serif\r\n}\r\n\r\n\r\n/*-- contact --*/\r\n\r\n\r\n.contact-agileinfo {\r\n    margin-top: 4em;\r\n}\r\n\r\n\r\n.address.address-mdl {\r\n    margin: 2em 0; \r\n}\r\n\r\n\r\n.address h5 {\r\n    font-size: 1.2em;\r\n    font-weight: 600;\r\n    color: #000;\r\n}\r\n\r\n\r\n.address p { \r\n    margin-top: 1em;\r\n    font-size: 15px;\r\n    letter-spacing: .5px;\r\n}\r\n\r\n\r\n.address p i.glyphicon { \r\n    color: #da9d40;\r\n    margin-right: 0.5em;\r\n    font-size: 17px;\r\n}\r\n\r\n\r\n.address p a {\r\n    color: #525252;\r\n    font-size: 15px;\r\n}\r\n\r\n\r\n.address p a:hover{\r\n    color: #da9d40;\r\n}\r\n\r\n\r\n.contact-agileinfo input[type=\"text\"],.contact-agileinfo input[type=\"email\"] {\r\n    width: 100%;\r\n    color: #999;\r\n    background: none;\r\n    outline: none;\r\n    font-size: 14px;\r\n    padding: 1em;\r\n    letter-spacing: 1px;\r\n    border: solid 1px #b5b5b5;\r\n    -webkit-appearance: none;\r\n    display: inline-block;\r\n}\r\n\r\n\r\ninput.email {\r\n    margin: 1em 0;\r\n}\r\n\r\n\r\n.contact-agileinfo textarea {\r\n    resize: none;\r\n    width: 100%;\r\n    background: none;\r\n    color: #999;\r\n    font-size: 14px;\r\n    padding: 1em;\r\n    outline: none;\r\n    letter-spacing: 1px;\r\n    border: solid 1px #b5b5b5;\r\n    min-height: 10em;\r\n    -webkit-appearance: none;\r\n    margin-top: 1em;\r\n}\r\n\r\n\r\n.contact-agileinfo input[type=\"submit\"] {\r\n    border: none;\r\n    margin: 1em 1em 0 0;\r\n    font-size: 14px;\r\n    color: #fff;\r\n    background: #da9d40;\r\n    padding: 10px 50px;\r\n    text-transform: capitalize;\r\n    letter-spacing: 1px;\r\n    -webkit-appearance: none;\r\n    transition: 0.5s all;\r\n    -webkit-transition: 0.5s all;\r\n    -moz-transition: 0.5s all;\r\n}\r\n\r\n\r\n.contact-agileinfo input[type=\"submit\"]:hover {\r\n    background: #333;\r\n}\r\n\r\n\r\n.agileits-w3layouts-map iframe {\r\n\twidth: 100%;\r\n\tmin-height: 350px;\r\n\tborder: none;\r\n    border: 4px dotted #da9d40;\r\n}\r\n\r\n\r\n.contact {\r\n    padding: 5em 0;\r\n}\r\n\r\n\r\n/*-- //contact --*/\r\n\r\n\r\n/* \r\n.contact-agileinfo input[type=\"text\"], .contact-agileinfo input[type=\"email\"] {\r\n    width: 100%;\r\n    color: #999;\r\n    background: none;\r\n    outline: none;\r\n    font-size: 14px;\r\n    padding: 1em;\r\n    letter-spacing: 1px;\r\n    border: solid 1px #b5b5b5;\r\n    -webkit-appearance: none;\r\n    display: inline-block;\r\n    margin-bottom: 1em;\r\n}\r\n\r\n.contact-agileinfo textarea {\r\n    resize: none;\r\n    width: 100%;\r\n    background: none;\r\n    color: #999;\r\n    font-size: 14px;\r\n    padding: 1em;\r\n    outline: none;\r\n    letter-spacing: 1px;\r\n    border: solid 1px #b5b5b5;\r\n    min-height: 10em;\r\n    -webkit-appearance: none;\r\n    margin-top: 1em;\r\n}\r\n\r\n.contact-agileinfo input[type=\"submit\"] {\r\n    border: none;\r\n    margin: 1em 1em 0 0;\r\n    font-size: 14px;\r\n    color: #fff;\r\n    background: #da9d40;\r\n    padding: 10px 50px;\r\n    text-transform: capitalize;\r\n    letter-spacing: 1px;\r\n    -webkit-appearance: none;\r\n    transition: 0.5s all;\r\n    -webkit-transition: 0.5s all;\r\n    -moz-transition: 0.5s all;\r\n} */\r\n\r\n\r\n/*-- contact --*/\r\n\r\n\r\n/* .w3ls_map iframe {\r\n\twidth: 100%;\r\n\tmin-height: 300px;\r\n}\r\n\r\n.contact_wthreerow,\r\n.agileits_mail_grid_right_grid:nth-child(2) {\r\n\tmargin-top: 3em;\r\n}\r\n\r\n.w3l_contact_form {\r\n\tpadding-right: 5em;\r\n}\r\n\r\n.contact_wthreerow h4 {\r\n\tfont-size: 1.7em;\r\n\tcolor: #000000;\r\n\tmargin-bottom: 1em;\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n}\r\n\r\n.w3l_contact_form input[type=\"text\"],\r\n.w3l_contact_form input[type=\"email\"],\r\n.w3l_contact_form textarea {\r\n\toutline: none;\r\n\twidth: 100%;\r\n\tpadding: .7em 1em;\r\n\tfont-size: .9em;\r\n\tcolor: #888;\r\n\tborder: none;\r\n\tborder: 1px solid #777;\r\n\tbackground: none;\r\n}\r\n\r\n.w3l_contact_form input[type=\"email\"] {\r\n\tmargin: 1.5em 0;\r\n}\r\n\r\n.w3l_contact_form textarea {\r\n\tmin-height: 120px;\r\n\tresize: none;\r\n\tmargin: 1.5em 0;\r\n}\r\n\r\n.w3l_contact_form input[type=\"submit\"] {\r\n\toutline: none;\r\n\tpadding: .7em 4em;\r\n\tfont-size: 1em;\r\n\tcolor: #fff;\r\n\tborder: none;\r\n\tbackground: #2c925e;\r\n\t-webkit-transition: .5s all;\r\n\t-moz-transition: .5s all;\r\n\ttransition: .5s all;\r\n}\r\n\r\n.w3l_contact_form input[type=\"submit\"]:hover {\r\n\tbackground: #333;\r\n\tcolor: #fff;\r\n}\r\n\r\nul.contact_info li {\r\n    list-style-type: none;\r\n    margin-top: 1.5em;\r\n    letter-spacing: 1px;\r\n    color: #5a5a5a;\r\n    font-size: 1em;\r\n}\r\n\r\nul.contact_info li span {\r\n\tcolor: #fff;\r\n\tbackground: #db3552;\r\n\twidth:40px;\r\n\theight:40px;\r\n\ttext-align: center;\r\n\tline-height: 40px;\r\n\tborder-radius: 100%;\r\n\t-webkit-border-radius: 50%;\r\n\t-moz-border-radius: 50%;\r\n\t-o-border-radius: 50%;\r\n\t-ms-border-radius: 50%;\r\n\tmargin-right: 1em;\r\n\tfont-size: .9em;\r\n}\r\n\r\nul.contact_info li a {\r\n    color: #5a5a5a;\r\n\ttext-decoration: none;\r\n}\r\n\r\nul.contact_info li a:hover {\r\n\tcolor: #4CAF50;\r\n}\r\n.contact,.agile_testimonials,.packages,.w3-about,.travel {\r\n    padding: 5em 0;\r\n}\r\n.agileits_mail_grid_right_grid p {\r\n    font-size: 16px;\r\n    letter-spacing: 1px;\r\n    line-height: 28px;\r\n    color: #333;\r\n}\r\n.w3-about h4 {\r\n    text-transform: uppercase;\r\n    margin: 0em 0 1em;\r\n    color: #000;\r\n    font-size: 1.4em;\r\n    line-height: 32px;\r\n    text-align: left;\r\n    font-weight: 500;\r\n}\r\n.last h4 {\r\n    text-align: center;\r\n    text-transform: capitalize;\r\n}\r\n\r\n.about-top p {\r\n    text-align: left;\r\n}\r\n.last p {\r\n    text-align: center;\r\n}\r\n.middle-img img {\r\n    width: 100%;\r\n} */\r\n\r\n\r\n/*-- //contact --*/\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC1pbmZvL2NvbnRhY3QtaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLG1DQUFtQztJQUNuQyxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7OztBQUdBO0FBQ0E7QUFDQTs7O0FBQ0EsZ0JBQWdCOzs7QUFDaEI7SUFDSSxlQUFlO0FBQ25COzs7QUFDQTtJQUNJLGFBQWE7QUFDakI7OztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7OztBQUNBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7SUFDZixvQkFBb0I7QUFDeEI7OztBQUNBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COzs7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25COzs7QUFDQTtJQUNJLGNBQWM7QUFDbEI7OztBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGVBQWU7SUFDZixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIscUJBQXFCO0FBQ3pCOzs7QUFDQTtJQUNJLGFBQWE7QUFDakI7OztBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGVBQWU7SUFDZixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixlQUFlO0FBQ25COzs7QUFDQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLG9CQUFvQjtJQUNwQiw0QkFBNEI7SUFDNUIseUJBQXlCO0FBQzdCOzs7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7O0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsaUJBQWlCO0NBQ2pCLFlBQVk7SUFDVCwwQkFBMEI7QUFDOUI7OztBQUNBO0lBQ0ksY0FBYztBQUNsQjs7O0FBQ0Esa0JBQWtCOzs7QUFJbEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EyQ0c7OztBQUVILGdCQUFnQjs7O0FBQ2hCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNEhHOzs7QUFDSCxrQkFBa0IiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0LWluZm8vY29udGFjdC1pbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmhlYWRlci1pbmZve1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUGxheWJhbGxcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogM2VtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcclxuICAgIG1hcmdpbi10b3A6IC0xZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMTdweDtcclxufVxyXG5cclxuXHJcbi5zdWJtaXQtaW5mbyB7IFxyXG5mb250LWZhbWlseTogXCJQbGF5YmFsbFwiLCBzYW5zLXNlcmlmXHJcbn1cclxuLyotLSBjb250YWN0IC0tKi9cclxuLmNvbnRhY3QtYWdpbGVpbmZvIHtcclxuICAgIG1hcmdpbi10b3A6IDRlbTtcclxufSAgXHJcbi5hZGRyZXNzLmFkZHJlc3MtbWRsIHtcclxuICAgIG1hcmdpbjogMmVtIDA7IFxyXG59XHJcbi5hZGRyZXNzIGg1IHtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn1cclxuLmFkZHJlc3MgcCB7IFxyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC41cHg7XHJcbn1cclxuLmFkZHJlc3MgcCBpLmdseXBoaWNvbiB7IFxyXG4gICAgY29sb3I6ICNkYTlkNDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcbi5hZGRyZXNzIHAgYSB7XHJcbiAgICBjb2xvcjogIzUyNTI1MjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4uYWRkcmVzcyBwIGE6aG92ZXJ7XHJcbiAgICBjb2xvcjogI2RhOWQ0MDtcclxufVxyXG4uY29udGFjdC1hZ2lsZWluZm8gaW5wdXRbdHlwZT1cInRleHRcIl0sLmNvbnRhY3QtYWdpbGVpbmZvIGlucHV0W3R5cGU9XCJlbWFpbFwiXSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2I1YjViNTtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufSBcclxuaW5wdXQuZW1haWwge1xyXG4gICAgbWFyZ2luOiAxZW0gMDtcclxufVxyXG4uY29udGFjdC1hZ2lsZWluZm8gdGV4dGFyZWEge1xyXG4gICAgcmVzaXplOiBub25lO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNiNWI1YjU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMGVtO1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG59XHJcbi5jb250YWN0LWFnaWxlaW5mbyBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG1hcmdpbjogMWVtIDFlbSAwIDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6ICNkYTlkNDA7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDUwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGFsbDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cyBhbGw7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IDAuNXMgYWxsO1xyXG59XHJcbi5jb250YWN0LWFnaWxlaW5mbyBpbnB1dFt0eXBlPVwic3VibWl0XCJdOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMzMzM7XHJcbn1cclxuLmFnaWxlaXRzLXczbGF5b3V0cy1tYXAgaWZyYW1lIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRtaW4taGVpZ2h0OiAzNTBweDtcclxuXHRib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXI6IDRweCBkb3R0ZWQgI2RhOWQ0MDtcclxufSBcclxuLmNvbnRhY3Qge1xyXG4gICAgcGFkZGluZzogNWVtIDA7XHJcbn1cclxuLyotLSAvL2NvbnRhY3QgLS0qL1xyXG5cclxuXHJcblxyXG4vKiBcclxuLmNvbnRhY3QtYWdpbGVpbmZvIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLCAuY29udGFjdC1hZ2lsZWluZm8gaW5wdXRbdHlwZT1cImVtYWlsXCJdIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjYjViNWI1O1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG59XHJcblxyXG4uY29udGFjdC1hZ2lsZWluZm8gdGV4dGFyZWEge1xyXG4gICAgcmVzaXplOiBub25lO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNiNWI1YjU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMGVtO1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG59XHJcblxyXG4uY29udGFjdC1hZ2lsZWluZm8gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW46IDFlbSAxZW0gMCAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGE5ZDQwO1xyXG4gICAgcGFkZGluZzogMTBweCA1MHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cyBhbGw7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXMgYWxsO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiAwLjVzIGFsbDtcclxufSAqL1xyXG5cclxuLyotLSBjb250YWN0IC0tKi9cclxuLyogLnczbHNfbWFwIGlmcmFtZSB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0bWluLWhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbi5jb250YWN0X3d0aHJlZXJvdyxcclxuLmFnaWxlaXRzX21haWxfZ3JpZF9yaWdodF9ncmlkOm50aC1jaGlsZCgyKSB7XHJcblx0bWFyZ2luLXRvcDogM2VtO1xyXG59XHJcblxyXG4udzNsX2NvbnRhY3RfZm9ybSB7XHJcblx0cGFkZGluZy1yaWdodDogNWVtO1xyXG59XHJcblxyXG4uY29udGFjdF93dGhyZWVyb3cgaDQge1xyXG5cdGZvbnQtc2l6ZTogMS43ZW07XHJcblx0Y29sb3I6ICMwMDAwMDA7XHJcblx0bWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4udzNsX2NvbnRhY3RfZm9ybSBpbnB1dFt0eXBlPVwidGV4dFwiXSxcclxuLnczbF9jb250YWN0X2Zvcm0gaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxyXG4udzNsX2NvbnRhY3RfZm9ybSB0ZXh0YXJlYSB7XHJcblx0b3V0bGluZTogbm9uZTtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRwYWRkaW5nOiAuN2VtIDFlbTtcclxuXHRmb250LXNpemU6IC45ZW07XHJcblx0Y29sb3I6ICM4ODg7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICM3Nzc7XHJcblx0YmFja2dyb3VuZDogbm9uZTtcclxufVxyXG5cclxuLnczbF9jb250YWN0X2Zvcm0gaW5wdXRbdHlwZT1cImVtYWlsXCJdIHtcclxuXHRtYXJnaW46IDEuNWVtIDA7XHJcbn1cclxuXHJcbi53M2xfY29udGFjdF9mb3JtIHRleHRhcmVhIHtcclxuXHRtaW4taGVpZ2h0OiAxMjBweDtcclxuXHRyZXNpemU6IG5vbmU7XHJcblx0bWFyZ2luOiAxLjVlbSAwO1xyXG59XHJcblxyXG4udzNsX2NvbnRhY3RfZm9ybSBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcclxuXHRvdXRsaW5lOiBub25lO1xyXG5cdHBhZGRpbmc6IC43ZW0gNGVtO1xyXG5cdGZvbnQtc2l6ZTogMWVtO1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRiYWNrZ3JvdW5kOiAjMmM5MjVlO1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogLjVzIGFsbDtcclxuXHQtbW96LXRyYW5zaXRpb246IC41cyBhbGw7XHJcblx0dHJhbnNpdGlvbjogLjVzIGFsbDtcclxufVxyXG5cclxuLnczbF9jb250YWN0X2Zvcm0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3ZlciB7XHJcblx0YmFja2dyb3VuZDogIzMzMztcclxuXHRjb2xvcjogI2ZmZjtcclxufVxyXG5cclxudWwuY29udGFjdF9pbmZvIGxpIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIG1hcmdpbi10b3A6IDEuNWVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGNvbG9yOiAjNWE1YTVhO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbn1cclxuXHJcbnVsLmNvbnRhY3RfaW5mbyBsaSBzcGFuIHtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRiYWNrZ3JvdW5kOiAjZGIzNTUyO1xyXG5cdHdpZHRoOjQwcHg7XHJcblx0aGVpZ2h0OjQwcHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0LW8tYm9yZGVyLXJhZGl1czogNTAlO1xyXG5cdC1tcy1ib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0bWFyZ2luLXJpZ2h0OiAxZW07XHJcblx0Zm9udC1zaXplOiAuOWVtO1xyXG59XHJcblxyXG51bC5jb250YWN0X2luZm8gbGkgYSB7XHJcbiAgICBjb2xvcjogIzVhNWE1YTtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbnVsLmNvbnRhY3RfaW5mbyBsaSBhOmhvdmVyIHtcclxuXHRjb2xvcjogIzRDQUY1MDtcclxufVxyXG4uY29udGFjdCwuYWdpbGVfdGVzdGltb25pYWxzLC5wYWNrYWdlcywudzMtYWJvdXQsLnRyYXZlbCB7XHJcbiAgICBwYWRkaW5nOiA1ZW0gMDtcclxufVxyXG4uYWdpbGVpdHNfbWFpbF9ncmlkX3JpZ2h0X2dyaWQgcCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICBjb2xvcjogIzMzMztcclxufVxyXG4udzMtYWJvdXQgaDQge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIG1hcmdpbjogMGVtIDAgMWVtO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LXNpemU6IDEuNGVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4ubGFzdCBoNCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5cclxuLmFib3V0LXRvcCBwIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLmxhc3QgcCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLm1pZGRsZS1pbWcgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59ICovXHJcbi8qLS0gLy9jb250YWN0IC0tKi8iXX0= */"

/***/ }),

/***/ "./src/app/contact-info/contact-info.component.ts":
/*!********************************************************!*\
  !*** ./src/app/contact-info/contact-info.component.ts ***!
  \********************************************************/
/*! exports provided: ContactInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactInfoComponent", function() { return ContactInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactInfoComponent = /** @class */ (function () {
    function ContactInfoComponent() {
    }
    ContactInfoComponent.prototype.ngOnInit = function () {
    };
    ContactInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-info',
            template: __webpack_require__(/*! raw-loader!./contact-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/contact-info/contact-info.component.html"),
            styles: [__webpack_require__(/*! ./contact-info.component.css */ "./src/app/contact-info/contact-info.component.css")]
        })
    ], ContactInfoComponent);
    return ContactInfoComponent;
}());



/***/ }),

/***/ "./src/app/footer-info/footer-info.component.css":
/*!*******************************************************!*\
  !*** ./src/app/footer-info/footer-info.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " footer {\r\n    /* clear: both; */\r\n     /* position: relative; */\r\n   /* height: 200px;  */\r\n    /* margin-top: 0px; */\r\n    /* min-height :100px; */\r\n\r\n    /* height: 50px; */\r\n    /* margin-top: 400px; */\r\n    margin-bottom: 0px;\r\n} \r\n/* .mdb-color {\r\n    background-color: #45526e !important;\r\n}\r\n.font-small {\r\n    font-size: .9rem;\r\n}\r\n\r\nfooter.page-footer {\r\n    bottom: 0;\r\n    color: #fff;\r\n}\r\n\r\n.pt-4, .py-4 {\r\n    padding-top: 1.5rem!important;\r\n}\r\n\r\narticle, aside, figcaption, figure, footer, header, hgroup, main, nav, section {\r\n    display: block;\r\n}\r\n\r\n */ \r\n/*-- footer start here --*/ \r\n.footer-agile {\r\n    padding: 1em 0 3em;\r\n    background: #232323;\r\n    padding-bottom: 18px;\r\n} \r\np.footer-p1 {\r\n    font-size: 14px;\r\n\tletter-spacing: 1px;\r\n    font-weight: normal;\r\n    line-height: 30px;\r\n    padding-bottom: 10px;\r\n    color: #fff;\r\n} \r\n.footer-grid a{\r\n\tcolor:#999;\r\n\tletter-spacing: 2px;\r\n\tfont-size: 14px;\r\n} \r\n.footer-top-agileinfo{\r\n\ttext-align:center;\r\n} \r\n.footer-grid h3 {\r\n    font-size: 1.8em;\r\n    font-weight: 300;\r\n    color: #da9d40;\r\n    margin-bottom: 1em;\r\n    /* font-family: \"Brush Script Std\", sans-serif;  */\r\n    font-family: 'Playball', sans-serif;\r\n} \r\n.footer-grid li {\r\n    display: block;\r\n    margin: .7em 0 0;\r\n    font-size: 1em;\r\n    letter-spacing: 1px;\r\n\tfont-family: 'Open Sans', sans-serif;\r\n} \r\nul.tweet-agile li:nth-child(1) {\r\n    padding-bottom: 20px;\r\n} \r\nul.tweet-agile li i.fa.fa-twitter-square {\r\n    font-size: 35px;\r\n    color: #fff;\r\n    display: inline-block;\r\n} \r\nul.tweet-agile li p.tweet-p1 {\r\n    font-size: 15px;\r\n    font-weight: normal;\r\n    margin: -48px 0 10px 38px;\r\n    line-height: 25px;\r\n    color: #fff;\r\n} \r\nul.tweet-agile li p.tweet-p2 {\r\n    font-size: 13px;\r\n    font-weight: normal;\r\n    font-style: italic;\r\n    color: #dcdcdc;\r\n    letter-spacing: 2px;\r\n} \r\nul.tweet-agile li p.tweet-p1 a {\r\n    text-decoration: none;\r\n    color: #999;\r\n    text-transform: none;\r\n} \r\n.footer-grid  li {\r\n    color:#fff;\r\n    font-weight: 300;\r\n} \r\n.footer-grid  li a{\r\n    color:#fff;\r\n} \r\n.footer-grid li i {\r\n    width: 25px;\r\n    font-size: .9em;\r\n} \r\n.footer-grid  li a:hover { \r\n    color: #da9d40;\r\n} \r\n.footer-grid  p { \r\n    color: #fff;\r\n} \r\n.footer-grid p.w3l-para-mk {\r\n    margin-top: 1.5em;\r\n} \r\n.footer-agilem {\r\n    padding-top: 1em;\r\n    border-top: 1px solid rgba(255, 255, 255, 0.38);\r\n    margin-top: 2em;\r\n} \r\n.social-w3licon {\r\n    text-align: right;\r\n} \r\n.copy-w3lsright p {\r\n    color: #fff;\r\n    letter-spacing: 1px;\r\n    text-transform: capitalize;\r\n    font-size: 1em;\r\n    padding-top: 10px;\r\n    line-height: 26px;\r\n    font-family: 'Montserrat', sans-serif;\r\n} \r\n.copy-w3lsright p a{ \r\n    color: #da9d40;\r\n\ttext-decoration:none;\r\n\ttransition:.5s all;\r\n} \r\n.copy-w3lsright p a:hover{ \r\n    color: #fff; \r\n} \r\n/*-- social-icons --*/ \r\n.social-w3licon a {\r\n    font-size: 13px;\r\n    color: #fff;\r\n    margin: 0 0.1em;\r\n    display: inline-block;\r\n    transition: .5s all;\r\n    width: 30px;\r\n    height: 30px;\r\n    line-height: 2.1em;\r\n    border: 1px dashed #fff;\r\n    text-align: center;\r\n} \r\n.social-w3licon a:hover {\r\n\tborder-color: #fff; \r\n border-radius: 50%;\r\n} \r\n/*-- //social-icons --*/ \r\n/*-- //footer end here --*/\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyLWluZm8vZm9vdGVyLWluZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQztJQUNHLGlCQUFpQjtLQUNoQix3QkFBd0I7R0FDMUIsb0JBQW9CO0lBQ25CLHFCQUFxQjtJQUNyQix1QkFBdUI7O0lBRXZCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBb0JFO0FBUUYsMEJBQTBCO0FBQzFCO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGVBQWU7Q0FDbEIsbUJBQW1CO0lBQ2hCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLFdBQVc7QUFDZjtBQUNBO0NBQ0MsVUFBVTtDQUNWLG1CQUFtQjtDQUNuQixlQUFlO0FBQ2hCO0FBQ0E7Q0FDQyxpQkFBaUI7QUFDbEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrREFBa0Q7SUFDbEQsbUNBQW1DO0FBQ3ZDO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxtQkFBbUI7Q0FDdEIsb0NBQW9DO0FBQ3JDO0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsV0FBVztBQUNmO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQiwrQ0FBK0M7SUFDL0MsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixxQ0FBcUM7QUFDekM7QUFDQTtJQUNJLGNBQWM7Q0FDakIsb0JBQW9CO0NBR3BCLGtCQUFrQjtBQUNuQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0EscUJBQXFCO0FBQ3JCO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxlQUFlO0lBQ2YscUJBQXFCO0lBR3JCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCO0FBQ0E7Q0FDQyxrQkFBa0I7Q0FHZixrQkFBa0I7QUFDdEI7QUFDQSx1QkFBdUI7QUFDdkIsMEJBQTBCIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyLWluZm8vZm9vdGVyLWluZm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiBmb290ZXIge1xyXG4gICAgLyogY2xlYXI6IGJvdGg7ICovXHJcbiAgICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xyXG4gICAvKiBoZWlnaHQ6IDIwMHB4OyAgKi9cclxuICAgIC8qIG1hcmdpbi10b3A6IDBweDsgKi9cclxuICAgIC8qIG1pbi1oZWlnaHQgOjEwMHB4OyAqL1xyXG5cclxuICAgIC8qIGhlaWdodDogNTBweDsgKi9cclxuICAgIC8qIG1hcmdpbi10b3A6IDQwMHB4OyAqL1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59IFxyXG4vKiAubWRiLWNvbG9yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NTUyNmUgIWltcG9ydGFudDtcclxufVxyXG4uZm9udC1zbWFsbCB7XHJcbiAgICBmb250LXNpemU6IC45cmVtO1xyXG59XHJcblxyXG5mb290ZXIucGFnZS1mb290ZXIge1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5wdC00LCAucHktNCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtIWltcG9ydGFudDtcclxufVxyXG5cclxuYXJ0aWNsZSwgYXNpZGUsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWFpbiwgbmF2LCBzZWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4gKi9cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qLS0gZm9vdGVyIHN0YXJ0IGhlcmUgLS0qLyBcclxuLmZvb3Rlci1hZ2lsZSB7XHJcbiAgICBwYWRkaW5nOiAxZW0gMCAzZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjMyMzIzO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE4cHg7XHJcbn0gICBcclxucC5mb290ZXItcDEge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG5cdGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5mb290ZXItZ3JpZCBhe1xyXG5cdGNvbG9yOiM5OTk7XHJcblx0bGV0dGVyLXNwYWNpbmc6IDJweDtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLmZvb3Rlci10b3AtYWdpbGVpbmZve1xyXG5cdHRleHQtYWxpZ246Y2VudGVyO1xyXG59IFxyXG4uZm9vdGVyLWdyaWQgaDMge1xyXG4gICAgZm9udC1zaXplOiAxLjhlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBjb2xvcjogI2RhOWQ0MDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxuICAgIC8qIGZvbnQtZmFtaWx5OiBcIkJydXNoIFNjcmlwdCBTdGRcIiwgc2Fucy1zZXJpZjsgICovXHJcbiAgICBmb250LWZhbWlseTogJ1BsYXliYWxsJywgc2Fucy1zZXJpZjtcclxufVxyXG4uZm9vdGVyLWdyaWQgbGkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IC43ZW0gMCAwO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG5cdGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG51bC50d2VldC1hZ2lsZSBsaTpudGgtY2hpbGQoMSkge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxudWwudHdlZXQtYWdpbGUgbGkgaS5mYS5mYS10d2l0dGVyLXNxdWFyZSB7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG51bC50d2VldC1hZ2lsZSBsaSBwLnR3ZWV0LXAxIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBtYXJnaW46IC00OHB4IDAgMTBweCAzOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG51bC50d2VldC1hZ2lsZSBsaSBwLnR3ZWV0LXAyIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBjb2xvcjogI2RjZGNkYztcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbn1cclxudWwudHdlZXQtYWdpbGUgbGkgcC50d2VldC1wMSBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuLmZvb3Rlci1ncmlkICBsaSB7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG4uZm9vdGVyLWdyaWQgIGxpIGF7XHJcbiAgICBjb2xvcjojZmZmO1xyXG59XHJcbi5mb290ZXItZ3JpZCBsaSBpIHtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgZm9udC1zaXplOiAuOWVtO1xyXG59XHJcbi5mb290ZXItZ3JpZCAgbGkgYTpob3ZlciB7IFxyXG4gICAgY29sb3I6ICNkYTlkNDA7XHJcbn0gXHJcbi5mb290ZXItZ3JpZCAgcCB7IFxyXG4gICAgY29sb3I6ICNmZmY7XHJcbn0gXHJcbi5mb290ZXItZ3JpZCBwLnczbC1wYXJhLW1rIHtcclxuICAgIG1hcmdpbi10b3A6IDEuNWVtO1xyXG59XHJcbi5mb290ZXItYWdpbGVtIHtcclxuICAgIHBhZGRpbmctdG9wOiAxZW07XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM4KTtcclxuICAgIG1hcmdpbi10b3A6IDJlbTtcclxufVxyXG4uc29jaWFsLXczbGljb24ge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLmNvcHktdzNsc3JpZ2h0IHAge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5jb3B5LXczbHNyaWdodCBwIGF7IFxyXG4gICAgY29sb3I6ICNkYTlkNDA7XHJcblx0dGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOi41cyBhbGw7XHJcblx0LW1vei10cmFuc2l0aW9uOi41cyBhbGw7XHJcblx0dHJhbnNpdGlvbjouNXMgYWxsO1xyXG59XHJcbi5jb3B5LXczbHNyaWdodCBwIGE6aG92ZXJ7IFxyXG4gICAgY29sb3I6ICNmZmY7IFxyXG59XHJcbi8qLS0gc29jaWFsLWljb25zIC0tKi9cclxuLnNvY2lhbC13M2xpY29uIGEge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW46IDAgMC4xZW07XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC41cyBhbGw7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IC41cyBhbGw7XHJcbiAgICB0cmFuc2l0aW9uOiAuNXMgYWxsO1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMi4xZW07XHJcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uc29jaWFsLXczbGljb24gYTpob3ZlciB7XHJcblx0Ym9yZGVyLWNvbG9yOiAjZmZmO1xyXG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xyXG5cdC1tb3otYm9yZGVyLXJhZGl1czogNTAlOyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4vKi0tIC8vc29jaWFsLWljb25zIC0tKi8gXHJcbi8qLS0gLy9mb290ZXIgZW5kIGhlcmUgLS0qLyJdfQ== */"

/***/ }),

/***/ "./src/app/footer-info/footer-info.component.ts":
/*!******************************************************!*\
  !*** ./src/app/footer-info/footer-info.component.ts ***!
  \******************************************************/
/*! exports provided: FooterInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterInfoComponent", function() { return FooterInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterInfoComponent = /** @class */ (function () {
    function FooterInfoComponent() {
    }
    FooterInfoComponent.prototype.ngOnInit = function () {
    };
    FooterInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer-info',
            template: __webpack_require__(/*! raw-loader!./footer-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer-info/footer-info.component.html"),
            styles: [__webpack_require__(/*! ./footer-info.component.css */ "./src/app/footer-info/footer-info.component.css")]
        })
    ], FooterInfoComponent);
    return FooterInfoComponent;
}());



/***/ }),

/***/ "./src/app/heder-info/heder-info.component.css":
/*!*****************************************************!*\
  !*** ./src/app/heder-info/heder-info.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* body{\r\n    background:url('http://www.wallpaperup.com/uploads/wallpapers/2012/10/21/20181/cad2441dd3252cf53f12154412286ba0.jpg');\r\n    padding:50px;\r\n} */\r\n.headerIage{\r\n    width: 150px;\r\n    height: 58px;\r\n    margin-top: -20px;\r\n}\r\n#login-dp{\r\n    min-width: 250px;\r\n    padding: 14px 14px 0;\r\n    overflow:hidden;\r\n    background-color:rgba(255,255,255,.8);\r\n}\r\n#login-dp .help-block{\r\n    font-size:12px    \r\n}\r\n#login-dp .bottom{\r\n    background-color:rgba(255,255,255,.8);\r\n    border-top:1px solid #ddd;\r\n    clear:both;\r\n    padding:14px;\r\n}\r\n#login-dp .social-buttons{\r\n    margin:12px 0    \r\n}\r\n#login-dp .social-buttons a{\r\n    width: 49%;\r\n}\r\n#login-dp .form-group {\r\n    margin-bottom: 10px;\r\n}\r\n.btn-fb{\r\n    color: #fff;\r\n    background-color:#3b5998;\r\n}\r\n.btn-fb:hover{\r\n    color: #fff;\r\n    background-color:#496ebc \r\n}\r\n.btn-tw{\r\n    color: #fff;\r\n    background-color:#55acee;\r\n}\r\n.btn-tw:hover{\r\n    color: #fff;\r\n    background-color:#59b5fa;\r\n}\r\n@media(max-width:768px){\r\n    #login-dp{\r\n        background-color: inherit;\r\n        color: #fff;\r\n    }\r\n    #login-dp .bottom{\r\n        background-color: inherit;\r\n        border-top:0 none;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVkZXItaW5mby9oZWRlci1pbmZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHO0FBQ0g7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YscUNBQXFDO0FBQ3pDO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7SUFDSSxxQ0FBcUM7SUFDckMseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksV0FBVztJQUNYLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksV0FBVztJQUNYO0FBQ0o7QUFDQTtJQUNJLFdBQVc7SUFDWCx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLFdBQVc7SUFDWCx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJO1FBQ0kseUJBQXlCO1FBQ3pCLFdBQVc7SUFDZjtJQUNBO1FBQ0kseUJBQXlCO1FBQ3pCLGlCQUFpQjtJQUNyQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvaGVkZXItaW5mby9oZWRlci1pbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBib2R5e1xyXG4gICAgYmFja2dyb3VuZDp1cmwoJ2h0dHA6Ly93d3cud2FsbHBhcGVydXAuY29tL3VwbG9hZHMvd2FsbHBhcGVycy8yMDEyLzEwLzIxLzIwMTgxL2NhZDI0NDFkZDMyNTJjZjUzZjEyMTU0NDEyMjg2YmEwLmpwZycpO1xyXG4gICAgcGFkZGluZzo1MHB4O1xyXG59ICovXHJcbi5oZWFkZXJJYWdle1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiA1OHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbn1cclxuXHJcbiNsb2dpbi1kcHtcclxuICAgIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDE0cHggMDtcclxuICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuOCk7XHJcbn1cclxuI2xvZ2luLWRwIC5oZWxwLWJsb2Nre1xyXG4gICAgZm9udC1zaXplOjEycHggICAgXHJcbn1cclxuI2xvZ2luLWRwIC5ib3R0b217XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjgpO1xyXG4gICAgYm9yZGVyLXRvcDoxcHggc29saWQgI2RkZDtcclxuICAgIGNsZWFyOmJvdGg7XHJcbiAgICBwYWRkaW5nOjE0cHg7XHJcbn1cclxuI2xvZ2luLWRwIC5zb2NpYWwtYnV0dG9uc3tcclxuICAgIG1hcmdpbjoxMnB4IDAgICAgXHJcbn1cclxuI2xvZ2luLWRwIC5zb2NpYWwtYnV0dG9ucyBhe1xyXG4gICAgd2lkdGg6IDQ5JTtcclxufVxyXG4jbG9naW4tZHAgLmZvcm0tZ3JvdXAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uYnRuLWZie1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzYjU5OTg7XHJcbn1cclxuLmJ0bi1mYjpob3ZlcntcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojNDk2ZWJjIFxyXG59XHJcbi5idG4tdHd7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzU1YWNlZTtcclxufVxyXG4uYnRuLXR3OmhvdmVye1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM1OWI1ZmE7XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDo3NjhweCl7XHJcbiAgICAjbG9naW4tZHB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICAgICNsb2dpbi1kcCAuYm90dG9te1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgYm9yZGVyLXRvcDowIG5vbmU7XHJcbiAgICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/heder-info/heder-info.component.ts":
/*!****************************************************!*\
  !*** ./src/app/heder-info/heder-info.component.ts ***!
  \****************************************************/
/*! exports provided: HederInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HederInfoComponent", function() { return HederInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_info_login_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login-info/login-info.component */ "./src/app/login-info/login-info.component.ts");
/* harmony import */ var _Auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Auth/authentication.service */ "./src/app/Auth/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_info_logout_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login-info/logout-info.component */ "./src/app/login-info/logout-info.component.ts");






var HederInfoComponent = /** @class */ (function () {
    // { "userId": "101", "userName": "Anup Ghosh", "token": "665546", "firstName": "Anup", "lastName": "Ghosh", "userType": "Admin", "userRole": "Admin", "mailId": "anupghosh9635@gmail.com", "isValidUser": "true", "agencyName": "Ghosh Agency" }
    function HederInfoComponent(authService, loginService, router, logoutInfoComponent) {
        var _this = this;
        this.authService = authService;
        this.loginService = loginService;
        this.router = router;
        this.logoutInfoComponent = logoutInfoComponent;
        this.isProfileDataShoW = false;
        this.isAlreadyLogIn = false;
        this.userName = 'Profile';
        var currentUser = localStorage.getItem('currentUser');
        if (currentUser) {
            this.isProfileDataShoW = true;
        }
        try {
            var obj = JSON.parse(currentUser);
            if (obj) {
                this.userName = obj.userName;
                this.isAlreadyLogIn = true;
            }
        }
        catch (error) {
        }
        this.subscription = this.logoutInfoComponent.getName().subscribe(function (message) {
            console.log('subscription----------------------');
            _this.userName = message;
        });
        // else{
        //   this.router.navigate(['login']);
        // }
        // if(loginService.getLoggedInName){
        //   this.changeName(true);
        // }
        // this.isLoggedIn$ = loginService.isLoggedIn;
        // loginService.loggedInNameDay().subscribe(name => {console.log("----------------loggedInName----"+name)});
    }
    HederInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.loginService.isLoggedIn.subscribe( name =>{ this.changeName(name); console.log("----------------name----"+name) });
        // this.loginService.loggedInNameDay.subscribe(name => {console.log("----------------loggedInName----"+name)});
        this.authService.getLoggedInName.subscribe(function (name) { _this.changeName(name); console.log('getLoggedInName subscribe*************' + name); });
    };
    HederInfoComponent.prototype.changeName = function (name) {
        if (name) {
            console.log('inside-------------------changeName ');
            this.isProfileDataShoW = true;
            this.userName = name;
            this.isAlreadyLogIn = true;
        }
    };
    HederInfoComponent.prototype.logOutUser = function () {
        localStorage.clear();
        sessionStorage.clear();
        this.isProfileDataShoW = false;
        this.userName = 'Profile';
        this.isAlreadyLogIn = false;
        this.router.navigate(['home']);
    };
    HederInfoComponent.ctorParameters = function () { return [
        { type: _Auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
        { type: _login_info_login_info_component__WEBPACK_IMPORTED_MODULE_2__["LoginInfoComponent"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _login_info_logout_info_component__WEBPACK_IMPORTED_MODULE_5__["LogoutInfoComponent"] }
    ]; };
    HederInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-heder-info',
            template: __webpack_require__(/*! raw-loader!./heder-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/heder-info/heder-info.component.html"),
            styles: [__webpack_require__(/*! ./heder-info.component.css */ "./src/app/heder-info/heder-info.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], HederInfoComponent);
    return HederInfoComponent;
}());



/***/ }),

/***/ "./src/app/home/home-info.component.css":
/*!**********************************************!*\
  !*** ./src/app/home/home-info.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* oposit 90 de tramsfrom */\r\n.itnDay span {\r\n    display: inline-block;\r\n    font-size: 18px;\r\n    color: #60c270;\r\n    position: absolute;\r\n    left: 5px;\r\n    top: 24px;\r\n    letter-spacing: -1px;\r\n    font-weight: normal;\r\n    text-transform: uppercase;\r\n    transform: rotate(-90deg);\r\n    transition: all 0.3s ease;\r\n    -webkit-transition: all 0.3s ease;\r\n    -moz-transition: all 0.3s ease;\r\n}\r\na:hover {\r\n    background: rgb(166, 204, 108);\r\n    color: white;\r\n    text-decoration: none;\r\n}\r\nspan.click-to-top span {\r\n    display: none; \r\n    position: absolute; \r\n     bottom: 0;\r\n   /*  left: 0; \r\n     right: 0;  */\r\n     background: #333;\r\n      color: #fff; \r\n    }\r\nspan.click-to-top:hover span {\r\n    display: flex;\r\n    border-radius:2px; \r\n    width: 10em;  \r\n    text-align: center;      \r\n}\r\n.container {\r\n    width: 97%;\r\n}\r\nimg {\r\n    vertical-align: middle;\r\n    width: 100%;\r\n}\r\n.outlet-view{\r\n    padding: 10px;\r\n    color: rgb(10, 10, 10);\r\n    position: relative;\r\n    font-family: \"Times New Roman;\"\r\n}\r\n.agency-color{\r\n    color: #c46f06;\r\n    margin-top: 1px;\r\n}\r\n.day-count {\r\n    color: #fa8f0b;\r\n    font-family: Lato,sans-serif!important;\r\n}\r\n.submit-info { \r\n    font-family: \"Segoe Script\";\r\n}\r\ninput[type=\"submit\"] {\r\n    border: none;\r\n    margin: 1em 1em 0 0;\r\n    font-size: 14px;\r\n    color: #fff;\r\n    background: #da9d40;\r\n    padding: 10px 50px;\r\n    text-transform: capitalize;\r\n    letter-spacing: 1px;\r\n    -webkit-appearance: none;\r\n    transition: 0.5s all;\r\n    -webkit-transition: 0.5s all;\r\n    -moz-transition: 0.5s all;\r\n}\r\ninput[type=\"submit\"]:hover {\r\n    background: rgb(183, 201, 156);\r\n}\r\n.details-button{\r\n    margin: 1em 1em 0 0;\r\n    font-size: 14px;\r\n    padding: 7px;\r\n    border: 1px;\r\n}\r\n.bottomright {\r\n    position: absolute;\r\n    bottom: 8px;\r\n    right: 1px;\r\n    font-size: 18px;\r\n  }\r\n.margin1{\r\n    margin: 1px;\r\n}\r\n  \r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLWluZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQkFBMkI7QUFDM0I7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFNBQVM7SUFDVCxvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUd6Qix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGlDQUFpQztJQUNqQyw4QkFBOEI7QUFDbEM7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCO0FBSUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0tBQ2pCLFNBQVM7R0FDWDtpQkFDYztLQUNaLGdCQUFnQjtNQUNmLFdBQVc7SUFDYjtBQUNKO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBR0E7SUFDSSxVQUFVO0FBQ2Q7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCO0FBQ0o7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBRUE7SUFDSSxjQUFjO0lBQ2Qsc0NBQXNDO0FBQzFDO0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7QUFFQztJQUNHLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLG9CQUFvQjtJQUNwQiw0QkFBNEI7SUFDNUIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSw4QkFBOEI7QUFDbEM7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsZUFBZTtFQUNqQjtBQUNGO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLWluZm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIG9wb3NpdCA5MCBkZSB0cmFtc2Zyb20gKi9cclxuLml0bkRheSBzcGFuIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjNjBjMjcwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNXB4O1xyXG4gICAgdG9wOiAyNHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbmE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDE2NiwgMjA0LCAxMDgpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5cclxuXHJcbnNwYW4uY2xpY2stdG8tdG9wIHNwYW4ge1xyXG4gICAgZGlzcGxheTogbm9uZTsgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gICAgIGJvdHRvbTogMDtcclxuICAgLyogIGxlZnQ6IDA7IFxyXG4gICAgIHJpZ2h0OiAwOyAgKi9cclxuICAgICBiYWNrZ3JvdW5kOiAjMzMzO1xyXG4gICAgICBjb2xvcjogI2ZmZjsgXHJcbiAgICB9XHJcbnNwYW4uY2xpY2stdG8tdG9wOmhvdmVyIHNwYW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJvcmRlci1yYWRpdXM6MnB4OyBcclxuICAgIHdpZHRoOiAxMGVtOyAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgICAgXHJcbn1cclxuXHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA5NyU7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5vdXRsZXQtdmlld3tcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBjb2xvcjogcmdiKDEwLCAxMCwgMTApO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuO1wiXHJcbn1cclxuXHJcbi5hZ2VuY3ktY29sb3J7XHJcbiAgICBjb2xvcjogI2M0NmYwNjtcclxuICAgIG1hcmdpbi10b3A6IDFweDtcclxufVxyXG5cclxuLmRheS1jb3VudCB7XHJcbiAgICBjb2xvcjogI2ZhOGYwYjtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvLHNhbnMtc2VyaWYhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3VibWl0LWluZm8geyBcclxuICAgIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFNjcmlwdFwiO1xyXG59XHJcblxyXG4gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW46IDFlbSAxZW0gMCAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGE5ZDQwO1xyXG4gICAgcGFkZGluZzogMTBweCA1MHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cyBhbGw7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXMgYWxsO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiAwLjVzIGFsbDtcclxufSBcclxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTgzLCAyMDEsIDE1Nik7XHJcbn1cclxuXHJcbi5kZXRhaWxzLWJ1dHRvbntcclxuICAgIG1hcmdpbjogMWVtIDFlbSAwIDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICBib3JkZXI6IDFweDtcclxufVxyXG5cclxuXHJcbi5ib3R0b21yaWdodCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDhweDtcclxuICAgIHJpZ2h0OiAxcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG4ubWFyZ2luMXtcclxuICAgIG1hcmdpbjogMXB4O1xyXG59XHJcbiAgXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home-info.component.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-info.component.ts ***!
  \*********************************************/
/*! exports provided: HomeInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeInfoComponent", function() { return HomeInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeInfoComponent = /** @class */ (function () {
    function HomeInfoComponent() {
        this.imagePath = 'assets/images/icon/icon.jpg';
        this.alcoholIcon = 'assets/images/icon/bear.jpg';
        this.carIcon = 'assets/images/icon/car.jpg';
        this.foodIcon = 'assets/images/icon/food.jpg';
        this.wifiIcon = 'assets/images/icon/wifi.jpg';
        this.planeIcon = 'assets/images/icon/plane.jpg';
        this.statRatingValue = 3;
        this.productId = 50;
        this.iconList = ['assets/images/icon/bear.jpg',
            'assets/images/icon/car.jpg',
            'assets/images/icon/food.jpg',
            'assets/images/icon/wifi.jpg',
            'assets/images/icon/plane.jpg'
        ];
    }
    HomeInfoComponent.prototype.ngOnInit = function () {
    };
    HomeInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-info',
            template: __webpack_require__(/*! raw-loader!./home-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home-info.component.html"),
            styles: [__webpack_require__(/*! ./home-info.component.css */ "./src/app/home/home-info.component.css")]
        })
    ], HomeInfoComponent);
    return HomeInfoComponent;
}());



/***/ }),

/***/ "./src/app/login-info/login-info.component.css":
/*!*****************************************************!*\
  !*** ./src/app/login-info/login-info.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loader-info {\r\n    border: 4px solid #f3f3f3;\r\n    border-radius: 50%;\r\n    border-top: 4px solid black;\r\n    width: 12px;\r\n    height: 12px;\r\n    -webkit-animation: spin 2s linear infinite; /* Safari */\r\n    animation: spin 2s linear infinite;\r\n  }\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4taW5mby9sb2dpbi1pbmZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsWUFBWTtJQUNaLDBDQUEwQyxFQUFFLFdBQVc7SUFDdkQsa0NBQWtDO0VBQ3BDIiwiZmlsZSI6InNyYy9hcHAvbG9naW4taW5mby9sb2dpbi1pbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGVyLWluZm8ge1xyXG4gICAgYm9yZGVyOiA0cHggc29saWQgI2YzZjNmMztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCBibGFjaztcclxuICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlOyAvKiBTYWZhcmkgKi9cclxuICAgIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgfVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/login-info/login-info.component.ts":
/*!****************************************************!*\
  !*** ./src/app/login-info/login-info.component.ts ***!
  \****************************************************/
/*! exports provided: LoginInfoComponent, User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginInfoComponent", function() { return LoginInfoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Auth_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Auth/authentication.service */ "./src/app/Auth/authentication.service.ts");





var LoginInfoComponent = /** @class */ (function () {
    // @Output() getLoggedInName: EventEmitter<String> = new EventEmitter();
    // public loggedIn = new BehaviorSubject<boolean>(false); // {1}
    // get isLoggedIn(): Observable<boolean>{ 
    //   return this.loggedIn.asObservable(); // {2} 
    // }
    // public loggedInName = new Subject<boolean>(); 
    // get loggedInNameDay() : Observable<boolean>{ 
    //   return this.loggedInName.asObservable(); // {2} 
    // }
    function LoginInfoComponent(formBuilder, route, router, authenticationService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.submitted = false;
        this.isErrorMessage = false;
        this.isSuccessMessage = false;
        this.isDisabled = false;
        this.userResponse = { "userId": "10001", "userName": "admin", "token": "TFoih8789903r2r-eg4um", "firstName": "anup", "lastName": "Ghosh", "userType": "Ädmin", "userRole": "Admin", "mailId": "anupghosh9635@gmail.com", "error": null, "isValidUser": "true", "agencyId": "101", "agencyName": "Anup Tavels", "currency": "INR", "agencyReview": "4" };
    }
    LoginInfoComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    Object.defineProperty(LoginInfoComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () {
            return this.loginForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    LoginInfoComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
        this.submitted = true;
        console.log('this.f-----username--------' + JSON.stringify(this.f.username.value));
        console.log('this.f-------password------' + JSON.stringify(this.f.password.value));
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        var userName = this.f.username.value;
        var password = this.f.password.value;
        this.loading = true;
        this.authenticationService.loginValidate(userName, password).subscribe({
            next: function (products) {
                _this.response = products;
                if (_this.response.isValidUser == 'true') {
                    _this.getSuccessUpdate();
                    if ('ADMIN' == _this.response.userRole.toLocaleUpperCase()) {
                        _this.router.navigate(['admin']);
                    }
                    else {
                        _this.router.navigate(['profile']);
                    }
                    localStorage.setItem('currentUser', JSON.stringify(_this.response));
                    sessionStorage.setItem('sessionUser', JSON.stringify(_this.response));
                    // this.getLoggedInName.emit(this.response.firstName);
                    // this.loggedIn.next(true);
                    // this.loggedInName.next(true);
                }
                else {
                    _this.getErrorUpdate();
                }
                _this.loading = false;
                // this.filteredProducts = this.products;
            },
            error: function (err) {
                console.log('inside errrrrrrr' + err);
                _this.errorMessage = err;
                if ('ADMIN' == userName.toLocaleUpperCase() && 'ADMIN@123' == password.toLocaleUpperCase()) {
                    _this.getSuccessUpdate();
                    localStorage.setItem('currentUser', JSON.stringify(_this.userResponse));
                    sessionStorage.setItem('sessionUser', JSON.stringify(_this.userResponse));
                    _this.router.navigate(['admin']);
                }
                else {
                    _this.getErrorUpdate();
                }
                _this.loading = false;
            }
        });
    };
    LoginInfoComponent.prototype.getErrorUpdate = function () {
        this.isErrorMessage = true;
        var data = this;
        setTimeout(function () {
            data.isErrorMessage = false;
            // console.log('insidesetTimeout****************************************' + data.isErrorMessage)
        }, 2000);
    };
    LoginInfoComponent.prototype.getSuccessUpdate = function () {
        this.isSuccessMessage = true;
        var data = this;
        setTimeout(function () {
            data.isSuccessMessage = false;
            // console.log('insidesetTimeout****************************************' + data.isSuccessMessage)
        }, 2000);
    };
    LoginInfoComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _Auth_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
    ]; };
    LoginInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-info',
            template: __webpack_require__(/*! raw-loader!./login-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/login-info/login-info.component.html"),
            styles: [__webpack_require__(/*! ./login-info.component.css */ "./src/app/login-info/login-info.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], LoginInfoComponent);
    return LoginInfoComponent;
}());

var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/login-info/logout-info.component.css":
/*!******************************************************!*\
  !*** ./src/app/login-info/logout-info.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* The magic here that makes animations wait */ \r\n.js-loading *,\r\n.js-loading *:before,\r\n.js-loading *:after {\r\n  -webkit-animation-play-state: paused !important;\r\n          animation-play-state: paused !important;\r\n} \r\n.animated-header {\r\n  /* background: #000; */\r\n  /* position: absolute; */\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n  overflow: hidden;\r\n  height: 590px;\r\n} \r\n.animated-header:before {\r\n  -webkit-animation: show-background 60s .5s cubic-bezier(0,1,.5,1) forwards;\r\n          animation: show-background 60s .5s cubic-bezier(0,1,.5,1) forwards;\r\n  /* background: url(https://cssanimation.rocks/images/random/space2.jpg) repeat center; */\r\n  background-size: cover;\r\n  content: \"\";\r\n  opacity: 0;\r\n  height: 125vh;\r\n  position: absolute;\r\n  left: -10%;\r\n  top: -10%;\r\n  width: 100%;\r\n} \r\n.loading {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  color: #aaa;\r\n  font-size: 48px;\r\n  display: none;\r\n} \r\n.js-loading .loading {\r\n  display: block;\r\n} \r\n.earth {\r\n  width: 20%;\r\n  height: 200px;\r\n  position: absolute;\r\n    top: calc(50% - 100px);\r\n    left: calc(50% - 100px);\r\n} \r\n@media (max-width: 768px){\r\n    .earth {\r\n        width: 31%;\r\n        position: absolute;\r\n        top: calc(50% - 100px);\r\n        left: calc(50% - 63px);\r\n    }\r\n} \r\n.moon {\r\n  -webkit-animation: spin 10s linear infinite;\r\n          animation: spin 10s linear infinite;\r\n  width: 5%;\r\n  height: 50px;\r\n  position: absolute;\r\n    top: calc(50% - 200px);\r\n    left: calc(50% - 200px);\r\n  transform-origin: 200px 200px;\r\n} \r\n@media (max-width: 768px){\r\n    .moon {\r\n        -webkit-animation: spin 6s linear infinite;\r\n        animation: spin 6s linear infinite;\r\n        width: 9%;\r\n        height: 50px;\r\n        position: absolute;\r\n        top: calc(50% - 186px);\r\n        left: calc(50% - 140px);\r\n        transform-origin: 140px 140px;\r\n    }\r\n} \r\n.earth img, .moon img {\r\n  -webkit-animation: show-on-load 1s .5s cubic-bezier(0,1.6,.6,1) forwards;\r\n          animation: show-on-load 1s .5s cubic-bezier(0,1.6,.6,1) forwards;\r\n  border-radius: 50%;\r\n  opacity: 0;\r\n  width: 100%;\r\n  box-shadow: 0 0 12em 1em rgba(110, 140, 200, .6);\r\n} \r\n.moon img {\r\n  animation: fade-in 2s 1s cubic-bezier(0,1.5,1,1) forwards, spin 30s linear reverse infinite;\r\n} \r\n@-webkit-keyframes spin {\r\n  to {\r\n    transform: rotateZ(360deg);\r\n  }\r\n} \r\n@keyframes spin {\r\n  to {\r\n    transform: rotateZ(360deg);\r\n  }\r\n} \r\n@-webkit-keyframes show-background {\r\n  0% {\r\n    opacity: 0;\r\n    transform: none;\r\n  }\r\n  30% {\r\n    opacity: .5;\r\n  }\r\n  100% {\r\n    opacity: .5;\r\n    transform: scale(.8)\r\n  }\r\n} \r\n@keyframes show-background {\r\n  0% {\r\n    opacity: 0;\r\n    transform: none;\r\n  }\r\n  30% {\r\n    opacity: .5;\r\n  }\r\n  100% {\r\n    opacity: .5;\r\n    transform: scale(.8)\r\n  }\r\n} \r\n@-webkit-keyframes show-on-load {\r\n  0% {\r\n    opacity: 0;\r\n    transform: scale(.5);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    transform: none;\r\n  }\r\n} \r\n@keyframes show-on-load {\r\n  0% {\r\n    opacity: 0;\r\n    transform: scale(.5);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    transform: none;\r\n  }\r\n} \r\n@-webkit-keyframes fade-in {\r\n  to {\r\n    opacity: 1;\r\n  }\r\n} \r\n@keyframes fade-in {\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4taW5mby9sb2dvdXQtaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhDQUE4QztBQUM5Qzs7O0VBR0UsK0NBQXVDO1VBQXZDLHVDQUF1QztBQUN6QztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHdCQUF3QjtJQUN0QixNQUFNO0lBQ04sUUFBUTtJQUNSLFNBQVM7SUFDVCxPQUFPO0VBQ1QsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjtBQUVBO0VBQ0UsMEVBQWtFO1VBQWxFLGtFQUFrRTtFQUNsRSx3RkFBd0Y7RUFDeEYsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULFdBQVc7QUFDYjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLFdBQVc7RUFDWCxlQUFlO0VBQ2YsYUFBYTtBQUNmO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLGtCQUFrQjtJQUNoQixzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSTtRQUNJLFVBQVU7UUFDVixrQkFBa0I7UUFDbEIsc0JBQXNCO1FBQ3RCLHNCQUFzQjtJQUMxQjtBQUNKO0FBRUE7RUFDRSwyQ0FBbUM7VUFBbkMsbUNBQW1DO0VBQ25DLFNBQVM7RUFDVCxZQUFZO0VBQ1osa0JBQWtCO0lBQ2hCLHNCQUFzQjtJQUN0Qix1QkFBdUI7RUFDekIsNkJBQTZCO0FBQy9CO0FBQ0E7SUFDSTtRQUNJLDBDQUEwQztRQUMxQyxrQ0FBa0M7UUFDbEMsU0FBUztRQUNULFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsc0JBQXNCO1FBQ3RCLHVCQUF1QjtRQUN2Qiw2QkFBNkI7SUFDakM7QUFDSjtBQUNBO0VBQ0Usd0VBQWdFO1VBQWhFLGdFQUFnRTtFQUNoRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxnREFBZ0Q7QUFDbEQ7QUFFQTtFQUNFLDJGQUEyRjtBQUM3RjtBQUVBO0VBQ0U7SUFDRSwwQkFBMEI7RUFDNUI7QUFDRjtBQUpBO0VBQ0U7SUFDRSwwQkFBMEI7RUFDNUI7QUFDRjtBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxXQUFXO0lBQ1g7RUFDRjtBQUNGO0FBWkE7RUFDRTtJQUNFLFVBQVU7SUFDVixlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLFdBQVc7SUFDWDtFQUNGO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UsVUFBVTtJQUNWLGVBQWU7RUFDakI7QUFDRjtBQVRBO0VBQ0U7SUFDRSxVQUFVO0lBQ1Ysb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsZUFBZTtFQUNqQjtBQUNGO0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtBQUNGO0FBSkE7RUFDRTtJQUNFLFVBQVU7RUFDWjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbG9naW4taW5mby9sb2dvdXQtaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogVGhlIG1hZ2ljIGhlcmUgdGhhdCBtYWtlcyBhbmltYXRpb25zIHdhaXQgKi8gXHJcbi5qcy1sb2FkaW5nICosXHJcbi5qcy1sb2FkaW5nICo6YmVmb3JlLFxyXG4uanMtbG9hZGluZyAqOmFmdGVyIHtcclxuICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hbmltYXRlZC1oZWFkZXIge1xyXG4gIC8qIGJhY2tncm91bmQ6ICMwMDA7ICovXHJcbiAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgaGVpZ2h0OiA1OTBweDtcclxufVxyXG5cclxuLmFuaW1hdGVkLWhlYWRlcjpiZWZvcmUge1xyXG4gIGFuaW1hdGlvbjogc2hvdy1iYWNrZ3JvdW5kIDYwcyAuNXMgY3ViaWMtYmV6aWVyKDAsMSwuNSwxKSBmb3J3YXJkcztcclxuICAvKiBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9jc3NhbmltYXRpb24ucm9ja3MvaW1hZ2VzL3JhbmRvbS9zcGFjZTIuanBnKSByZXBlYXQgY2VudGVyOyAqL1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBvcGFjaXR5OiAwO1xyXG4gIGhlaWdodDogMTI1dmg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IC0xMCU7XHJcbiAgdG9wOiAtMTAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubG9hZGluZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBjb2xvcjogI2FhYTtcclxuICBmb250LXNpemU6IDQ4cHg7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmpzLWxvYWRpbmcgLmxvYWRpbmcge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uZWFydGgge1xyXG4gIHdpZHRoOiAyMCU7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IGNhbGMoNTAlIC0gMTAwcHgpO1xyXG4gICAgbGVmdDogY2FsYyg1MCUgLSAxMDBweCk7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXtcclxuICAgIC5lYXJ0aCB7XHJcbiAgICAgICAgd2lkdGg6IDMxJTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDEwMHB4KTtcclxuICAgICAgICBsZWZ0OiBjYWxjKDUwJSAtIDYzcHgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubW9vbiB7XHJcbiAgYW5pbWF0aW9uOiBzcGluIDEwcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgd2lkdGg6IDUlO1xyXG4gIGhlaWdodDogNTBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IGNhbGMoNTAlIC0gMjAwcHgpO1xyXG4gICAgbGVmdDogY2FsYyg1MCUgLSAyMDBweCk7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogMjAwcHggMjAwcHg7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXtcclxuICAgIC5tb29uIHtcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiA2cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBzcGluIDZzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgICB3aWR0aDogOSU7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IGNhbGMoNTAlIC0gMTg2cHgpO1xyXG4gICAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gMTQwcHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDE0MHB4IDE0MHB4O1xyXG4gICAgfVxyXG59XHJcbi5lYXJ0aCBpbWcsIC5tb29uIGltZyB7XHJcbiAgYW5pbWF0aW9uOiBzaG93LW9uLWxvYWQgMXMgLjVzIGN1YmljLWJlemllcigwLDEuNiwuNiwxKSBmb3J3YXJkcztcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgb3BhY2l0eTogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2hhZG93OiAwIDAgMTJlbSAxZW0gcmdiYSgxMTAsIDE0MCwgMjAwLCAuNik7XHJcbn1cclxuXHJcbi5tb29uIGltZyB7XHJcbiAgYW5pbWF0aW9uOiBmYWRlLWluIDJzIDFzIGN1YmljLWJlemllcigwLDEuNSwxLDEpIGZvcndhcmRzLCBzcGluIDMwcyBsaW5lYXIgcmV2ZXJzZSBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzcGluIHtcclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMzYwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2hvdy1iYWNrZ3JvdW5kIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiBub25lO1xyXG4gIH1cclxuICAzMCUge1xyXG4gICAgb3BhY2l0eTogLjU7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogLjU7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC44KVxyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzaG93LW9uLWxvYWQge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC41KTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlLWluIHtcclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/login-info/logout-info.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/login-info/logout-info.component.ts ***!
  \*****************************************************/
/*! exports provided: LogoutInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutInfoComponent", function() { return LogoutInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var LogoutInfoComponent = /** @class */ (function () {
    function LogoutInfoComponent() {
        this.message = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.earthIng = 'assets/images/logo/earth.png';
        this.moonIng = 'assets/images/logo/moon.png';
    }
    LogoutInfoComponent.prototype.ngOnInit = function () {
    };
    LogoutInfoComponent.prototype.logoutUser = function () {
        console.log('isufgeuwh-brfdbklnlk');
        localStorage.clear();
        sessionStorage.clear();
        this.message.next('Profile');
    };
    LogoutInfoComponent.prototype.getName = function () {
        console.log('getName clllllllllllllllllllllllll');
        return this.message.asObservable();
    };
    LogoutInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logout-info',
            template: __webpack_require__(/*! raw-loader!./logout-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/login-info/logout-info.component.html"),
            styles: [__webpack_require__(/*! ./logout-info.component.css */ "./src/app/login-info/logout-info.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], LogoutInfoComponent);
    return LogoutInfoComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n#color{\r\n    background: #33cc99;\r\n    margin-top: -50px;\r\n}\r\n\r\n/* *{\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n  } */\r\n\r\n*::before,\r\n  *::after {\r\n      content: '';\r\n    position: absolute;\r\n  }\r\n\r\nbody{\r\n      background: #1B0034;\r\n      background-image: linear-gradient( 135deg, #1B0034 10%, #33265C 100%);\r\n      background-attachment: fixed;\r\n      background-size: cover;\r\n  \r\n  }\r\n\r\n.error {\r\n      width: 100%;\r\n      height: auto;\r\n      margin: 50px auto;\r\n      text-align: center;\r\n      margin-bottom: 0;\r\n  }\r\n\r\n.dracula{\r\n      width: 230px;\r\n      height: 300px;\r\n      display: inline-block;\r\n      margin: auto;\r\n      overflowX: hidden;\r\n  }\r\n\r\n.error .p {\r\n      height: 100%;\r\n      color: #C0D7DD; \r\n      font-size: 280px;\r\n      margin: 50px;\r\n      display: inline-block;\r\n      font-family: 'Anton', sans-serif;\r\n      font-family: 'Combo', cursive;\r\n  }\r\n\r\n.con {\r\n    width: 500px;\r\n    height: 500px;\r\n    position: relative;\r\n    margin: 9% auto 0;\r\n  -webkit-animation: ani9 0.7s ease-in-out infinite  alternate ;\r\n          animation: ani9 0.7s ease-in-out infinite  alternate ;}\r\n\r\n@-webkit-keyframes ani9 {\r\n      0%{\r\n      transform: translateY(10px);\t\r\n    }\r\n    \r\n    100%{\r\n      transform: translateY(30px);\t\r\n    }\r\n  \r\n  }\r\n\r\n@keyframes ani9 {\r\n      0%{\r\n      transform: translateY(10px);\t\r\n    }\r\n    \r\n    100%{\r\n      transform: translateY(30px);\t\r\n    }\r\n  \r\n  }\r\n\r\n.con > * {\r\n    position: absolute;\r\n    /* top: 0; left: 0; */\r\n  }\r\n\r\n.hair{\r\n    top: -20px;\r\n    width: 210px;\r\n    height: 200px;\r\n    background: #C0D7DD;\r\n    border-radius: 0 50% 0 50%;\r\n    transform: rotate(45deg);\r\n    background: #33265C;\r\n  }\r\n\r\n.hair-r{\r\n    left: 20px;\r\n    width: 210px;\r\n    height: 200px;\r\n    background: #C0D7DD;\r\n    border-radius: 0 50% 0 50%;\r\n    transform: rotate(45deg);\r\n    background: #33265C;\r\n  \r\n  }\r\n\r\n.head {\r\n    width: 200px;\r\n    height: 200px;\r\n    background: #C0D7DD;\r\n    border-radius: 0 50% 0 50%;\r\n    transform: rotate(45deg);\r\n  }\r\n\r\n.eye {\r\n   width: 20px; height:20px;\r\n    background: #111113;\r\n    border-radius: 50%;\r\n    top: 15%; left: 11.5%;\r\n    transition: .3s linear;\r\n  }\r\n\r\n.eye-r{left: 24%;}\r\n\r\n.mouth {\r\n    width: 60px; \r\n    height: 20px;\r\n    background: #840021;\r\n    top: 20%;\r\n    left: 14%;\r\n    border-radius: 50% / 0 0 100% 100%;\r\n  }\r\n\r\n.mouth::after{\r\n  \r\n    border-left: 5px solid transparent;\r\n    border-right: 5px solid transparent;\r\n    border-top: 13px solid #FFFFFF;\r\n    left: 10px;\r\n    \r\n  }\r\n\r\n.mouth::before{\r\n    border-left: 5px solid transparent;\r\n    border-right: 5px solid transparent;\r\n    border-top: 13px solid #FFFFFF;\r\n    left: 40px;\r\n  }\r\n\r\n.blod {\r\n    width: 8px;\r\n    height: 20px;\r\n    background: #840021;\r\n    top: 23%; left: 17%; \r\n    border-radius: 20px;\r\n  }\r\n\r\n.blod::after{\r\n     width: 2px;\r\n    height: 10px;\r\n    background: #FFF;\r\n    top: 20%; left: 10%; \r\n    border-radius: 20px;\r\n    \r\n  }\r\n\r\n.blod2 {\r\n    top: 23%; left: 20%;\r\n    width: 13px;\r\n    height: 13px;\r\n    border-radius: 50% 50% 50% 0;\r\n    transform: rotate(130deg);\r\n    -webkit-animation: blod 2s linear infinite;\r\n            animation: blod 2s linear infinite;\r\n    opacity: 0;\r\n  }\r\n\r\n@-webkit-keyframes blod {\r\n    0%   {opacity: 1;}  \r\n    100%   {background:red; opacity: 0; top:50%;}\r\n    \r\n    \r\n  }\r\n\r\n@keyframes blod {\r\n    0%   {opacity: 1;}  \r\n    100%   {background:red; opacity: 0; top:50%;}\r\n    \r\n    \r\n  }\r\n\r\n/* page-ms */\r\n\r\n.page-ms {transform: translateY(-50px);}\r\n\r\n.error p.page-msg {\r\n      text-align: center;\r\n      color: #C0D7DD; \r\n      font-size: 30px;\r\n      font-family: 'Combo', cursive;\r\n      margin-bottom: 20px;\r\n  }\r\n\r\nbutton.go-back {\r\n          font-size: 30px;\r\n      font-family: 'Combo', cursive;\r\n      border: none;\r\n      padding: 10px 20px;\r\n      cursor: pointer;\r\n      transition: 0.3s linear;\r\n      z-index: 9;\r\n      border-radius: 10px;\r\n      background: #C0D7DD;\r\n      color: #33265C;\r\n      box-shadow: 0 0 10px 0 #C0D7DD;\r\n      margin-top: 20px;\r\n  }\r\n\r\nbutton:hover {box-shadow: 0 0 20px 0 #C0D7DD;}\r\n  \r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7Ozs7S0FJSzs7QUFJSDs7TUFFSSxXQUFXO0lBQ2Isa0JBQWtCO0VBQ3BCOztBQUVBO01BQ0ksbUJBQW1CO01BQ25CLHFFQUFxRTtNQUNyRSw0QkFBNEI7TUFDNUIsc0JBQXNCOztFQUUxQjs7QUFFQTtNQUNJLFdBQVc7TUFDWCxZQUFZO01BQ1osaUJBQWlCO01BQ2pCLGtCQUFrQjtNQUNsQixnQkFBZ0I7RUFDcEI7O0FBRUE7TUFDSSxZQUFZO01BQ1osYUFBYTtNQUNiLHFCQUFxQjtNQUNyQixZQUFZO01BQ1osaUJBQWlCO0VBQ3JCOztBQUVBO01BQ0ksWUFBWTtNQUNaLGNBQWM7TUFDZCxnQkFBZ0I7TUFDaEIsWUFBWTtNQUNaLHFCQUFxQjtNQUNyQixnQ0FBZ0M7TUFDaEMsNkJBQTZCO0VBQ2pDOztBQUdBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25CLDZEQUFxRDtVQUFyRCxxREFBcUQsQ0FBQzs7QUFFdEQ7TUFDSTtNQUNBLDJCQUEyQjtJQUM3Qjs7SUFFQTtNQUNFLDJCQUEyQjtJQUM3Qjs7RUFFRjs7QUFUQTtNQUNJO01BQ0EsMkJBQTJCO0lBQzdCOztJQUVBO01BQ0UsMkJBQTJCO0lBQzdCOztFQUVGOztBQUdBO0lBQ0Usa0JBQWtCO0lBQ2xCLHFCQUFxQjtFQUN2Qjs7QUFFQTtJQUNFLFVBQVU7SUFDVixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsd0JBQXdCO0lBQ3hCLG1CQUFtQjtFQUNyQjs7QUFDQTtJQUNFLFVBQVU7SUFDVixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsd0JBQXdCO0lBQ3hCLG1CQUFtQjs7RUFFckI7O0FBQ0E7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsd0JBQXdCO0VBQzFCOztBQUNBO0dBQ0MsV0FBVyxFQUFFLFdBQVc7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixRQUFRLEVBQUUsV0FBVztJQUNyQixzQkFBc0I7RUFDeEI7O0FBQ0EsT0FBTyxTQUFTLENBQUM7O0FBRWpCO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLFNBQVM7SUFDVCxrQ0FBa0M7RUFDcEM7O0FBQ0E7O0lBRUUsa0NBQWtDO0lBQ2xDLG1DQUFtQztJQUNuQyw4QkFBOEI7SUFDOUIsVUFBVTs7RUFFWjs7QUFDQTtJQUNFLGtDQUFrQztJQUNsQyxtQ0FBbUM7SUFDbkMsOEJBQThCO0lBQzlCLFVBQVU7RUFDWjs7QUFFQTtJQUNFLFVBQVU7SUFDVixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFFBQVEsRUFBRSxTQUFTO0lBQ25CLG1CQUFtQjtFQUNyQjs7QUFDQTtLQUNHLFVBQVU7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFFBQVEsRUFBRSxTQUFTO0lBQ25CLG1CQUFtQjs7RUFFckI7O0FBQ0E7SUFDRSxRQUFRLEVBQUUsU0FBUztJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLDRCQUE0QjtJQUM1Qix5QkFBeUI7SUFDekIsMENBQWtDO1lBQWxDLGtDQUFrQztJQUNsQyxVQUFVO0VBQ1o7O0FBQ0E7SUFDRSxNQUFNLFVBQVUsQ0FBQztJQUNqQixRQUFRLGNBQWMsRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDOzs7RUFHOUM7O0FBTEE7SUFDRSxNQUFNLFVBQVUsQ0FBQztJQUNqQixRQUFRLGNBQWMsRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDOzs7RUFHOUM7O0FBSUEsWUFBWTs7QUFDWixVQUFVLDRCQUE0QixDQUFDOztBQUV2QztNQUNJLGtCQUFrQjtNQUNsQixjQUFjO01BQ2QsZUFBZTtNQUNmLDZCQUE2QjtNQUM3QixtQkFBbUI7RUFDdkI7O0FBQ0E7VUFDUSxlQUFlO01BQ25CLDZCQUE2QjtNQUM3QixZQUFZO01BQ1osa0JBQWtCO01BQ2xCLGVBQWU7TUFDZix1QkFBdUI7TUFDdkIsVUFBVTtNQUNWLG1CQUFtQjtNQUNuQixtQkFBbUI7TUFDbkIsY0FBYztNQUNkLDhCQUE4QjtNQUM5QixnQkFBZ0I7RUFDcEI7O0FBQ0EsY0FBYyw4QkFBOEIsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4jY29sb3J7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzNjYzk5O1xyXG4gICAgbWFyZ2luLXRvcDogLTUwcHg7XHJcbn1cclxuXHJcbi8qICp7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9ICovXHJcbiAgXHJcblxyXG5cclxuICAqOjpiZWZvcmUsXHJcbiAgKjo6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcbiAgXHJcbiAgYm9keXtcclxuICAgICAgYmFja2dyb3VuZDogIzFCMDAzNDtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCAxMzVkZWcsICMxQjAwMzQgMTAlLCAjMzMyNjVDIDEwMCUpO1xyXG4gICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIFxyXG4gIH1cclxuICBcclxuICAuZXJyb3Ige1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICBtYXJnaW46IDUwcHggYXV0bztcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuICBcclxuICAuZHJhY3VsYXtcclxuICAgICAgd2lkdGg6IDIzMHB4O1xyXG4gICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgb3ZlcmZsb3dYOiBoaWRkZW47XHJcbiAgfVxyXG4gIFxyXG4gIC5lcnJvciAucCB7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgY29sb3I6ICNDMEQ3REQ7IFxyXG4gICAgICBmb250LXNpemU6IDI4MHB4O1xyXG4gICAgICBtYXJnaW46IDUwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgZm9udC1mYW1pbHk6ICdBbnRvbicsIHNhbnMtc2VyaWY7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnQ29tYm8nLCBjdXJzaXZlO1xyXG4gIH1cclxuICBcclxuICBcclxuICAuY29uIHtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDklIGF1dG8gMDtcclxuICBhbmltYXRpb246IGFuaTkgMC43cyBlYXNlLWluLW91dCBpbmZpbml0ZSAgYWx0ZXJuYXRlIDt9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBhbmk5IHtcclxuICAgICAgMCV7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcdFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAxMDAle1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzBweCk7XHRcclxuICAgIH1cclxuICBcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmNvbiA+ICoge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLyogdG9wOiAwOyBsZWZ0OiAwOyAqL1xyXG4gIH1cclxuICBcclxuICAuaGFpcntcclxuICAgIHRvcDogLTIwcHg7XHJcbiAgICB3aWR0aDogMjEwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0MwRDdERDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgNTAlIDAgNTAlO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgYmFja2dyb3VuZDogIzMzMjY1QztcclxuICB9XHJcbiAgLmhhaXItcntcclxuICAgIGxlZnQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjEwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0MwRDdERDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgNTAlIDAgNTAlO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgYmFja2dyb3VuZDogIzMzMjY1QztcclxuICBcclxuICB9XHJcbiAgLmhlYWQge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNDMEQ3REQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDUwJSAwIDUwJTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICB9XHJcbiAgLmV5ZSB7XHJcbiAgIHdpZHRoOiAyMHB4OyBoZWlnaHQ6MjBweDtcclxuICAgIGJhY2tncm91bmQ6ICMxMTExMTM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB0b3A6IDE1JTsgbGVmdDogMTEuNSU7XHJcbiAgICB0cmFuc2l0aW9uOiAuM3MgbGluZWFyO1xyXG4gIH1cclxuICAuZXllLXJ7bGVmdDogMjQlO31cclxuICBcclxuICAubW91dGgge1xyXG4gICAgd2lkdGg6IDYwcHg7IFxyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzg0MDAyMTtcclxuICAgIHRvcDogMjAlO1xyXG4gICAgbGVmdDogMTQlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlIC8gMCAwIDEwMCUgMTAwJTtcclxuICB9XHJcbiAgLm1vdXRoOjphZnRlcntcclxuICBcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci10b3A6IDEzcHggc29saWQgI0ZGRkZGRjtcclxuICAgIGxlZnQ6IDEwcHg7XHJcbiAgICBcclxuICB9XHJcbiAgLm1vdXRoOjpiZWZvcmV7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItdG9wOiAxM3B4IHNvbGlkICNGRkZGRkY7XHJcbiAgICBsZWZ0OiA0MHB4O1xyXG4gIH1cclxuICBcclxuICAuYmxvZCB7XHJcbiAgICB3aWR0aDogOHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzg0MDAyMTtcclxuICAgIHRvcDogMjMlOyBsZWZ0OiAxNyU7IFxyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICB9XHJcbiAgLmJsb2Q6OmFmdGVye1xyXG4gICAgIHdpZHRoOiAycHg7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGO1xyXG4gICAgdG9wOiAyMCU7IGxlZnQ6IDEwJTsgXHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgXHJcbiAgfVxyXG4gIC5ibG9kMiB7XHJcbiAgICB0b3A6IDIzJTsgbGVmdDogMjAlO1xyXG4gICAgd2lkdGg6IDEzcHg7XHJcbiAgICBoZWlnaHQ6IDEzcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCUgNTAlIDUwJSAwO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTMwZGVnKTtcclxuICAgIGFuaW1hdGlvbjogYmxvZCAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICBAa2V5ZnJhbWVzIGJsb2Qge1xyXG4gICAgMCUgICB7b3BhY2l0eTogMTt9ICBcclxuICAgIDEwMCUgICB7YmFja2dyb3VuZDpyZWQ7IG9wYWNpdHk6IDA7IHRvcDo1MCU7fVxyXG4gICAgXHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLyogcGFnZS1tcyAqL1xyXG4gIC5wYWdlLW1zIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwcHgpO31cclxuICBcclxuICAuZXJyb3IgcC5wYWdlLW1zZyB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6ICNDMEQ3REQ7IFxyXG4gICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnQ29tYm8nLCBjdXJzaXZlO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICBidXR0b24uZ28tYmFjayB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnQ29tYm8nLCBjdXJzaXZlO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB0cmFuc2l0aW9uOiAwLjNzIGxpbmVhcjtcclxuICAgICAgei1pbmRleDogOTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgYmFja2dyb3VuZDogI0MwRDdERDtcclxuICAgICAgY29sb3I6ICMzMzI2NUM7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDAgI0MwRDdERDtcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcbiAgYnV0dG9uOmhvdmVyIHtib3gtc2hhZG93OiAwIDAgMjBweCAwICNDMEQ3REQ7fVxyXG4gIFxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");



var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent(app) {
        // app.setIsLeftPanalRequired(false);
    }
    // constructor(private router: Router) {
    //   router.events.subscribe((val) => {
    //     if(val instanceof NavigationEnd){
    //       let uri = val.url; 
    //       if('/welcome' == uri || '/profile' == uri || '/profile' == uri|| '/login' == uri || '/singup' == uri ){
    //         this.isParentDivActive = false;
    //       }else{ 
    //         this.isParentDivActive = true;
    //       }
    //       // console.log("URIiiiiiiiiiiiiiiiiiiiii------------"+uri) 
    //     }
    //   })
    //  }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent.ctorParameters = function () { return [
        { type: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"] }
    ]; };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        })
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/package-info/package-info.component.css":
/*!*********************************************************!*\
  !*** ./src/app/package-info/package-info.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.header-font{\r\n    font-family: \"Playball\", sans-serif;\r\n}\r\n\r\nh3.heading {\r\n    text-align: center;\r\n    font-size: 45px;\r\n    text-transform: capitalize;\r\n    color: #000;\r\n    margin-bottom: 50px;\r\n    font-weight: 300;\r\n    position: relative;\r\n}\r\n\r\nh3.heading:before {\r\n    content: '';\r\n    background: #da9d40;\r\n    height: 3px;\r\n    width: 20%;\r\n    bottom: -15%;\r\n    left: 40%;\r\n    position: absolute;\r\n}\r\n\r\n/*-- Popular Packages --*/\r\n\r\n.packages{\r\n\tpadding: 5em 0;\r\n}\r\n\r\n.packages_left img {\r\n    width: 100%;\r\n}\r\n\r\n.packages_left{\r\n    background: url('p1.jpg') no-repeat 0px 0px;\r\n\tbackground-size: cover;\r\n\tmin-height: 340px;\r\n\tpadding: 0 15px;\r\n}\r\n\r\n.packages_left1{\r\n    background: url('p2.jpg') no-repeat 0px 0px;\r\n\tbackground-size: cover;\r\n\tmin-height: 340px;\r\n}\r\n\r\n.packages_left2{\r\n    background: url('p3.jpg') no-repeat 0px 0px;\r\n\tbackground-size: cover;\r\n\tmin-height: 340px;\r\n}\r\n\r\n.packages_right h3 {\r\n    font-size: 26px;\r\n    font-weight: 400;\r\n    color: #fff;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.packages_right h4 {\r\n    font-size: 20px;\r\n    color: #e0e0e0;\r\n    margin: 15px 0;\r\n    font-weight: 400;\r\n}\r\n\r\n.packages_right p {\r\n    font-size: 14px;\r\n    line-height: 28px;\r\n    margin: 1em 0 2em;\r\n    color: #e0e0e0;\r\n}\r\n\r\n.packages_right a {\r\n    font-size: 15px;\r\n    color: #fff;\r\n    border: 1px solid #fff;\r\n    padding: 10px 20px;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n.packages_right a:hover {\r\n\tbackground: #fff; \r\n\tcolor: #333;\r\n}\r\n\r\n.packages_right {\r\n    padding: 4em 4em 5em;\r\n    background: #b52e31;\r\n}\r\n\r\n.packages_right1 {\r\n    background: #2b2b2b;\r\n}\r\n\r\n.packages_right2 {\r\n    background: #da9d40;\r\n}\r\n\r\n.package_middle_grid {\r\n    margin: 2em 0;\r\n}\r\n\r\n/*-- //Popular Packages --*/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFja2FnZS1pbmZvL3BhY2thZ2UtaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFVBQVU7SUFDVixZQUFZO0lBQ1osU0FBUztJQUNULGtCQUFrQjtBQUN0Qjs7QUFFQSx5QkFBeUI7O0FBQ3pCO0NBQ0MsY0FBYztBQUNmOztBQUNBO0lBQ0ksV0FBVztBQUNmOztBQUNBO0lBQ0ksMkNBQTJEO0NBQzlELHNCQUFzQjtDQUN0QixpQkFBaUI7Q0FDakIsZUFBZTtBQUNoQjs7QUFDQTtJQUNJLDJDQUEyRDtDQUM5RCxzQkFBc0I7Q0FDdEIsaUJBQWlCO0FBQ2xCOztBQUNBO0lBQ0ksMkNBQTJEO0NBQzlELHNCQUFzQjtDQUN0QixpQkFBaUI7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFDQTtDQUNDLGdCQUFnQjtDQUNoQixXQUFXO0FBQ1o7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksYUFBYTtBQUNqQjs7QUFDQSwyQkFBMkIiLCJmaWxlIjoic3JjL2FwcC9wYWNrYWdlLWluZm8vcGFja2FnZS1pbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmhlYWRlci1mb250e1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUGxheWJhbGxcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaDMuaGVhZGluZyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDQ1cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuaDMuaGVhZGluZzpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGE5ZDQwO1xyXG4gICAgaGVpZ2h0OiAzcHg7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgYm90dG9tOiAtMTUlO1xyXG4gICAgbGVmdDogNDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4vKi0tIFBvcHVsYXIgUGFja2FnZXMgLS0qL1xyXG4ucGFja2FnZXN7XHJcblx0cGFkZGluZzogNWVtIDA7XHJcbn1cclxuLnBhY2thZ2VzX2xlZnQgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5wYWNrYWdlc19sZWZ0e1xyXG4gICAgYmFja2dyb3VuZDogdXJsKHNyYy9hc3NldHMvaW1hZ2VzL3AxLmpwZykgbm8tcmVwZWF0IDBweCAwcHg7XHJcblx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHRtaW4taGVpZ2h0OiAzNDBweDtcclxuXHRwYWRkaW5nOiAwIDE1cHg7XHJcbn1cclxuLnBhY2thZ2VzX2xlZnQxe1xyXG4gICAgYmFja2dyb3VuZDogdXJsKHNyYy9hc3NldHMvaW1hZ2VzL3AyLmpwZykgbm8tcmVwZWF0IDBweCAwcHg7XHJcblx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHRtaW4taGVpZ2h0OiAzNDBweDtcclxufVxyXG4ucGFja2FnZXNfbGVmdDJ7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoc3JjL2Fzc2V0cy9pbWFnZXMvcDMuanBnKSBuby1yZXBlYXQgMHB4IDBweDtcclxuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cdG1pbi1oZWlnaHQ6IDM0MHB4O1xyXG59XHJcblxyXG4ucGFja2FnZXNfcmlnaHQgaDMge1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4ucGFja2FnZXNfcmlnaHQgaDQge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICNlMGUwZTA7XHJcbiAgICBtYXJnaW46IDE1cHggMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuLnBhY2thZ2VzX3JpZ2h0IHAge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICBtYXJnaW46IDFlbSAwIDJlbTtcclxuICAgIGNvbG9yOiAjZTBlMGUwO1xyXG59XHJcbi5wYWNrYWdlc19yaWdodCBhIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuLnBhY2thZ2VzX3JpZ2h0IGE6aG92ZXIge1xyXG5cdGJhY2tncm91bmQ6ICNmZmY7IFxyXG5cdGNvbG9yOiAjMzMzO1xyXG59XHJcblxyXG4ucGFja2FnZXNfcmlnaHQge1xyXG4gICAgcGFkZGluZzogNGVtIDRlbSA1ZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjYjUyZTMxO1xyXG59XHJcbi5wYWNrYWdlc19yaWdodDEge1xyXG4gICAgYmFja2dyb3VuZDogIzJiMmIyYjtcclxufVxyXG4ucGFja2FnZXNfcmlnaHQyIHtcclxuICAgIGJhY2tncm91bmQ6ICNkYTlkNDA7XHJcbn1cclxuLnBhY2thZ2VfbWlkZGxlX2dyaWQge1xyXG4gICAgbWFyZ2luOiAyZW0gMDtcclxufVxyXG4vKi0tIC8vUG9wdWxhciBQYWNrYWdlcyAtLSovXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/package-info/package-info.component.ts":
/*!********************************************************!*\
  !*** ./src/app/package-info/package-info.component.ts ***!
  \********************************************************/
/*! exports provided: PackageInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageInfoComponent", function() { return PackageInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PackageInfoComponent = /** @class */ (function () {
    function PackageInfoComponent() {
    }
    PackageInfoComponent.prototype.ngOnInit = function () {
    };
    PackageInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-package-info',
            template: __webpack_require__(/*! raw-loader!./package-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/package-info/package-info.component.html"),
            styles: [__webpack_require__(/*! ./package-info.component.css */ "./src/app/package-info/package-info.component.css")]
        })
    ], PackageInfoComponent);
    return PackageInfoComponent;
}());



/***/ }),

/***/ "./src/app/product/details-page/details-page.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/product/details-page/details-page.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    width: 97%;\r\n}\r\n\r\n.summery-view1{\r\n    padding: 9px 19px 24px 24px;\r\n    font-size: 12px;\r\n    color: hsl(0, 0%, 0%);\r\n    border-radius: 4px;\r\n    box-shadow: hsl(0, 0%, 80%) 0 0 16px;\r\n    background-color: hsl(0, 0%, 100%);\r\n    width: 100%;\r\n    margin-bottom: 17px;\r\n}\r\n\r\n.highlight{\r\n    margin-top: 22px;\r\n    margin-left: 13px;\r\n}\r\n\r\nul {\r\n    list-style-type: \"→ \";\r\n  }\r\n\r\n/* ul {\r\n    list-style: none;\r\n     margin-left: 0;\r\n    padding-left: 1em;\r\n    text-indent: -1em;\r\n    list-style-type: \"🔔\"; \r\n    list-style-image: url(src/assets/images/icon/food.jpg?tr=w-18,h-20) ;\r\n } */\r\n\r\na:hover {\r\n    background: rgb(166, 204, 108);\r\n    color: white;\r\n    text-decoration: none;\r\n}\r\n\r\n.outlet-view{ \r\n    padding: 10px;\r\n    color: rgb(10, 10, 10);\r\n    position: relative;\r\n    font-family: \"Times New Roman;\"\r\n}\r\n\r\n.half-circle {\r\n    /* border: 10px solid #83b89d; */\r\n    width: 128px;\r\n    height: 60px;\r\n    border-top-left-radius: 100px;\r\n    border-top-right-radius: 100px;\r\n    color: #000000;\r\n    box-sizing: border-box;\r\n    background: #df9c19;;\r\n    text-align: center;\r\n    margin-left: 20%;\r\n    margin-bottom: -11px;\r\n}\r\n\r\n.day-name{\r\n    position: absolute;\r\n    margin-top: 15px;\r\n    margin-left: -28px;\r\n}\r\n\r\n.day-value{\r\n    font-size: 2.5em;\r\n    margin-top: 4px;\r\n    margin-left: 8px;\r\n    position: absolute;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC9kZXRhaWxzLXBhZ2UvZGV0YWlscy1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsb0NBQW9DO0lBQ3BDLGtDQUFrQztJQUNsQyxXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHFCQUFxQjtFQUN2Qjs7QUFFRjs7Ozs7OztJQU9JOztBQUVKO0lBQ0ksOEJBQThCO0lBQzlCLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7O0FBR0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQjtBQUNKOztBQUlBO0lBQ0ksZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLDhCQUE4QjtJQUM5QixjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdC9kZXRhaWxzLXBhZ2UvZGV0YWlscy1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA5NyU7XHJcbn1cclxuXHJcbi5zdW1tZXJ5LXZpZXcxe1xyXG4gICAgcGFkZGluZzogOXB4IDE5cHggMjRweCAyNHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6IGhzbCgwLCAwJSwgMCUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNoYWRvdzogaHNsKDAsIDAlLCA4MCUpIDAgMCAxNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTdweDtcclxufVxyXG5cclxuLmhpZ2hsaWdodHtcclxuICAgIG1hcmdpbi10b3A6IDIycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTNweDtcclxufVxyXG5cclxudWwge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBcIuKGkiBcIjtcclxuICB9XHJcblxyXG4vKiB1bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxZW07XHJcbiAgICB0ZXh0LWluZGVudDogLTFlbTtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogXCLwn5SUXCI7IFxyXG4gICAgbGlzdC1zdHlsZS1pbWFnZTogdXJsKHNyYy9hc3NldHMvaW1hZ2VzL2ljb24vZm9vZC5qcGc/dHI9dy0xOCxoLTIwKSA7XHJcbiB9ICovXHJcblxyXG5hOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigxNjYsIDIwNCwgMTA4KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuXHJcbi5vdXRsZXQtdmlld3sgXHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgY29sb3I6IHJnYigxMCwgMTAsIDEwKTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hbjtcIlxyXG59XHJcblxyXG5cclxuXHJcbi5oYWxmLWNpcmNsZSB7XHJcbiAgICAvKiBib3JkZXI6IDEwcHggc29saWQgIzgzYjg5ZDsgKi9cclxuICAgIHdpZHRoOiAxMjhweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwMHB4O1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYmFja2dyb3VuZDogI2RmOWMxOTs7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTExcHg7XHJcbn1cclxuXHJcbi5kYXktbmFtZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTI4cHg7XHJcbn1cclxuLmRheS12YWx1ZXtcclxuICAgIGZvbnQtc2l6ZTogMi41ZW07XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/product/details-page/details-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/product/details-page/details-page.component.ts ***!
  \****************************************************************/
/*! exports provided: DetailsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageComponent", function() { return DetailsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _details_page_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details-page.service */ "./src/app/product/details-page/details-page.service.ts");




var DetailsPageComponent = /** @class */ (function () {
    function DetailsPageComponent(route, router, pageService) {
        this.route = route;
        this.router = router;
        this.pageService = pageService;
        this.idData = 2;
        this.idAnother = 2;
        this.loading = true;
        // app.setIsLeftPanalRequired(true);
        // this.packageDetails.highlights =[];
    }
    DetailsPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        // this.packageDetailsRS = this.pageService.getHardCodedProducts(id);
        // this.packageDetails = this.packageDetailsRS.packageDetailsRS;
        // this.dayWiseList = this.packageDetails.dayWiseList;
        this.pageService.getProducts(id).subscribe({
            next: function (products) {
                _this.packageDetailsRS = products;
                _this.packageDetails = _this.packageDetailsRS.packageDetailsRS;
                _this.dayWiseList = _this.packageDetails.dayWiseList;
                // this.filteredProducts = this.products;
                _this.loading = false;
            },
            error: function (err) { return _this.errorMessage = err; }
        });
        // console.log('dayWiseList ********************* '+this.dayWiseList)
    };
    DetailsPageComponent.prototype.onBack = function () {
        this.router.navigate(['/home']);
    };
    DetailsPageComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _details_page_service__WEBPACK_IMPORTED_MODULE_3__["DetailsPageService"] }
    ]; };
    DetailsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-details-page',
            template: __webpack_require__(/*! raw-loader!./details-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/product/details-page/details-page.component.html"),
            styles: [__webpack_require__(/*! ./details-page.component.css */ "./src/app/product/details-page/details-page.component.css")]
        })
    ], DetailsPageComponent);
    return DetailsPageComponent;
}());



/***/ }),

/***/ "./src/app/product/details-page/details-page.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/product/details-page/details-page.service.ts ***!
  \**************************************************************/
/*! exports provided: DetailsPageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageService", function() { return DetailsPageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_common_AppConstants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/AppConstants */ "./src/app/common/AppConstants.ts");






var DetailsPageService = /** @class */ (function () {
    function DetailsPageService(http) {
        this.http = http;
        this._baseURL = src_app_common_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].apiURL;
    }
    DetailsPageService.prototype.getProducts = function (id) {
        // this._baseURL = 'assets/api/details/details.json';
        var url = this._baseURL + 'SearchDetails/detailsInfo/' + id;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { console.log('All: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        // return this.http.post<IProductDetails>(this._baseURL, this.requestBody)
        //   .pipe(tap (data => {console.log('All: ' + JSON.stringify(data))}
        //             ),
        //           catchError(this.handleError)
        //       );
    };
    DetailsPageService.prototype.handleError = function (err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        var errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message;
        }
        console.error(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    };
    DetailsPageService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    DetailsPageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], DetailsPageService);
    return DetailsPageService;
}());



/***/ }),

/***/ "./src/app/product/edit-package/edit-package.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/product/edit-package/edit-package.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".details-view {\r\n    padding: 10px;\r\n    color: hsl(0, 0%, 0%);\r\n    border-radius: 4px;\r\n    box-shadow: hsl(0, 0%, 80%) 0 0 16px;\r\n    background-color: hsl(0, 0%, 100%);\r\n    overflow: hidden;\r\n    margin-bottom: 17px;\r\n}\r\n\r\n\r\n.wid35{\r\n    width: 30%;\r\n    margin: 3px;\r\n    padding: 2px;\r\n    border-radius: 5px;\r\n}\r\n\r\n\r\n.text-box {\r\n    font-weight: 600;\r\n    height: 27px;\r\n}\r\n\r\n\r\ninput{\r\n    color: black;\r\n}\r\n\r\n\r\ninput[type=\"file\"] {\r\n    display: none;\r\n}\r\n\r\n\r\n.custom-file-upload {\r\n    border: 1px solid #ccc;\r\n    display: inline-block;\r\n    padding: 6px 12px;\r\n    cursor: pointer;\r\n    background: rgb(211, 210, 196);\r\n    margin-top: 10px;\r\n}\r\n\r\n\r\n.heading-text {\r\n    text-align: center;\r\n    font-size: 2.5em;\r\n    font-family: \"Playball\", sans-serif;\r\n    background: #a9d7e97a;\r\n    color: #0008ff;\r\n    box-shadow: hsl(0, 5%, 69%) 0 0 16px;\r\n    margin: 1% 33%;\r\n}\r\n\r\n\r\n@media(max-width:768px){\r\n    .heading-text {\r\n        text-align: center;\r\n        font-size: 2.5em;\r\n        font-family: \"Playball\", sans-serif;\r\n        background: #a9d7e97a;\r\n        color: #0008ff;\r\n        box-shadow: hsl(0, 5%, 69%) 0 0 16px;\r\n        margin: 5px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC9lZGl0LXBhY2thZ2UvZWRpdC1wYWNrYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7OztBQUdBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7OztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7O0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsOEJBQThCO0lBQzlCLGdCQUFnQjtBQUNwQjs7O0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1DQUFtQztJQUNuQyxxQkFBcUI7SUFDckIsY0FBYztJQUNkLG9DQUFvQztJQUNwQyxjQUFjO0FBQ2xCOzs7QUFFQTtJQUNJO1FBQ0ksa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixtQ0FBbUM7UUFDbkMscUJBQXFCO1FBQ3JCLGNBQWM7UUFDZCxvQ0FBb0M7UUFDcEMsV0FBVztJQUNmO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0L2VkaXQtcGFja2FnZS9lZGl0LXBhY2thZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXRhaWxzLXZpZXcge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGNvbG9yOiBoc2woMCwgMCUsIDAlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJveC1zaGFkb3c6IGhzbCgwLCAwJSwgODAlKSAwIDAgMTZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTdweDtcclxufVxyXG5cclxuXHJcbi53aWQzNXtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBtYXJnaW46IDNweDtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLnRleHQtYm94IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBoZWlnaHQ6IDI3cHg7XHJcbn0gXHJcblxyXG5pbnB1dHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uY3VzdG9tLWZpbGUtdXBsb2FkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiA2cHggMTJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyMTEsIDIxMCwgMTk2KTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcblxyXG4uaGVhZGluZy10ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMi41ZW07XHJcbiAgICBmb250LWZhbWlseTogXCJQbGF5YmFsbFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZDogI2E5ZDdlOTdhO1xyXG4gICAgY29sb3I6ICMwMDA4ZmY7XHJcbiAgICBib3gtc2hhZG93OiBoc2woMCwgNSUsIDY5JSkgMCAwIDE2cHg7XHJcbiAgICBtYXJnaW46IDElIDMzJTtcclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo3NjhweCl7XHJcbiAgICAuaGVhZGluZy10ZXh0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjVlbTtcclxuICAgICAgICBmb250LWZhbWlseTogXCJQbGF5YmFsbFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNhOWQ3ZTk3YTtcclxuICAgICAgICBjb2xvcjogIzAwMDhmZjtcclxuICAgICAgICBib3gtc2hhZG93OiBoc2woMCwgNSUsIDY5JSkgMCAwIDE2cHg7XHJcbiAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/product/edit-package/edit-package.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/product/edit-package/edit-package.component.ts ***!
  \****************************************************************/
/*! exports provided: EditPackageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPackageComponent", function() { return EditPackageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_common_AmenitiesInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/AmenitiesInfo */ "./src/app/common/AmenitiesInfo.ts");
/* harmony import */ var src_app_action_admin_info_admin_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/action/admin-info/admin-info.service */ "./src/app/action/admin-info/admin-info.service.ts");





var EditPackageComponent = /** @class */ (function () {
    function EditPackageComponent(route, router, adminInfoService) {
        this.route = route;
        this.router = router;
        this.adminInfoService = adminInfoService;
        this.isSuccesFullSave = false;
        this.isCreatePackage = false;
        this.uploadImage = 'assets/images/icon/uploadImage.jpg';
        this.placeName = '';
        this.headingData = '';
        this.descriptionData = '';
        this.noofDay = 0;
        this.tripPlaces = [];
        this.agencyId = '';
        this.amenityList = [];
        this.aminitiesCheck = [];
        this.packageType = [];
        this.packageTypeSelcted = [];
        this.isSummeryVSaveLoading = false;
        this.isDetailsVSaveLoading = false;
        this.isSummeryImageLoading = false;
        this.isDetaisImageLoading = false;
        this.ismageLoading = [];
        this.isManualyFileCahge = false;
        this.urlData = 'assets/images/icon/uploadImage.jpg';
        this.detailsURLData = 'assets/images/icon/uploadImage.jpg';
        this.amenities = [];
        this.loading = true;
        this.amenitiesMap = new Map();
        // packageType
        this.packageTypeMap = new Map();
        this.dayWiseList = [this.getArrayData()];
        this.placeNameArr = [];
        this.headingArr = [];
        this.descriptionArr = [];
        this.packageCategory = [];
        this.amenityList = src_app_common_AmenitiesInfo__WEBPACK_IMPORTED_MODULE_3__["AmenitiesService"].getAllAmenities();
        var currentUser = localStorage.getItem('currentUser');
        try {
            var obj = JSON.parse(currentUser);
            if (obj) {
                this.agencyName = obj.agencyName;
                if (obj.agencyId) {
                    this.agencyId = obj.agencyId;
                }
                this.currency = obj.currency;
                this.agencyReview = obj.agencyReview;
            }
        }
        catch (error) {
            console.log(error);
        }
        this.packageType = src_app_common_AmenitiesInfo__WEBPACK_IMPORTED_MODULE_3__["AmenitiesService"].toureType;
        for (var index = 0; index < this.amenityList.length; index++) {
            this.aminitiesCheck.push(false);
        }
        for (var index = 0; index < this.packageType.length; index++) {
            this.packageTypeSelcted.push(false);
        }
    }
    EditPackageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.packageId = id;
        var request = {
            agencyId: this.agencyId,
            agencyName: this.agencyName,
            packageId: id
        };
        this.adminInfoService.getProductInfoDetails(request).subscribe({
            next: function (products) {
                _this.loading = false;
                var response = products.packageDetailsRS;
                try {
                    _this.agencyName = response.agencyName;
                    _this.agencyReview = response.agencyReview;
                    _this.packageId = response.packageId;
                    _this.packageName = response.packageName;
                    console.log('response.packageName : ' + _this.packageName);
                    _this.originalPrice = response.originalPrice;
                    _this.offerPrice = response.offerPrice;
                    _this.noOfDays = response.noOfDays;
                    _this.noOfNights = response.noOfNights;
                    if (response.tripPlaces) {
                        _this.tripPlaces = response.tripPlaces;
                    }
                    if (response.amenities != null) {
                        _this.setAmenitiesList(response.amenities);
                    }
                    if (response.packageCategory != null) {
                        _this.setPackageCategory(response.packageCategory);
                    }
                    _this.currency = response.currency;
                    _this.setHightLightData(response.highlights);
                    _this.setoverviewData(response.overview);
                    if (response.dayWiseList != null && response.dayWiseList.length > 0) {
                        _this.dayWiseList = response.dayWiseList;
                    }
                    _this.urlData = response.images[0];
                    if (response.overviewImages != null) {
                        _this.detailsURLData = response.overviewImages[0];
                    }
                    else {
                        _this.detailsURLData = response.images[0];
                    }
                }
                catch (error) {
                    console.log(error);
                }
            },
            error: function (err) {
                _this.errorMessage = err;
                _this.loading = false;
            }
        });
    };
    EditPackageComponent.prototype.setAmenitiesMap = function () {
        for (var index = 0; index < this.amenityList.length; index++) {
            var element = this.amenityList[index];
            this.amenitiesMap.set(element.name, index);
        }
    };
    EditPackageComponent.prototype.setAmenitiesList = function (amenitiesList) {
        var _this = this;
        this.setAmenitiesMap();
        amenitiesList.forEach(function (elementStr) {
            var id = _this.amenitiesMap.get(elementStr);
            if (id) {
                _this.aminitiesCheck[id] = true;
            }
            else {
                for (var index = 0; index < _this.amenityList.length; index++) {
                    var element = _this.amenityList[index];
                    if (element.name.toLocaleLowerCase() == elementStr.toLocaleLowerCase()) {
                        _this.aminitiesCheck[id] = true;
                        break;
                    }
                }
            }
        });
    };
    EditPackageComponent.prototype.setpackageTypeMap = function () {
        for (var index = 0; index < this.packageType.length; index++) {
            var element = this.packageType[index];
            this.packageTypeMap.set(element, index);
        }
    };
    EditPackageComponent.prototype.setPackageCategory = function (packageList) {
        var _this = this;
        this.setpackageTypeMap();
        packageList.forEach(function (element) {
            var ind = _this.packageTypeMap.get(element);
            if (ind) {
                _this.packageTypeSelcted[ind] = true;
            }
            else {
                for (var index = 0; index < _this.packageType.length; index++) {
                    var elementStr = _this.packageType[index];
                    if (element.toLocaleLowerCase() == elementStr.toLocaleLowerCase()) {
                        _this.packageTypeSelcted[index] = true;
                        break;
                    }
                }
            }
        });
    };
    EditPackageComponent.prototype.setHightLightData = function (highlightdata) {
        var _this = this;
        if (highlightdata != null) {
            var i_1 = 0;
            highlightdata.forEach(function (element) {
                if (i_1 != 0) {
                    _this.highlights = _this.highlights + '\n' + element;
                }
                else {
                    _this.highlights = element;
                    i_1 = 1;
                }
            });
            // this.highlights = highlightdata.toString();
        }
    };
    EditPackageComponent.prototype.setoverviewData = function (overviewdata) {
        if (overviewdata != null) {
            this.overview = overviewdata.toString();
        }
    };
    EditPackageComponent.prototype.getArrayData = function () {
        this.noofDay = this.noofDay + 1;
        return {
            "dayNo": "" + (this.noofDay),
            "place": [],
            "amenities": [],
            "images": [
                this.uploadImage
            ],
            "infoData": []
        };
    };
    // imageURL: string;
    EditPackageComponent.prototype.onSelectFile = function (event) {
        var _this = this;
        // console.log(event); 
        // console.log(JSON.stringify(event));
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            this.imagePath = event.target.files;
            console.log('imagePath' + this.imagePath);
            reader.readAsDataURL(event.target.files[0]); // read file as data url
            this.fileNameUrl = event.target.files[0].name;
            reader.onload = function (event) {
                console.log(event);
                _this.urlData = reader.result; //add source to image
                // console.log('url---'+this.urlData)
                _this.uploadImageData(_this.fileNameUrl, _this.urlData);
            };
        }
    };
    EditPackageComponent.prototype.uploadImageData = function (fileName, encodedValue) {
        var _this = this;
        this.isSummeryImageLoading = true;
        var req = {
            "agencyId": this.agencyId,
            "agencyName": this.agencyName,
            "imageList": [
                {
                    "fileName": fileName,
                    "imageEncodedInfo": encodedValue
                }
            ]
        };
        this.adminInfoService.uploadImageFile(req).subscribe({
            next: function (products) {
                var productResp = products.imageList;
                // console.log('productResp'+productResp)
                if (productResp.length > 0) {
                    var imageList = productResp[0];
                    // console.log(imageList);
                    _this.urlData = imageList.imageUrl;
                    _this.isSummeryImageLoading = false;
                    _this.updateImageDetailsView(_this.urlData);
                }
            },
            error: function (err) {
                _this.errorMessage = err;
                _this.updateImageDetailsView(encodedValue);
            }
        });
    };
    EditPackageComponent.prototype.updateImageDetailsView = function (data) {
        if (!this.isManualyFileCahge) {
            this.detailsURLData = data;
        }
    };
    EditPackageComponent.prototype.onSelectDetailsFile = function (event) {
        var _this = this;
        this.isManualyFileCahge = true;
        // console.log(event); 
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            this.imagePath = event.target.files;
            console.log('imagePath' + this.imagePath);
            reader.readAsDataURL(event.target.files[0]); // read file as data url
            var fileName_1 = event.target.files[0].name;
            reader.onload = function (event) {
                console.log(event);
                _this.detailsURLData = reader.result; //add source to image
                // console.log('url---'+this.urlData)
                _this.uploadDetailsImageData(fileName_1, _this.detailsURLData);
            };
        }
    };
    EditPackageComponent.prototype.uploadDetailsImageData = function (fileName, encodedValue) {
        var _this = this;
        this.isDetaisImageLoading = true;
        var req = {
            "agencyId": this.agencyId,
            "agencyName": this.agencyName,
            "imageList": [
                {
                    "fileName": fileName,
                    "imageEncodedInfo": encodedValue
                }
            ]
        };
        this.adminInfoService.uploadImageFile(req).subscribe({
            next: function (products) {
                var productResp = products.imageList;
                // console.log('productResp'+productResp)
                if (productResp.length > 0) {
                    var imageList = productResp[0];
                    // console.log(imageList);
                    _this.detailsURLData = imageList.imageUrl;
                    _this.isDetaisImageLoading = false;
                }
                _this.isDetaisImageLoading = false;
            },
            error: function (err) { _this.errorMessage = err; }
        });
    };
    EditPackageComponent.prototype.add = function () {
        this.dayWiseList.push(this.getArrayData());
        console.log('dayWiseList------' + JSON.stringify(this.dayWiseList));
    };
    EditPackageComponent.prototype.onDaySelectFile = function (event, index) {
        var _this = this;
        console.log(event);
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            this.imagePath = event.target.files;
            console.log('imagePath' + this.imagePath);
            reader.readAsDataURL(event.target.files[0]); // read file as data url
            var fileName_2 = event.target.files[0].name;
            reader.onload = function (event) {
                var data = reader.result; //add source to image
                // this.dayWiseList[index].images.push(data);
                _this.dayWiseList[index].images[0] = data; ///tempurary hardcoded for array 1st element
                try {
                    _this.ismageLoading[index] = true;
                    var req = {
                        "agencyId": _this.agencyId,
                        "agencyName": _this.agencyName,
                        "imageList": [
                            {
                                "fileName": fileName_2,
                                "imageEncodedInfo": data
                            }
                        ]
                    };
                    _this.adminInfoService.uploadImageFile(req).subscribe({
                        next: function (products) {
                            var productResp = products.imageList;
                            // console.log('productResp'+productResp)
                            if (productResp.length > 0) {
                                var imageList = productResp[0];
                                // console.log(imageList);
                                _this.dayWiseList[index].images[0] = imageList.imageUrl;
                                _this.ismageLoading[index] = false;
                            }
                        },
                        error: function (err) { return _this.errorMessage = err; }
                    });
                }
                catch (error) {
                }
            };
        }
    };
    EditPackageComponent.prototype.addCityName = function (city) {
        if (city) {
            this.tripPlaces.push(city);
            this.placeName = '';
        }
    };
    EditPackageComponent.prototype.addPlaceName = function (place, index) {
        if (place) {
            this.dayWiseList[index].place.push(place);
            this.placeNameArr[index] = '';
            this.placeName = '';
        }
    };
    EditPackageComponent.prototype.addDetailsInfo = function (headingData, descriptionData, index) {
        if (headingData || descriptionData) {
            this.dayWiseList[index].infoData.push({ "heading": headingData, "description": descriptionData });
            this.headingArr[index] = '';
            this.descriptionArr[index] = '';
        }
    };
    EditPackageComponent.prototype.getAmenitiesList = function () {
        this.amenities = [];
        for (var index = 0; index < this.aminitiesCheck.length; index++) {
            var element = this.aminitiesCheck[index];
            if (element == true) {
                this.amenities.push(this.amenityList[index].name);
            }
        }
        return this.amenities;
    };
    EditPackageComponent.prototype.getPackageCategory = function () {
        this.packageCategory = [];
        for (var index = 0; index < this.packageTypeSelcted.length; index++) {
            var element = this.packageTypeSelcted[index];
            if (element == true) {
                this.packageCategory.push(this.packageType[index]);
            }
        }
        return this.packageCategory;
    };
    //** save summey view data---- */
    EditPackageComponent.prototype.saveSummeryView = function () {
        var _this = this;
        this.isSummeryVSaveLoading = true;
        var high = this.highlights.split(/\n/g);
        var request = {
            "agencyId": this.agencyId,
            "agencyName": this.agencyName,
            "agencyReview": this.agencyReview,
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
            "currency": this.currency,
            "overviewImages": [this.detailsURLData],
            "highlights": high,
            "overview": [this.overview],
            "dayWiseList": this.dayWiseList
        };
        console.log("this.highlights***************" + this.highlights);
        console.log("this.highlights.split()************" + high);
        var requestInfo = {
            "packageDetailsRQ": request
        };
        console.log('Request----' + JSON.stringify(request));
        this.adminInfoService.updateProducts(requestInfo).subscribe({
            next: function (products) {
                var productResp = products.packageDetailsRS;
                _this.packageId = productResp.packageId;
                _this.isSummeryVSaveLoading = false;
                _this.isSuccesFullSave = true;
                var data = _this;
                setTimeout(function () {
                    data.isSuccesFullSave = false;
                    console.log('insidesetTimeout****************************************' + data.isSuccesFullSave);
                }, 2000);
            },
            error: function (err) { _this.errorMessage = err; }
        });
        console.log(event);
        // this.isSuccesFullSave = true;
        // let data = this;
        // setTimeout(function () {
        //   data.isSuccesFullSave = false;
        //   console.log('insidesetTimeout****************************************' + data.isSuccesFullSave)
        // }, 2000)
        // console.log('insidesetTimeout*********'+this.isSuccesFullSave)
    };
    EditPackageComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_action_admin_info_admin_info_service__WEBPACK_IMPORTED_MODULE_4__["AdminInfoService"] }
    ]; };
    EditPackageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-package',
            template: __webpack_require__(/*! raw-loader!./edit-package.component.html */ "./node_modules/raw-loader/index.js!./src/app/product/edit-package/edit-package.component.html"),
            styles: [__webpack_require__(/*! ./edit-package.component.css */ "./src/app/product/edit-package/edit-package.component.css")]
        })
    ], EditPackageComponent);
    return EditPackageComponent;
}());



/***/ }),

/***/ "./src/app/product/product.module.ts":
/*!*******************************************!*\
  !*** ./src/app/product/product.module.ts ***!
  \*******************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tour_packages_tour_packages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tour-packages/tour-packages.component */ "./src/app/product/tour-packages/tour-packages.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _summary_info_summary_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./summary-info/summary-info.component */ "./src/app/product/summary-info/summary-info.component.ts");
/* harmony import */ var _details_page_details_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details-page/details-page.component */ "./src/app/product/details-page/details-page.component.ts");
/* harmony import */ var _edit_package_edit_package_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-package/edit-package.component */ "./src/app/product/edit-package/edit-package.component.ts");








var routes = [
    { path: 'tour-packages/:name', component: _tour_packages_tour_packages_component__WEBPACK_IMPORTED_MODULE_3__["TourPackagesComponent"] },
    { path: 'summeryView', component: _summary_info_summary_info_component__WEBPACK_IMPORTED_MODULE_5__["SummaryInfoComponent"] },
    { path: 'details', component: _details_page_details_page_component__WEBPACK_IMPORTED_MODULE_6__["DetailsPageComponent"] },
    { path: 'product/:id', component: _details_page_details_page_component__WEBPACK_IMPORTED_MODULE_6__["DetailsPageComponent"] },
    { path: 'product-modification/:id', component: _edit_package_edit_package_component__WEBPACK_IMPORTED_MODULE_7__["EditPackageComponent"] },
];
var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _tour_packages_tour_packages_component__WEBPACK_IMPORTED_MODULE_3__["TourPackagesComponent"],
                _summary_info_summary_info_component__WEBPACK_IMPORTED_MODULE_5__["SummaryInfoComponent"],
                _details_page_details_page_component__WEBPACK_IMPORTED_MODULE_6__["DetailsPageComponent"],
                _edit_package_edit_package_component__WEBPACK_IMPORTED_MODULE_7__["EditPackageComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _summary_info_summary_info_component__WEBPACK_IMPORTED_MODULE_5__["SummaryInfoComponent"]
            ]
        })
    ], ProductModule);
    return ProductModule;
}());



/***/ }),

/***/ "./src/app/product/summary-info/summary-info.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/product/summary-info/summary-info.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* oposit 90 de tramsfrom */\r\n.itnDay span {\r\n    display: inline-block;\r\n    font-size: 18px;\r\n    color: #60c270;\r\n    position: absolute;\r\n    left: 5px;\r\n    top: 24px;\r\n    letter-spacing: -1px;\r\n    font-weight: normal;\r\n    text-transform: uppercase;\r\n    transform: rotate(-90deg);\r\n    transition: all 0.3s ease;\r\n    -webkit-transition: all 0.3s ease;\r\n    -moz-transition: all 0.3s ease;\r\n}\r\na:hover {\r\n    background: rgb(166, 204, 108);\r\n    color: white;\r\n    text-decoration: none;\r\n}\r\nspan.click-to-top span {\r\n    display: none; \r\n    position: absolute; \r\n     bottom: 0;\r\n   /*  left: 0; \r\n     right: 0;  */\r\n     background: #333;\r\n      color: #fff; \r\n    }\r\nspan.click-to-top:hover span {\r\n    display: flex;\r\n    border-radius:2px; \r\n    width: 10em;  \r\n    text-align: center;      \r\n}\r\n/* .container {\r\n    width: 97%;\r\n} */\r\nimg {\r\n    vertical-align: middle;\r\n    width: 100%;\r\n}\r\n.outlet-view{\r\n    padding: 10px;\r\n    color: rgb(10, 10, 10);\r\n    position: relative;\r\n    font-family: \"Times New Roman;\"\r\n}\r\n.agency-color{\r\n    color: #c46f06;\r\n    margin-top: 1px;\r\n}\r\n.day-count {\r\n    color: #fa8f0b;\r\n    font-family: Lato,sans-serif!important;\r\n}\r\n.bottomright {\r\n    position: absolute;\r\n    bottom: 8px;\r\n    right: 1px;\r\n    font-size: 18px;\r\n  }\r\n.margin1{\r\n    margin: 1px;\r\n}\r\n/*search box css start here*/\r\n.search-sec{\r\n    padding: 2rem;\r\n}\r\n.search-slt{\r\n    display: block;\r\n    width: 100%;\r\n    font-size: 1.5rem;\r\n    line-height: 1.5;\r\n    color: #55595c;\r\n    background-color: #fff;\r\n    background-image: none;\r\n    border: 1px solid #ccc;\r\n    height: calc(3rem + 2px) !important;\r\n    border-radius:0;\r\n    /* padding: 0px; */\r\n}\r\n.wrn-btn{\r\n    width: 100%;\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    text-transform: capitalize;\r\n    height: calc(3rem + 2px) !important;\r\n    border-radius:0;\r\n}\r\n@media (min-width: 992px){\r\n    .search-sec{\r\n        position: relative;\r\n        /* top: -114px; */\r\n        background: rgba(26, 70, 104, 0.51);\r\n    }\r\n}\r\n@media (max-width: 992px){\r\n    .search-sec{\r\n        background: #1A4668;\r\n    }\r\n}\r\n@-webkit-keyframes spin {\r\n    0% { -webkit-transform: rotate(0deg); }\r\n    100% { -webkit-transform: rotate(360deg); }\r\n  }\r\n@keyframes spin {\r\n    0% { transform: rotate(0deg); }\r\n    100% { transform: rotate(360deg); }\r\n  }\r\n/* .spinner-border-sm {\r\n    width: 1rem;\r\n    height: 1rem;\r\n    border-width: .2em;\r\n}\r\n\r\n.spinner-border {\r\n    display: inline-block;\r\n    width: 2rem;\r\n    height: 2rem;\r\n    vertical-align: text-bottom;\r\n    border: .25em solid currentColor;\r\n    border-right-color: transparent;\r\n    border-radius: 50%;\r\n    -webkit-animation: spinner-border .75s linear infinite;\r\n    animation: spin 1s linear infinite;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC9zdW1tYXJ5LWluZm8vc3VtbWFyeS1pbmZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkJBQTJCO0FBQzNCO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxTQUFTO0lBQ1Qsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFHekIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixpQ0FBaUM7SUFDakMsOEJBQThCO0FBQ2xDO0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLHFCQUFxQjtBQUN6QjtBQUlBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtLQUNqQixTQUFTO0dBQ1g7aUJBQ2M7S0FDWixnQkFBZ0I7TUFDZixXQUFXO0lBQ2I7QUFDSjtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUdBOztHQUVHO0FBRUg7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztBQUNmO0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQjtBQUNKO0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksY0FBYztJQUNkLHNDQUFzQztBQUMxQztBQUtBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsZUFBZTtFQUNqQjtBQUNGO0lBQ0ksV0FBVztBQUNmO0FBR0EsNEJBQTRCO0FBQzVCO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixtQ0FBbUM7SUFDbkMsZUFBZTtJQUNmLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsMEJBQTBCO0lBQzFCLG1DQUFtQztJQUNuQyxlQUFlO0FBQ25CO0FBQ0E7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsbUNBQW1DO0lBQ3ZDO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksbUJBQW1CO0lBQ3ZCO0FBQ0o7QUFHRTtJQUNFLEtBQUssK0JBQStCLEVBQUU7SUFDdEMsT0FBTyxpQ0FBaUMsRUFBRTtFQUM1QztBQUVBO0lBQ0UsS0FBSyx1QkFBdUIsRUFBRTtJQUM5QixPQUFPLHlCQUF5QixFQUFFO0VBQ3BDO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQkMiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0L3N1bW1hcnktaW5mby9zdW1tYXJ5LWluZm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIG9wb3NpdCA5MCBkZSB0cmFtc2Zyb20gKi9cclxuLml0bkRheSBzcGFuIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjNjBjMjcwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNXB4O1xyXG4gICAgdG9wOiAyNHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbmE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDE2NiwgMjA0LCAxMDgpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5cclxuXHJcbnNwYW4uY2xpY2stdG8tdG9wIHNwYW4ge1xyXG4gICAgZGlzcGxheTogbm9uZTsgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gICAgIGJvdHRvbTogMDtcclxuICAgLyogIGxlZnQ6IDA7IFxyXG4gICAgIHJpZ2h0OiAwOyAgKi9cclxuICAgICBiYWNrZ3JvdW5kOiAjMzMzO1xyXG4gICAgICBjb2xvcjogI2ZmZjsgXHJcbiAgICB9XHJcbnNwYW4uY2xpY2stdG8tdG9wOmhvdmVyIHNwYW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJvcmRlci1yYWRpdXM6MnB4OyBcclxuICAgIHdpZHRoOiAxMGVtOyAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgICAgXHJcbn1cclxuXHJcblxyXG4vKiAuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA5NyU7XHJcbn0gKi9cclxuXHJcbmltZyB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5vdXRsZXQtdmlld3tcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBjb2xvcjogcmdiKDEwLCAxMCwgMTApO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuO1wiXHJcbn1cclxuXHJcbi5hZ2VuY3ktY29sb3J7XHJcbiAgICBjb2xvcjogI2M0NmYwNjtcclxuICAgIG1hcmdpbi10b3A6IDFweDtcclxufVxyXG5cclxuLmRheS1jb3VudCB7XHJcbiAgICBjb2xvcjogI2ZhOGYwYjtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvLHNhbnMtc2VyaWYhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4uYm90dG9tcmlnaHQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiA4cHg7XHJcbiAgICByaWdodDogMXB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuLm1hcmdpbjF7XHJcbiAgICBtYXJnaW46IDFweDtcclxufVxyXG4gIFxyXG5cclxuLypzZWFyY2ggYm94IGNzcyBzdGFydCBoZXJlKi9cclxuLnNlYXJjaC1zZWN7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG59XHJcbi5zZWFyY2gtc2x0e1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGNvbG9yOiAjNTU1OTVjO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDNyZW0gKyAycHgpICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOjA7XHJcbiAgICAvKiBwYWRkaW5nOiAwcHg7ICovXHJcbn1cclxuLndybi1idG57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGhlaWdodDogY2FsYygzcmVtICsgMnB4KSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czowO1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCl7XHJcbiAgICAuc2VhcmNoLXNlY3tcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgLyogdG9wOiAtMTE0cHg7ICovXHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNiwgNzAsIDEwNCwgMC41MSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCl7XHJcbiAgICAuc2VhcmNoLXNlY3tcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMUE0NjY4O1xyXG4gICAgfVxyXG59IFxyXG5cclxuICBcclxuICBALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XHJcbiAgICAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAgIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBzcGluIHtcclxuICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbiAgfSBcclxuXHJcbiAgLyogLnNwaW5uZXItYm9yZGVyLXNtIHtcclxuICAgIHdpZHRoOiAxcmVtO1xyXG4gICAgaGVpZ2h0OiAxcmVtO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAuMmVtO1xyXG59XHJcblxyXG4uc3Bpbm5lci1ib3JkZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDJyZW07XHJcbiAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XHJcbiAgICBib3JkZXI6IC4yNWVtIHNvbGlkIGN1cnJlbnRDb2xvcjtcclxuICAgIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc3Bpbm5lci1ib3JkZXIgLjc1cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xyXG59ICovIl19 */"

/***/ }),

/***/ "./src/app/product/summary-info/summary-info.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/product/summary-info/summary-info.component.ts ***!
  \****************************************************************/
/*! exports provided: SummaryInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryInfoComponent", function() { return SummaryInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _summary_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./summary-info.service */ "./src/app/product/summary-info/summary-info.service.ts");



var SummaryInfoComponent = /** @class */ (function () {
    function SummaryInfoComponent(summary) {
        this.summary = summary;
        this.productArr = [];
        this.loading = true;
        this.buttonLoader = false;
        this.destinationsName = '';
        this.persionMessage = 'Per person on twin sharing basis';
        // app.setIsLeftPanalRequired(true);
    }
    Object.defineProperty(SummaryInfoComponent.prototype, "destinationsName1", {
        get: function () {
            return this._destinationsName1;
        },
        set: function (value) {
            this._destinationsName1 = value;
        },
        enumerable: true,
        configurable: true
    });
    SummaryInfoComponent.prototype.updateTitle = function (title) {
        this.title.setTitle(title);
    };
    SummaryInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log("-------------------"+this.summary.getHardCodedProducts())
        // setTimeout(function(){
        try {
            var isFirstTime = localStorage.getItem('isAlreay');
            // console.log('isFirstTime--'+isFirstTime);
            if (!isFirstTime) {
                // console.log('inside...........')
                this.summary.getDummyProducts().subscribe({
                    next: function (products) {
                        _this.response = products;
                        _this.productArr = _this.response.packageSummeryRS;
                        _this.loading = false;
                        // this.filteredProducts = this.products;
                    },
                    error: function (err) { return _this.errorMessage = err; }
                });
                localStorage.setItem('isAlreay', 'true');
            }
        }
        catch (error) {
        }
        this.summary.getProducts().subscribe({
            next: function (products) {
                _this.response = products;
                _this.productArr = _this.response.packageSummeryRS;
                _this.loading = false;
                // this.filteredProducts = this.products;
            },
            error: function (err) { return _this.errorMessage = err; }
        });
        // }, 3000);
        // this.response = this.summary.getHardCodedProducts();
        // this.productArr = this.response.packageSummeryRS;
    };
    SummaryInfoComponent.prototype.getSummeryData = function (city, date) {
        var _this = this;
        this.loading = true;
        this.buttonLoader = true;
        console.log("getSummeryData########city#########--" + city);
        console.log('-----------date*************' + date);
        console.log('-----------destinationsName1*************' + this.destinationsName1);
        this.productResponse = this.productArr;
        this.summary.getSearchProducts(city, date).subscribe({
            next: function (products) {
                _this.response = products;
                _this.productArr = _this.response.packageSummeryRS;
                _this.loading = false;
                _this.buttonLoader = false;
                // let productValue = this.response.packageSummeryRS;
                // let value = [];
                // if(city != undefined || city !=''){
                //   value = this.performfilter(city);
                //   console.log(value);
                // }
                // this.productArr = value.length > 0 ? value : productValue;
            },
            error: function (err) { return _this.errorMessage = err; }
        });
    };
    SummaryInfoComponent.prototype.performfilter = function (filterBy) {
        filterBy = filterBy.toLowerCase();
        return this.productResponse.filter(function (product) {
            return product.packageName.toLocaleLowerCase().indexOf(filterBy) != -1
                || product.tripPlaces.toString().toLocaleLowerCase().indexOf(filterBy) != -1;
        });
    };
    SummaryInfoComponent.ctorParameters = function () { return [
        { type: _summary_info_service__WEBPACK_IMPORTED_MODULE_2__["SummaryInfoService"] }
    ]; };
    SummaryInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-summary-info',
            template: __webpack_require__(/*! raw-loader!./summary-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/product/summary-info/summary-info.component.html"),
            styles: [__webpack_require__(/*! ./summary-info.component.css */ "./src/app/product/summary-info/summary-info.component.css")]
        })
    ], SummaryInfoComponent);
    return SummaryInfoComponent;
}());



/***/ }),

/***/ "./src/app/product/summary-info/summary-info.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/product/summary-info/summary-info.service.ts ***!
  \**************************************************************/
/*! exports provided: SummaryInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryInfoService", function() { return SummaryInfoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_common_AppConstants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/AppConstants */ "./src/app/common/AppConstants.ts");






var SummaryInfoService = /** @class */ (function () {
    function SummaryInfoService(http) {
        this.http = http;
        this._baseURL = src_app_common_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].apiURL;
    }
    SummaryInfoService.prototype.getProducts = function () {
        // this._baseURL ='assets/api/summery/summery.json'
        var url = this._baseURL + 'SearchService/summeryInfo';
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { console.log('All: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    SummaryInfoService.prototype.getSearchProducts = function (city, date) {
        // let url ='assets/api/summery/summery1.json'
        var url = this._baseURL + 'SearchService/searchSummeryInfo/' + city;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { console.log('All: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    SummaryInfoService.prototype.getDummyProducts = function () {
        var url = 'assets/api/summery/summery.json';
        // let url =this._baseURL+ 'SearchService/summeryInfo'
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { console.log('All: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    SummaryInfoService.prototype.getBookerDetails = function (request) {
        // let url ='assets/api/summery/summery1.json'
        var url = this._baseURL + 'ActionService/bookerDetails';
        return this.http.post(url, request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { console.log('All: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    SummaryInfoService.prototype.handleError = function (err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        var errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message;
        }
        console.error(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    };
    SummaryInfoService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    SummaryInfoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], SummaryInfoService);
    return SummaryInfoService;
}());



/***/ }),

/***/ "./src/app/product/tour-packages/tour-packages.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/product/tour-packages/tour-packages.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvdG91ci1wYWNrYWdlcy90b3VyLXBhY2thZ2VzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/product/tour-packages/tour-packages.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/product/tour-packages/tour-packages.component.ts ***!
  \******************************************************************/
/*! exports provided: TourPackagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourPackagesComponent", function() { return TourPackagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _summary_info_summary_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../summary-info/summary-info.service */ "./src/app/product/summary-info/summary-info.service.ts");




var TourPackagesComponent = /** @class */ (function () {
    function TourPackagesComponent(route, summary) {
        this.route = route;
        this.summary = summary;
        this.placeName = '';
        this.loading = true;
    }
    TourPackagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        var city = this.route.snapshot.paramMap.get('name');
        this.placeName = city;
        // this.buttonLoader = true;
        console.log("getSummeryData########city#########--" + city);
        // console.log('-----------date*************'+date);
        // console.log('-----------destinationsName1*************'+ this.destinationsName1);
        this.summary.getProducts().subscribe({
            next: function (products) {
                _this.response = products;
                // this.productArr = this.response.packageSummeryRS;
                _this.productResponse = _this.response.packageSummeryRS;
                var value = _this.performfilter(city);
                console.log(value);
                _this.productArr = value.length > 0 ? value : _this.productResponse;
                _this.loading = false;
                // this.buttonLoader = false;
                // this.filteredProducts = this.products;
            },
            error: function (err) { return _this.errorMessage = err; }
        });
    };
    TourPackagesComponent.prototype.performfilter = function (filterBy) {
        filterBy = filterBy.toLowerCase();
        return this.productResponse.filter(function (product) {
            return product.packageName.toLocaleLowerCase().indexOf(filterBy) != -1
                || product.tripPlaces.toString().toLocaleLowerCase().indexOf(filterBy) != -1;
        });
    };
    TourPackagesComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _summary_info_summary_info_service__WEBPACK_IMPORTED_MODULE_3__["SummaryInfoService"] }
    ]; };
    TourPackagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tour-packages',
            template: __webpack_require__(/*! raw-loader!./tour-packages.component.html */ "./node_modules/raw-loader/index.js!./src/app/product/tour-packages/tour-packages.component.html"),
            styles: [__webpack_require__(/*! ./tour-packages.component.css */ "./src/app/product/tour-packages/tour-packages.component.css")]
        })
    ], TourPackagesComponent);
    return TourPackagesComponent;
}());



/***/ }),

/***/ "./src/app/profile-info/profile-info.component.css":
/*!*********************************************************!*\
  !*** ./src/app/profile-info/profile-info.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n    border-radius: 50%;\r\n    max-width:300px\r\n  }\r\n\r\ninput[type=\"file\"] {\r\n    display: none;\r\n}\r\n\r\n.custom-file-upload {\r\n    border: 1px solid #ccc;\r\n    display: inline-block;\r\n    padding: 6px 12px;\r\n    cursor: pointer;\r\n    background: rgb(211, 210, 196);\r\n    margin-top: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS1pbmZvL3Byb2ZpbGUtaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCO0VBQ0Y7O0FBRUY7SUFDSSxhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLDhCQUE4QjtJQUM5QixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlLWluZm8vcHJvZmlsZS1pbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWF4LXdpZHRoOjMwMHB4XHJcbiAgfVxyXG5cclxuaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uY3VzdG9tLWZpbGUtdXBsb2FkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiA2cHggMTJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyMTEsIDIxMCwgMTk2KTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/profile-info/profile-info.component.ts":
/*!********************************************************!*\
  !*** ./src/app/profile-info/profile-info.component.ts ***!
  \********************************************************/
/*! exports provided: ProfileInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileInfoComponent", function() { return ProfileInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Auth/authentication.service */ "./src/app/Auth/authentication.service.ts");
/* harmony import */ var _action_admin_info_admin_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../action/admin-info/admin-info.service */ "./src/app/action/admin-info/admin-info.service.ts");





var ProfileInfoComponent = /** @class */ (function () {
    function ProfileInfoComponent(router, authenticationService, adminInfoService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.adminInfoService = adminInfoService;
        this.userName = 'Profile';
        this.loading = true;
        this.isSummeryImageLoading = false;
        this.firstName = 'Anup';
        this.lastName = 'Ghosh';
        this.imagePath = 'assets/images/package2.jpg';
        var currentUser = localStorage.getItem('currentUser');
        var obj = JSON.parse(currentUser);
        if (obj) {
            this.userName = obj.userName;
            if (obj.agencyId) {
                this.agencyId = obj.agencyId;
            }
        }
        else {
            this.router.navigate(['login']);
        }
    }
    ProfileInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        var Req = {
            userName: this.userName,
            agencyId: this.agencyId
        };
        this.authenticationService.profileIinfo(Req).subscribe({
            next: function (products) {
                _this.profile = products;
                if (products.profileUrl) {
                    _this.imagePath = products.profileUrl;
                }
                _this.loading = false;
            },
            error: function (err) { return _this.errorMessage = err; }
        });
    };
    // imagePath: any = 'assets/images/icon/uploadImage.jpg';
    // onSelectFile(event) { // called each time file input changes
    //   console.log(event);
    //   if (event.target.files && event.target.files[0]) {
    //     var reader = new FileReader();
    //     this.imagePath = event.target.files;
    //     console.log('imagePath' + this.imagePath);
    //     reader.readAsDataURL(event.target.files[0]); // read file as data url
    //     reader.onload = (event) => { // called once readAsDataURL is completed
    //       this.imagePath = reader.result; //add source to image
    //       // console.log('url---'+this.urlData)
    //     }
    //   }
    // }
    // imageURL: string;
    ProfileInfoComponent.prototype.onSelectFile = function (event) {
        var _this = this;
        // console.log(event); 
        // console.log(JSON.stringify(event));
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            // this.imagePath = event.target.files;
            // console.log('imagePath' + this.imagePath);
            reader.readAsDataURL(event.target.files[0]); // read file as data url
            var fileNameUrl = event.target.files[0].name;
            reader.onload = function (event) {
                console.log(event);
                _this.imagePath = reader.result; //add source to image
                // this.uploadImageData(fileNameUrl, this.imagePath);
            };
        }
    };
    ProfileInfoComponent.prototype.uploadImageData = function (fileName, encodedValue) {
        var _this = this;
        this.isSummeryImageLoading = true;
        var req = {
            "agencyId": this.profile.userId,
            "agencyName": this.profile.agencyName,
            "imageList": [
                {
                    "fileName": fileName,
                    "imageEncodedInfo": encodedValue
                }
            ]
        };
        this.adminInfoService.uploadImageFile(req).subscribe({
            next: function (products) {
                var productResp = products.imageList;
                // console.log('productResp'+productResp)
                if (productResp.length > 0) {
                    var imageList = productResp[0];
                    // console.log(imageList);
                    _this.imagePath = imageList.imageUrl;
                    // this.isSummeryImageLoading = false;
                    // this.updateImageDetailsView(this.urlData);
                }
            },
            error: function (err) {
                _this.errorMessage = err;
                // this.updateImageDetailsView(encodedValue);
            }
        });
    };
    ProfileInfoComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _Auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
        { type: _action_admin_info_admin_info_service__WEBPACK_IMPORTED_MODULE_4__["AdminInfoService"] }
    ]; };
    ProfileInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile-info',
            template: __webpack_require__(/*! raw-loader!./profile-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/profile-info/profile-info.component.html"),
            styles: [__webpack_require__(/*! ./profile-info.component.css */ "./src/app/profile-info/profile-info.component.css")]
        })
    ], ProfileInfoComponent);
    return ProfileInfoComponent;
}());



/***/ }),

/***/ "./src/app/recent-trip-info/recent-trip-info.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/recent-trip-info/recent-trip-info.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel-control-next {\r\n    right: -10%;\r\n  }\r\n  .carousel-control-prev {\r\n    left: -10%;\r\n  }\r\n  .carousel-control-next-icon,\r\n  .carousel-control-prev-icon {\r\n    background-color: black;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjZW50LXRyaXAtaW5mby9yZWNlbnQtdHJpcC1pbmZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0VBQ2I7RUFDQTtJQUNFLFVBQVU7RUFDWjtFQUVBOztJQUVFLHVCQUF1QjtFQUN6QiIsImZpbGUiOiJzcmMvYXBwL3JlY2VudC10cmlwLWluZm8vcmVjZW50LXRyaXAtaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XHJcbiAgICByaWdodDogLTEwJTtcclxuICB9XHJcbiAgLmNhcm91c2VsLWNvbnRyb2wtcHJldiB7XHJcbiAgICBsZWZ0OiAtMTAlO1xyXG4gIH1cclxuICBcclxuICAuY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb24sXHJcbiAgLmNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/recent-trip-info/recent-trip-info.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/recent-trip-info/recent-trip-info.component.ts ***!
  \****************************************************************/
/*! exports provided: RecentTripInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentTripInfoComponent", function() { return RecentTripInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RecentTripInfoComponent = /** @class */ (function () {
    function RecentTripInfoComponent() {
        this.name = 'Angular';
    }
    RecentTripInfoComponent.prototype.ngOnInit = function () {
    };
    RecentTripInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recent-trip-info',
            template: __webpack_require__(/*! raw-loader!./recent-trip-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/recent-trip-info/recent-trip-info.component.html"),
            styles: [__webpack_require__(/*! ./recent-trip-info.component.css */ "./src/app/recent-trip-info/recent-trip-info.component.css")]
        })
    ], RecentTripInfoComponent);
    return RecentTripInfoComponent;
}());



/***/ }),

/***/ "./src/app/recent-trip/recent-trip.component.css":
/*!*******************************************************!*\
  !*** ./src/app/recent-trip/recent-trip.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.special{\r\n\tpadding: 5em 0;\r\n}\r\n\r\nh3.heading {\r\n    text-align: center;\r\n    font-size: 45px;\r\n    text-transform: capitalize;\r\n    color: #000;\r\n    margin-bottom: 50px;\r\n    font-weight: 300;\r\n\tposition: relative;\r\n}\r\n\r\nh3.heading:before {\r\n    content: '';\r\n    background: #da9d40;\r\n    height: 3px;\r\n    width: 10%;\r\n    bottom: -15%;\r\n    left: 45%;\r\n    position: absolute;\r\n}\r\n\r\n/*-- Popular trips --*/\r\n\r\n.special-info{\r\n\tbackground: url('b.jpg') no-repeat 0px 0px;\r\n    background-size: cover;\r\n    padding: 2em;\r\n    margin: 0 .5em;\r\n}\r\n\r\n.special-info1{\r\n\tbackground: url('b1.jpg') no-repeat 0px 0px;\r\n    background-size: cover;\r\n}\r\n\r\n.special-info2{\r\n\tbackground: url('b2.jpg') no-repeat 0px 0px;\r\n    background-size: cover;\r\n}\r\n\r\n.special-star i.fa {\r\n    color: #fff;\r\n    font-size: 1em;\r\n    margin: 0 .1em;\r\n    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.31);\r\n}\r\n\r\n.special-info-top h4{\r\n    color: #FFFFFF;\r\n    font-size: 1.5em;\r\n    margin: .5em 0 0 0;\r\n    text-transform: uppercase;\r\n    font-weight: 600;\r\n    letter-spacing: 2px;\r\n    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.31);\r\n}\r\n\r\n.special-info-bottom{\r\n\tmargin: 12em 0 0 0;\r\n}\r\n\r\n.special-info-bottom ul{\r\n\tpadding:0;\r\n\tmargin:0;\r\n}\r\n\r\n.special-info-bottom ul li{\r\n    display: inline-block;\r\n    color: #FFFFFF;\r\n    font-weight: 600;\r\n    font-size: 1.2em;\r\n    letter-spacing: 1px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.special-info-bottom ul li span{\r\n    margin: 0 0 0 .5em;\r\n    font-size: .5em !important;\r\n    font-weight: 400 !important;\r\n}\r\n\r\n.special-info-bottom ul li:nth-child(1){\r\n\tpadding-right:.5em;\r\n}\r\n\r\n.special-info-bottom ul li:nth-child(3){\r\n\tpadding-left:.5em;\t\r\n}\r\n\r\n.special-info-bottom ul li:nth-child(2){\r\n\tpadding: 0 .5em;\r\n    border-right: solid 1px #FFF;\r\n    border-left: solid 1px #FFF;\r\n}\r\n\r\n.special-info-bottom p{\r\n    color: #FFFFFF;\r\n    font-size: 1em;\r\n    line-height: 1.6em;\r\n    letter-spacing: 1px;\r\n    margin: 2em 0 0 0;\r\n}\r\n\r\n.special{\r\n\tpadding: 5em 0;\r\n}\r\n\r\n/*-- //Popular trips --*/\r\n\r\n/*\r\n* \tOwl Carousel Owl Demo Theme \r\n*\tv1.3.3\r\n*/\r\n\r\n.owl-theme .owl-controls{\r\n\tmargin-top: 20px;\r\n    text-align: center;\r\n}\r\n\r\n/* Styling Next and Prev buttons */\r\n\r\n.owl-theme .owl-controls .owl-buttons div{\r\n\tcolor: #FFF;\r\n\tdisplay: inline-block;\r\n\tzoom: 1;\r\n\t*display: inline;/*IE7 life-saver */\r\n\tmargin: 5px;\r\n\tpadding: 3px 10px;\r\n\tfont-size: 12px;\r\n\tborder-radius: 30px;\r\n\tbackground: #869791;\r\n\tfilter: Alpha(Opacity=50);/*IE7 fix*/\r\n\topacity: 0.5;\r\n}\r\n\r\n/* Clickable class fix problem with hover on touch devices */\r\n\r\n/* Use it for non-touch hover action */\r\n\r\n.owl-theme .owl-controls.clickable .owl-buttons div:hover{\r\n\tfilter: Alpha(Opacity=100);/*IE7 fix*/\r\n\topacity: 1;\r\n\ttext-decoration: none;\r\n}\r\n\r\n/* Styling Pagination*/\r\n\r\n.owl-theme .owl-controls .owl-page{\r\n\tdisplay: inline-block;\r\n\tzoom: 1;\r\n\t*display: inline;/*IE7 life-saver */\r\n}\r\n\r\n.owl-theme .owl-controls .owl-page span{\r\n\tdisplay: block;\r\n    width: 12px;\r\n    height: 12px;\r\n    margin: 5px 4px;\r\n    filter: Alpha(Opacity=50);\r\n    opacity: 0.5;\r\n    border-radius: 20px;\r\n    background: #da9d40;\r\n}\r\n\r\n.owl-theme .owl-controls .owl-page.active span,\r\n.owl-theme .owl-controls.clickable .owl-page:hover span{\r\n\tfilter: Alpha(Opacity=100);/*IE7 fix*/\r\n\topacity: 1;\r\n}\r\n\r\n/* If PaginationNumbers is true */\r\n\r\n.owl-theme .owl-controls .owl-page span.owl-numbers{\r\n\theight: auto;\r\n\twidth: auto;\r\n\tcolor: #FFF;\r\n\tpadding: 2px 10px;\r\n\tfont-size: 12px;\r\n\tborder-radius: 30px;\r\n}\r\n\r\n/* preloading images */\r\n\r\n.owl-item.loading{\r\n\tmin-height: 150px;\r\n\t/* background: url(AjaxLoader.gif) no-repeat center center */\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjZW50LXRyaXAvcmVjZW50LXRyaXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLDBCQUEwQjtJQUMxQixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGdCQUFnQjtDQUNuQixrQkFBa0I7QUFDbkI7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxVQUFVO0lBQ1YsWUFBWTtJQUNaLFNBQVM7SUFDVCxrQkFBa0I7QUFDdEI7O0FBRUEsc0JBQXNCOztBQUN0QjtDQUNDLDBDQUFzRTtJQUNuRSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBQ0E7Q0FDQywyQ0FBdUU7SUFDcEUsc0JBQXNCO0FBQzFCOztBQUNBO0NBQ0MsMkNBQXVFO0lBQ3BFLHNCQUFzQjtBQUMxQjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsY0FBYztJQUNkLDBDQUEwQztBQUM5Qzs7QUFDQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLDBDQUEwQztBQUM5Qzs7QUFDQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFDQTtDQUNDLFNBQVM7Q0FDVCxRQUFRO0FBQ1Q7O0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsMkJBQTJCO0FBQy9COztBQUNBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUNBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUNBO0NBQ0MsZUFBZTtJQUNaLDRCQUE0QjtJQUM1QiwyQkFBMkI7QUFDL0I7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUNBO0NBQ0MsY0FBYztBQUNmOztBQUNBLHdCQUF3Qjs7QUFHeEI7OztDQUdDOztBQUVEO0NBQ0MsZ0JBQWdCO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBLGtDQUFrQzs7QUFFbEM7Q0FDQyxXQUFXO0NBQ1gscUJBQXFCO0NBQ3JCLE9BQU87RUFDUCxlQUFnQixDQUFDLGtCQUFrQjtDQUNuQyxXQUFXO0NBQ1gsaUJBQWlCO0NBQ2pCLGVBQWU7Q0FHZixtQkFBbUI7Q0FDbkIsbUJBQW1CO0NBQ25CLHlCQUF5QixDQUFDLFVBQVU7Q0FDcEMsWUFBWTtBQUNiOztBQUNBLDREQUE0RDs7QUFDNUQsc0NBQXNDOztBQUN0QztDQUNDLDBCQUEwQixDQUFDLFVBQVU7Q0FDckMsVUFBVTtDQUNWLHFCQUFxQjtBQUN0Qjs7QUFFQSxzQkFBc0I7O0FBRXRCO0NBQ0MscUJBQXFCO0NBQ3JCLE9BQU87RUFDUCxlQUFnQixDQUFDLGtCQUFrQjtBQUNwQzs7QUFDQTtDQUNDLGNBQWM7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsWUFBWTtJQUdaLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7O0NBRUMsMEJBQTBCLENBQUMsVUFBVTtDQUNyQyxVQUFVO0FBQ1g7O0FBRUEsaUNBQWlDOztBQUVqQztDQUNDLFlBQVk7Q0FDWixXQUFXO0NBQ1gsV0FBVztDQUNYLGlCQUFpQjtDQUNqQixlQUFlO0NBR2YsbUJBQW1CO0FBQ3BCOztBQUVBLHNCQUFzQjs7QUFDdEI7Q0FDQyxpQkFBaUI7Q0FDakIsNERBQTREO0FBQzdEIiwiZmlsZSI6InNyYy9hcHAvcmVjZW50LXRyaXAvcmVjZW50LXRyaXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uc3BlY2lhbHtcclxuXHRwYWRkaW5nOiA1ZW0gMDtcclxufVxyXG5cclxuaDMuaGVhZGluZyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDQ1cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbmgzLmhlYWRpbmc6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgYmFja2dyb3VuZDogI2RhOWQ0MDtcclxuICAgIGhlaWdodDogM3B4O1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICAgIGJvdHRvbTogLTE1JTtcclxuICAgIGxlZnQ6IDQ1JTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLyotLSBQb3B1bGFyIHRyaXBzIC0tKi9cclxuLnNwZWNpYWwtaW5mb3tcclxuXHRiYWNrZ3JvdW5kOiB1cmwoc3JjL2Fzc2V0cy9pbWFnZXMvcmVjZW50LXRyaXAvYi5qcGcpIG5vLXJlcGVhdCAwcHggMHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHBhZGRpbmc6IDJlbTtcclxuICAgIG1hcmdpbjogMCAuNWVtO1xyXG59XHJcbi5zcGVjaWFsLWluZm8xe1xyXG5cdGJhY2tncm91bmQ6IHVybChzcmMvYXNzZXRzL2ltYWdlcy9yZWNlbnQtdHJpcC9iMS5qcGcpIG5vLXJlcGVhdCAwcHggMHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4uc3BlY2lhbC1pbmZvMntcclxuXHRiYWNrZ3JvdW5kOiB1cmwoc3JjL2Fzc2V0cy9pbWFnZXMvcmVjZW50LXRyaXAvYjIuanBnKSBuby1yZXBlYXQgMHB4IDBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLnNwZWNpYWwtc3RhciBpLmZhIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBtYXJnaW46IDAgLjFlbTtcclxuICAgIHRleHQtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjMxKTtcclxufVxyXG4uc3BlY2lhbC1pbmZvLXRvcCBoNHtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIG1hcmdpbjogLjVlbSAwIDAgMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIHRleHQtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjMxKTtcclxufVxyXG4uc3BlY2lhbC1pbmZvLWJvdHRvbXtcclxuXHRtYXJnaW46IDEyZW0gMCAwIDA7XHJcbn1cclxuLnNwZWNpYWwtaW5mby1ib3R0b20gdWx7XHJcblx0cGFkZGluZzowO1xyXG5cdG1hcmdpbjowO1xyXG59XHJcbi5zcGVjaWFsLWluZm8tYm90dG9tIHVsIGxpe1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi5zcGVjaWFsLWluZm8tYm90dG9tIHVsIGxpIHNwYW57XHJcbiAgICBtYXJnaW46IDAgMCAwIC41ZW07XHJcbiAgICBmb250LXNpemU6IC41ZW0gIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcclxufVxyXG4uc3BlY2lhbC1pbmZvLWJvdHRvbSB1bCBsaTpudGgtY2hpbGQoMSl7XHJcblx0cGFkZGluZy1yaWdodDouNWVtO1xyXG59XHJcbi5zcGVjaWFsLWluZm8tYm90dG9tIHVsIGxpOm50aC1jaGlsZCgzKXtcclxuXHRwYWRkaW5nLWxlZnQ6LjVlbTtcdFxyXG59XHJcbi5zcGVjaWFsLWluZm8tYm90dG9tIHVsIGxpOm50aC1jaGlsZCgyKXtcclxuXHRwYWRkaW5nOiAwIC41ZW07XHJcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAjRkZGO1xyXG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCAjRkZGO1xyXG59XHJcbi5zcGVjaWFsLWluZm8tYm90dG9tIHB7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNmVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIG1hcmdpbjogMmVtIDAgMCAwO1xyXG59XHJcbi5zcGVjaWFse1xyXG5cdHBhZGRpbmc6IDVlbSAwO1xyXG59XHJcbi8qLS0gLy9Qb3B1bGFyIHRyaXBzIC0tKi9cclxuXHJcblxyXG4vKlxyXG4qIFx0T3dsIENhcm91c2VsIE93bCBEZW1vIFRoZW1lIFxyXG4qXHR2MS4zLjNcclxuKi9cclxuXHJcbi5vd2wtdGhlbWUgLm93bC1jb250cm9sc3tcclxuXHRtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vKiBTdHlsaW5nIE5leHQgYW5kIFByZXYgYnV0dG9ucyAqL1xyXG5cclxuLm93bC10aGVtZSAub3dsLWNvbnRyb2xzIC5vd2wtYnV0dG9ucyBkaXZ7XHJcblx0Y29sb3I6ICNGRkY7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHpvb206IDE7XHJcblx0KmRpc3BsYXk6IGlubGluZTsvKklFNyBsaWZlLXNhdmVyICovXHJcblx0bWFyZ2luOiA1cHg7XHJcblx0cGFkZGluZzogM3B4IDEwcHg7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogMzBweDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXM6IDMwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogMzBweDtcclxuXHRiYWNrZ3JvdW5kOiAjODY5NzkxO1xyXG5cdGZpbHRlcjogQWxwaGEoT3BhY2l0eT01MCk7LypJRTcgZml4Ki9cclxuXHRvcGFjaXR5OiAwLjU7XHJcbn1cclxuLyogQ2xpY2thYmxlIGNsYXNzIGZpeCBwcm9ibGVtIHdpdGggaG92ZXIgb24gdG91Y2ggZGV2aWNlcyAqL1xyXG4vKiBVc2UgaXQgZm9yIG5vbi10b3VjaCBob3ZlciBhY3Rpb24gKi9cclxuLm93bC10aGVtZSAub3dsLWNvbnRyb2xzLmNsaWNrYWJsZSAub3dsLWJ1dHRvbnMgZGl2OmhvdmVye1xyXG5cdGZpbHRlcjogQWxwaGEoT3BhY2l0eT0xMDApOy8qSUU3IGZpeCovXHJcblx0b3BhY2l0eTogMTtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi8qIFN0eWxpbmcgUGFnaW5hdGlvbiovXHJcblxyXG4ub3dsLXRoZW1lIC5vd2wtY29udHJvbHMgLm93bC1wYWdle1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHR6b29tOiAxO1xyXG5cdCpkaXNwbGF5OiBpbmxpbmU7LypJRTcgbGlmZS1zYXZlciAqL1xyXG59XHJcbi5vd2wtdGhlbWUgLm93bC1jb250cm9scyAub3dsLXBhZ2Ugc3BhbntcclxuXHRkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgbWFyZ2luOiA1cHggNHB4O1xyXG4gICAgZmlsdGVyOiBBbHBoYShPcGFjaXR5PTUwKTtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGE5ZDQwO1xyXG59XHJcblxyXG4ub3dsLXRoZW1lIC5vd2wtY29udHJvbHMgLm93bC1wYWdlLmFjdGl2ZSBzcGFuLFxyXG4ub3dsLXRoZW1lIC5vd2wtY29udHJvbHMuY2xpY2thYmxlIC5vd2wtcGFnZTpob3ZlciBzcGFue1xyXG5cdGZpbHRlcjogQWxwaGEoT3BhY2l0eT0xMDApOy8qSUU3IGZpeCovXHJcblx0b3BhY2l0eTogMTtcclxufVxyXG5cclxuLyogSWYgUGFnaW5hdGlvbk51bWJlcnMgaXMgdHJ1ZSAqL1xyXG5cclxuLm93bC10aGVtZSAub3dsLWNvbnRyb2xzIC5vd2wtcGFnZSBzcGFuLm93bC1udW1iZXJze1xyXG5cdGhlaWdodDogYXV0bztcclxuXHR3aWR0aDogYXV0bztcclxuXHRjb2xvcjogI0ZGRjtcclxuXHRwYWRkaW5nOiAycHggMTBweDtcclxuXHRmb250LXNpemU6IDEycHg7XHJcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzMHB4O1xyXG5cdC1tb3otYm9yZGVyLXJhZGl1czogMzBweDtcclxuXHRib3JkZXItcmFkaXVzOiAzMHB4O1xyXG59XHJcblxyXG4vKiBwcmVsb2FkaW5nIGltYWdlcyAqL1xyXG4ub3dsLWl0ZW0ubG9hZGluZ3tcclxuXHRtaW4taGVpZ2h0OiAxNTBweDtcclxuXHQvKiBiYWNrZ3JvdW5kOiB1cmwoQWpheExvYWRlci5naWYpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyICovXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/recent-trip/recent-trip.component.ts":
/*!******************************************************!*\
  !*** ./src/app/recent-trip/recent-trip.component.ts ***!
  \******************************************************/
/*! exports provided: RecentTripComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentTripComponent", function() { return RecentTripComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// import * as $ from 'jquery';
var RecentTripComponent = /** @class */ (function () {
    function RecentTripComponent() {
    }
    // declare var $ : any;
    RecentTripComponent.prototype.ngOnInit = function () {
        // $(document).ready(function() { 
        // 	$("#owl-demo").owlCarousel({
        // 		autoPlay: 3000, //Set AutoPlay to 3 seconds
        // 		items : 3,
        // 		itemsDesktop : [640,5],
        // 		itemsDesktopSmall : [414,4]
        // 	});
        // }); 
    };
    RecentTripComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recent-trip',
            template: __webpack_require__(/*! raw-loader!./recent-trip.component.html */ "./node_modules/raw-loader/index.js!./src/app/recent-trip/recent-trip.component.html"),
            styles: [__webpack_require__(/*! ./recent-trip.component.css */ "./src/app/recent-trip/recent-trip.component.css")]
        })
    ], RecentTripComponent);
    return RecentTripComponent;
}());



/***/ }),

/***/ "./src/app/shared/booker-info/booker-info.component.css":
/*!**************************************************************!*\
  !*** ./src/app/shared/booker-info/booker-info.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9ib29rZXItaW5mby9ib29rZXItaW5mby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/booker-info/booker-info.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/booker-info/booker-info.component.ts ***!
  \*************************************************************/
/*! exports provided: BookerInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookerInfoComponent", function() { return BookerInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BookerInfoComponent = /** @class */ (function () {
    function BookerInfoComponent() {
    }
    BookerInfoComponent.prototype.ngOnInit = function () {
    };
    BookerInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-booker-info',
            template: __webpack_require__(/*! raw-loader!./booker-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/booker-info/booker-info.component.html"),
            styles: [__webpack_require__(/*! ./booker-info.component.css */ "./src/app/shared/booker-info/booker-info.component.css")]
        })
    ], BookerInfoComponent);
    return BookerInfoComponent;
}());



/***/ }),

/***/ "./src/app/shared/loading-info/loading-info.component.css":
/*!****************************************************************!*\
  !*** ./src/app/shared/loading-info/loading-info.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* The magic here that makes animations wait */ \r\n.js-loading *,\r\n.js-loading *:before,\r\n.js-loading *:after {\r\n  -webkit-animation-play-state: paused !important;\r\n          animation-play-state: paused !important;\r\n} \r\n.animated-header {\r\n  /* background: #000; */\r\n  /* position: absolute; */\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n  overflow: hidden;\r\n  height: 590px;\r\n} \r\n.animated-header:before {\r\n  -webkit-animation: show-background 60s .5s cubic-bezier(0,1,.5,1) forwards;\r\n          animation: show-background 60s .5s cubic-bezier(0,1,.5,1) forwards;\r\n  /* background: url(https://cssanimation.rocks/images/random/space2.jpg) repeat center; */\r\n  background-size: cover;\r\n  content: \"\";\r\n  opacity: 0;\r\n  height: 125vh;\r\n  position: absolute;\r\n  left: -10%;\r\n  top: -10%;\r\n  width: 100%;\r\n} \r\n.loading {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  color: #aaa;\r\n  font-size: 48px;\r\n  display: none;\r\n} \r\n.js-loading .loading {\r\n  display: block;\r\n} \r\n.earth {\r\n  width: 20%;\r\n  height: 200px;\r\n  position: absolute;\r\n    top: calc(50% - 100px);\r\n    left: calc(50% - 100px);\r\n} \r\n@media (max-width: 768px){\r\n    .earth {\r\n        width: 30%;\r\n        position: absolute;\r\n        top: calc(50% - 100px);\r\n        left: calc(50% - 63px);\r\n    }\r\n} \r\n.moon {\r\n  -webkit-animation: spin 7s linear infinite;\r\n          animation: spin 7s linear infinite;\r\n  width: 5%;\r\n  height: 50px;\r\n  position: absolute;\r\n    top: calc(50% - 200px);\r\n    left: calc(50% - 200px);\r\n  transform-origin: 200px 200px;\r\n} \r\n@media (max-width: 768px){\r\n    .moon {\r\n        -webkit-animation: spin 6s linear infinite;\r\n        animation: spin 6s linear infinite;\r\n        width: 9%;\r\n        height: 50px;\r\n        position: absolute;\r\n        top: calc(50% - 173px);\r\n        left: calc(50% - 140px);\r\n        transform-origin: 140px 140px;\r\n    }\r\n} \r\n.earth img, .moon img {\r\n  -webkit-animation: show-on-load 1s .5s cubic-bezier(0,1.6,.6,1) forwards;\r\n          animation: show-on-load 1s .5s cubic-bezier(0,1.6,.6,1) forwards;\r\n  border-radius: 50%;\r\n  opacity: 0;\r\n  width: 100%;\r\n  box-shadow: 0 0 12em 1em rgba(110, 140, 200, .6);\r\n} \r\n.moon img {\r\n  animation: fade-in 2s 1s cubic-bezier(0,1.5,1,1) forwards, spin 30s linear reverse infinite;\r\n} \r\n@-webkit-keyframes spin {\r\n  to {\r\n    transform: rotateZ(360deg);\r\n  }\r\n} \r\n@keyframes spin {\r\n  to {\r\n    transform: rotateZ(360deg);\r\n  }\r\n} \r\n@-webkit-keyframes show-background {\r\n  0% {\r\n    opacity: 0;\r\n    transform: none;\r\n  }\r\n  30% {\r\n    opacity: .5;\r\n  }\r\n  100% {\r\n    opacity: .5;\r\n    transform: scale(.8)\r\n  }\r\n} \r\n@keyframes show-background {\r\n  0% {\r\n    opacity: 0;\r\n    transform: none;\r\n  }\r\n  30% {\r\n    opacity: .5;\r\n  }\r\n  100% {\r\n    opacity: .5;\r\n    transform: scale(.8)\r\n  }\r\n} \r\n@-webkit-keyframes show-on-load {\r\n  0% {\r\n    opacity: 0;\r\n    transform: scale(.5);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    transform: none;\r\n  }\r\n} \r\n@keyframes show-on-load {\r\n  0% {\r\n    opacity: 0;\r\n    transform: scale(.5);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    transform: none;\r\n  }\r\n} \r\n@-webkit-keyframes fade-in {\r\n  to {\r\n    opacity: 1;\r\n  }\r\n} \r\n@keyframes fade-in {\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xvYWRpbmctaW5mby9sb2FkaW5nLWluZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4Q0FBOEM7QUFDOUM7OztFQUdFLCtDQUF1QztVQUF2Qyx1Q0FBdUM7QUFDekM7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qix3QkFBd0I7SUFDdEIsTUFBTTtJQUNOLFFBQVE7SUFDUixTQUFTO0lBQ1QsT0FBTztFQUNULGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7QUFFQTtFQUNFLDBFQUFrRTtVQUFsRSxrRUFBa0U7RUFDbEUsd0ZBQXdGO0VBQ3hGLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsVUFBVTtFQUNWLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxXQUFXO0FBQ2I7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxXQUFXO0VBQ1gsZUFBZTtFQUNmLGFBQWE7QUFDZjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixrQkFBa0I7SUFDaEIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0k7UUFDSSxVQUFVO1FBQ1Ysa0JBQWtCO1FBQ2xCLHNCQUFzQjtRQUN0QixzQkFBc0I7SUFDMUI7QUFDSjtBQUVBO0VBQ0UsMENBQWtDO1VBQWxDLGtDQUFrQztFQUNsQyxTQUFTO0VBQ1QsWUFBWTtFQUNaLGtCQUFrQjtJQUNoQixzQkFBc0I7SUFDdEIsdUJBQXVCO0VBQ3pCLDZCQUE2QjtBQUMvQjtBQUNBO0lBQ0k7UUFDSSwwQ0FBMEM7UUFDMUMsa0NBQWtDO1FBQ2xDLFNBQVM7UUFDVCxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLHNCQUFzQjtRQUN0Qix1QkFBdUI7UUFDdkIsNkJBQTZCO0lBQ2pDO0FBQ0o7QUFDQTtFQUNFLHdFQUFnRTtVQUFoRSxnRUFBZ0U7RUFDaEUsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsZ0RBQWdEO0FBQ2xEO0FBRUE7RUFDRSwyRkFBMkY7QUFDN0Y7QUFFQTtFQUNFO0lBQ0UsMEJBQTBCO0VBQzVCO0FBQ0Y7QUFKQTtFQUNFO0lBQ0UsMEJBQTBCO0VBQzVCO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLGVBQWU7RUFDakI7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsV0FBVztJQUNYO0VBQ0Y7QUFDRjtBQVpBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxXQUFXO0lBQ1g7RUFDRjtBQUNGO0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDVixvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLFVBQVU7SUFDVixlQUFlO0VBQ2pCO0FBQ0Y7QUFUQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UsVUFBVTtJQUNWLGVBQWU7RUFDakI7QUFDRjtBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7QUFDRjtBQUpBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sb2FkaW5nLWluZm8vbG9hZGluZy1pbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBUaGUgbWFnaWMgaGVyZSB0aGF0IG1ha2VzIGFuaW1hdGlvbnMgd2FpdCAqLyBcclxuLmpzLWxvYWRpbmcgKixcclxuLmpzLWxvYWRpbmcgKjpiZWZvcmUsXHJcbi5qcy1sb2FkaW5nICo6YWZ0ZXIge1xyXG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFuaW1hdGVkLWhlYWRlciB7XHJcbiAgLyogYmFja2dyb3VuZDogIzAwMDsgKi9cclxuICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBoZWlnaHQ6IDU5MHB4O1xyXG59XHJcblxyXG4uYW5pbWF0ZWQtaGVhZGVyOmJlZm9yZSB7XHJcbiAgYW5pbWF0aW9uOiBzaG93LWJhY2tncm91bmQgNjBzIC41cyBjdWJpYy1iZXppZXIoMCwxLC41LDEpIGZvcndhcmRzO1xyXG4gIC8qIGJhY2tncm91bmQ6IHVybChodHRwczovL2Nzc2FuaW1hdGlvbi5yb2Nrcy9pbWFnZXMvcmFuZG9tL3NwYWNlMi5qcGcpIHJlcGVhdCBjZW50ZXI7ICovXHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgaGVpZ2h0OiAxMjV2aDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogLTEwJTtcclxuICB0b3A6IC0xMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5sb2FkaW5nIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIGNvbG9yOiAjYWFhO1xyXG4gIGZvbnQtc2l6ZTogNDhweDtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uanMtbG9hZGluZyAubG9hZGluZyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5lYXJ0aCB7XHJcbiAgd2lkdGg6IDIwJTtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogY2FsYyg1MCUgLSAxMDBweCk7XHJcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDEwMHB4KTtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpe1xyXG4gICAgLmVhcnRoIHtcclxuICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IGNhbGMoNTAlIC0gMTAwcHgpO1xyXG4gICAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gNjNweCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tb29uIHtcclxuICBhbmltYXRpb246IHNwaW4gN3MgbGluZWFyIGluZmluaXRlO1xyXG4gIHdpZHRoOiA1JTtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiBjYWxjKDUwJSAtIDIwMHB4KTtcclxuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMjAwcHgpO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IDIwMHB4IDIwMHB4O1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCl7XHJcbiAgICAubW9vbiB7XHJcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gNnMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgIGFuaW1hdGlvbjogc3BpbiA2cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgd2lkdGg6IDklO1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDE3M3B4KTtcclxuICAgICAgICBsZWZ0OiBjYWxjKDUwJSAtIDE0MHB4KTtcclxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAxNDBweCAxNDBweDtcclxuICAgIH1cclxufVxyXG4uZWFydGggaW1nLCAubW9vbiBpbWcge1xyXG4gIGFuaW1hdGlvbjogc2hvdy1vbi1sb2FkIDFzIC41cyBjdWJpYy1iZXppZXIoMCwxLjYsLjYsMSkgZm9yd2FyZHM7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEyZW0gMWVtIHJnYmEoMTEwLCAxNDAsIDIwMCwgLjYpO1xyXG59XHJcblxyXG4ubW9vbiBpbWcge1xyXG4gIGFuaW1hdGlvbjogZmFkZS1pbiAycyAxcyBjdWJpYy1iZXppZXIoMCwxLjUsMSwxKSBmb3J3YXJkcywgc3BpbiAzMHMgbGluZWFyIHJldmVyc2UgaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNob3ctYmFja2dyb3VuZCB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICB9XHJcbiAgMzAlIHtcclxuICAgIG9wYWNpdHk6IC41O1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IC41O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSguOClcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2hvdy1vbi1sb2FkIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSguNSk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZS1pbiB7XHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/loading-info/loading-info.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/loading-info/loading-info.component.ts ***!
  \***************************************************************/
/*! exports provided: LoadingInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingInfoComponent", function() { return LoadingInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoadingInfoComponent = /** @class */ (function () {
    function LoadingInfoComponent() {
        this.earthIng = 'assets/images/logo/earth.png';
        this.moonIng = 'assets/images/logo/moon.png';
    }
    LoadingInfoComponent.prototype.ngOnInit = function () {
    };
    LoadingInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loading-info',
            template: __webpack_require__(/*! raw-loader!./loading-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/loading-info/loading-info.component.html"),
            styles: [__webpack_require__(/*! ./loading-info.component.css */ "./src/app/shared/loading-info/loading-info.component.css")]
        })
    ], LoadingInfoComponent);
    return LoadingInfoComponent;
}());



/***/ }),

/***/ "./src/app/shared/rating.component.css":
/*!*********************************************!*\
  !*** ./src/app/shared/rating.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.rating {\r\n    font-size: 7px;\r\n}\r\n\r\n.rating:not(:checked) > input {\r\n    position:absolute;\r\n    top:-9999px;\r\n    clip:rect(0,0,0,0);\r\n}\r\n\r\n.rating:not(:checked) > label {\r\n    float:right;\r\n    width:1em;\r\n    padding:0.1em;\r\n    overflow:hidden;\r\n    white-space:nowrap;\r\n    cursor:pointer;\r\n    font-size:200%;\r\n    line-height:1.2;\r\n    color:#ddd;\r\n}\r\n\r\n.rating:not(:checked) > label:before {\r\n    content: '★ ';\r\n}\r\n\r\n.rating > input:checked ~ label {\r\n    color: #f70;\r\n}\r\n\r\n/* .rating:not(:checked) > label:hover,\r\n.rating:not(:checked) > label:hover ~ label {\r\n    color: gold;\r\n}\r\n\r\n\r\n.rating > input:checked ~ label:hover,\r\n.rating > input:checked ~ label:hover ~ label,\r\n.rating > label:hover ~ input:checked ~ label {\r\n    color: #ea0;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3JhdGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxTQUFTO0lBQ1QsYUFBYTtJQUNiLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGNBQWM7SUFDZCxlQUFlO0lBQ2YsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTs7Ozs7Ozs7OztHQVVHIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3JhdGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5yYXRpbmcge1xyXG4gICAgZm9udC1zaXplOiA3cHg7XHJcbn1cclxuXHJcbi5yYXRpbmc6bm90KDpjaGVja2VkKSA+IGlucHV0IHtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgdG9wOi05OTk5cHg7XHJcbiAgICBjbGlwOnJlY3QoMCwwLDAsMCk7XHJcbn1cclxuXHJcbi5yYXRpbmc6bm90KDpjaGVja2VkKSA+IGxhYmVsIHtcclxuICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgd2lkdGg6MWVtO1xyXG4gICAgcGFkZGluZzowLjFlbTtcclxuICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgIHdoaXRlLXNwYWNlOm5vd3JhcDtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOjIwMCU7XHJcbiAgICBsaW5lLWhlaWdodDoxLjI7XHJcbiAgICBjb2xvcjojZGRkO1xyXG59XHJcblxyXG4ucmF0aW5nOm5vdCg6Y2hlY2tlZCkgPiBsYWJlbDpiZWZvcmUge1xyXG4gICAgY29udGVudDogJ+KYhSAnO1xyXG59XHJcblxyXG4ucmF0aW5nID4gaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsIHtcclxuICAgIGNvbG9yOiAjZjcwO1xyXG59XHJcblxyXG4vKiAucmF0aW5nOm5vdCg6Y2hlY2tlZCkgPiBsYWJlbDpob3ZlcixcclxuLnJhdGluZzpub3QoOmNoZWNrZWQpID4gbGFiZWw6aG92ZXIgfiBsYWJlbCB7XHJcbiAgICBjb2xvcjogZ29sZDtcclxufVxyXG5cclxuXHJcbi5yYXRpbmcgPiBpbnB1dDpjaGVja2VkIH4gbGFiZWw6aG92ZXIsXHJcbi5yYXRpbmcgPiBpbnB1dDpjaGVja2VkIH4gbGFiZWw6aG92ZXIgfiBsYWJlbCxcclxuLnJhdGluZyA+IGxhYmVsOmhvdmVyIH4gaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsIHtcclxuICAgIGNvbG9yOiAjZWEwO1xyXG59ICovIl19 */"

/***/ }),

/***/ "./src/app/shared/rating.component.ts":
/*!********************************************!*\
  !*** ./src/app/shared/rating.component.ts ***!
  \********************************************/
/*! exports provided: RatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return RatingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RatingComponent = /** @class */ (function () {
    function RatingComponent() {
        // @Input() itemId: number;
        this.ratingClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    RatingComponent.prototype.ngOnChanges = function () {
        // console.log("rating--------------------------"+this.rating);
        this.rating = parseInt("" + this.rating);
        // this.inputName = this.itemId + '_rating';
        // this.ratingClick.emit({
        //   itemId: this.itemId,
        //   rating: this.rating
        // });
    };
    RatingComponent.prototype.ngOnInit = function () {
        //   this.rating = 3;
        //   this.itemId = 4;
        // this.inputName = this.itemId + '_rating';
        // this.ratingClick.emit({
        //     itemId: this.itemId,
        //     rating: this.rating
        //   });
    };
    RatingComponent.prototype.onClick = function (rating) {
        // this.rating = rating;
        this.ratingClick.emit({
            itemId: this.itemId,
            rating: rating
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], RatingComponent.prototype, "rating", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], RatingComponent.prototype, "ratingClick", void 0);
    RatingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rating',
            template: __webpack_require__(/*! raw-loader!./rating.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/rating.component.html"),
            styles: [__webpack_require__(/*! ./rating.component.css */ "./src/app/shared/rating.component.css")]
        })
    ], RatingComponent);
    return RatingComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _summery_view_summery_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./summery-view/summery-view.component */ "./src/app/shared/summery-view/summery-view.component.ts");
/* harmony import */ var _star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./star-rating/star-rating.component */ "./src/app/shared/star-rating/star-rating.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _loading_info_loading_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loading-info/loading-info.component */ "./src/app/shared/loading-info/loading-info.component.ts");
/* harmony import */ var _booker_info_booker_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./booker-info/booker-info.component */ "./src/app/shared/booker-info/booker-info.component.ts");









var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _summery_view_summery_view_component__WEBPACK_IMPORTED_MODULE_4__["SummeryViewComponent"],
                _star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_5__["StarRatingComponent"],
                _loading_info_loading_info_component__WEBPACK_IMPORTED_MODULE_7__["LoadingInfoComponent"],
                _booker_info_booker_info_component__WEBPACK_IMPORTED_MODULE_8__["BookerInfoComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]
            ],
            exports: [
                _loading_info_loading_info_component__WEBPACK_IMPORTED_MODULE_7__["LoadingInfoComponent"],
                _summery_view_summery_view_component__WEBPACK_IMPORTED_MODULE_4__["SummeryViewComponent"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/star-rating/star-rating.component.css":
/*!**************************************************************!*\
  !*** ./src/app/shared/star-rating/star-rating.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.rating {\r\n    font-size: 7px;\r\n}\r\n\r\n.rating:not(:checked) > input {\r\n    position:absolute;\r\n    top:-9999px;\r\n    clip:rect(0,0,0,0);\r\n}\r\n\r\n.rating:not(:checked) > label {\r\n    float:right;\r\n    width:1em;\r\n    padding:0.1em;\r\n    overflow:hidden;\r\n    white-space:nowrap;\r\n    cursor:pointer;\r\n    font-size:200%;\r\n    line-height:1.2;\r\n    color:#ddd;\r\n}\r\n\r\n.rating:not(:checked) > label:before {\r\n    content: '★ ';\r\n}\r\n\r\n.rating > input:checked ~ label {\r\n    color: #f70;\r\n}\r\n\r\n/* .rating:not(:checked) > label:hover,\r\n.rating:not(:checked) > label:hover ~ label {\r\n    color: gold;\r\n}\r\n\r\n\r\n.rating > input:checked ~ label:hover,\r\n.rating > input:checked ~ label:hover ~ label,\r\n.rating > label:hover ~ input:checked ~ label {\r\n    color: #ea0;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3N0YXItcmF0aW5nL3N0YXItcmF0aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFNBQVM7SUFDVCxhQUFhO0lBQ2IsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsY0FBYztJQUNkLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBOzs7Ozs7Ozs7O0dBVUciLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvc3Rhci1yYXRpbmcvc3Rhci1yYXRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ucmF0aW5nIHtcclxuICAgIGZvbnQtc2l6ZTogN3B4O1xyXG59XHJcblxyXG4ucmF0aW5nOm5vdCg6Y2hlY2tlZCkgPiBpbnB1dCB7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHRvcDotOTk5OXB4O1xyXG4gICAgY2xpcDpyZWN0KDAsMCwwLDApO1xyXG59XHJcblxyXG4ucmF0aW5nOm5vdCg6Y2hlY2tlZCkgPiBsYWJlbCB7XHJcbiAgICBmbG9hdDpyaWdodDtcclxuICAgIHdpZHRoOjFlbTtcclxuICAgIHBhZGRpbmc6MC4xZW07XHJcbiAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICB3aGl0ZS1zcGFjZTpub3dyYXA7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZToyMDAlO1xyXG4gICAgbGluZS1oZWlnaHQ6MS4yO1xyXG4gICAgY29sb3I6I2RkZDtcclxufVxyXG5cclxuLnJhdGluZzpub3QoOmNoZWNrZWQpID4gbGFiZWw6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICfimIUgJztcclxufVxyXG5cclxuLnJhdGluZyA+IGlucHV0OmNoZWNrZWQgfiBsYWJlbCB7XHJcbiAgICBjb2xvcjogI2Y3MDtcclxufVxyXG5cclxuLyogLnJhdGluZzpub3QoOmNoZWNrZWQpID4gbGFiZWw6aG92ZXIsXHJcbi5yYXRpbmc6bm90KDpjaGVja2VkKSA+IGxhYmVsOmhvdmVyIH4gbGFiZWwge1xyXG4gICAgY29sb3I6IGdvbGQ7XHJcbn1cclxuXHJcblxyXG4ucmF0aW5nID4gaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsOmhvdmVyLFxyXG4ucmF0aW5nID4gaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsOmhvdmVyIH4gbGFiZWwsXHJcbi5yYXRpbmcgPiBsYWJlbDpob3ZlciB+IGlucHV0OmNoZWNrZWQgfiBsYWJlbCB7XHJcbiAgICBjb2xvcjogI2VhMDtcclxufSAqLyJdfQ== */"

/***/ }),

/***/ "./src/app/shared/star-rating/star-rating.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/star-rating/star-rating.component.ts ***!
  \*************************************************************/
/*! exports provided: StarRatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarRatingComponent", function() { return StarRatingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StarRatingComponent = /** @class */ (function () {
    function StarRatingComponent() {
        // @Input() itemId: number;
        this.ratingClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    StarRatingComponent.prototype.ngOnChanges = function () {
        // console.log("rating--------------------------"+this.rating);
        this.rating = parseInt("" + this.rating);
        // this.inputName = this.itemId + '_rating';
        // this.ratingClick.emit({
        //   itemId: this.itemId,
        //   rating: this.rating
        // });
    };
    StarRatingComponent.prototype.ngOnInit = function () {
        //   this.rating = 3;
        //   this.itemId = 4;
        // this.inputName = this.itemId + '_rating';
        // this.ratingClick.emit({
        //     itemId: this.itemId,
        //     rating: this.rating
        //   });
    };
    StarRatingComponent.prototype.onClick = function (rating) {
        // this.rating = rating;
        this.ratingClick.emit({
            itemId: this.itemId,
            rating: rating
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], StarRatingComponent.prototype, "rating", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], StarRatingComponent.prototype, "ratingClick", void 0);
    StarRatingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-star-rating',
            template: __webpack_require__(/*! raw-loader!./star-rating.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/star-rating/star-rating.component.html"),
            styles: [__webpack_require__(/*! ./star-rating.component.css */ "./src/app/shared/star-rating/star-rating.component.css")]
        })
    ], StarRatingComponent);
    return StarRatingComponent;
}());



/***/ }),

/***/ "./src/app/shared/summery-view/summery-view.component.css":
/*!****************************************************************!*\
  !*** ./src/app/shared/summery-view/summery-view.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* oposit 90 de tramsfrom */\r\n.itnDay span {\r\n    display: inline-block;\r\n    font-size: 18px;\r\n    color: #60c270;\r\n    position: absolute;\r\n    left: 5px;\r\n    top: 24px;\r\n    letter-spacing: -1px;\r\n    font-weight: normal;\r\n    text-transform: uppercase;\r\n    transform: rotate(-90deg);\r\n    transition: all 0.3s ease;\r\n    -webkit-transition: all 0.3s ease;\r\n    -moz-transition: all 0.3s ease;\r\n}\r\na:hover {\r\n    background: rgb(166, 204, 108);\r\n    color: white;\r\n    text-decoration: none;\r\n}\r\nspan.click-to-top span {\r\n    display: none; \r\n    position: absolute; \r\n     bottom: 0;\r\n   /*  left: 0; \r\n     right: 0;  */\r\n     background: #333;\r\n      color: #fff; \r\n    }\r\nspan.click-to-top:hover span {\r\n    display: flex;\r\n    border-radius:2px; \r\n    width: 10em;  \r\n    text-align: center;      \r\n}\r\n/* .container {\r\n    width: 97%;\r\n} */\r\nimg {\r\n    vertical-align: middle;\r\n    width: 100%;\r\n}\r\n.outlet-view{\r\n    padding: 10px;\r\n    color: rgb(10, 10, 10);\r\n    position: relative;\r\n    font-family: \"Times New Roman;\"\r\n}\r\n.agency-color{\r\n    color: #c46f06;\r\n    margin-top: 1px;\r\n}\r\n.day-count {\r\n    color: #fa8f0b;\r\n    font-family: Lato,sans-serif!important;\r\n}\r\n.bottomright {\r\n    position: absolute;\r\n    bottom: 8px;\r\n    right: 1px;\r\n    font-size: 18px;\r\n  }\r\n.margin1{\r\n    margin: 1px;\r\n}\r\n/*search box css start here*/\r\n.search-sec{\r\n    padding: 2rem;\r\n}\r\n.search-slt{\r\n    display: block;\r\n    width: 100%;\r\n    font-size: 1.5rem;\r\n    line-height: 1.5;\r\n    color: #55595c;\r\n    background-color: #fff;\r\n    background-image: none;\r\n    border: 1px solid #ccc;\r\n    height: calc(3rem + 2px) !important;\r\n    border-radius:0;\r\n}\r\n.wrn-btn{\r\n    width: 100%;\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    text-transform: capitalize;\r\n    height: calc(3rem + 2px) !important;\r\n    border-radius:0;\r\n}\r\n@media (min-width: 992px){\r\n    .search-sec{\r\n        position: relative;\r\n        /* top: -114px; */\r\n        background: rgba(26, 70, 104, 0.51);\r\n    }\r\n}\r\n@media (max-width: 992px){\r\n    .search-sec{\r\n        background: #1A4668;\r\n    }\r\n}\r\n@-webkit-keyframes spin {\r\n    0% { -webkit-transform: rotate(0deg); }\r\n    100% { -webkit-transform: rotate(360deg); }\r\n  }\r\n@keyframes spin {\r\n    0% { transform: rotate(0deg); }\r\n    100% { transform: rotate(360deg); }\r\n  }\r\n/* The Modal (background) */\r\n.modal {\r\n    display: block; /* Hidden by default */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1; /* Sit on top */\r\n    padding-top: 100px; /* Location of the box */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n  }\r\n/* Modal Content */\r\n.modal-content {\r\n    position: relative;\r\n    background-color: #fefefe;\r\n    margin: auto;\r\n    padding: 0;\r\n    border: 1px solid #888;\r\n    width: 50%;\r\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\r\n    -webkit-animation-name: animatetop;\r\n    -webkit-animation-duration: 0.4s;\r\n    animation-name: animatetop;\r\n    animation-duration: 0.4s\r\n  }\r\n@media(max-width:768px){\r\n    .modal-content {\r\n      position: relative;\r\n      background-color: #fefefe;\r\n      margin: auto;\r\n      padding: 0;\r\n      border: 1px solid #888;\r\n      width: 80%;\r\n      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\r\n      -webkit-animation-name: animatetop;\r\n      -webkit-animation-duration: 0.4s;\r\n      animation-name: animatetop;\r\n      animation-duration: 0.4s\r\n    }\r\n  }\r\n/* Add Animation */\r\n@-webkit-keyframes animatetop {\r\n    from {top:-300px; opacity:0} \r\n    to {top:0; opacity:1}\r\n  }\r\n@keyframes animatetop {\r\n    from {top:-300px; opacity:0}\r\n    to {top:0; opacity:1}\r\n  }\r\n/* The Close Button */\r\n.close {\r\n    color: red;\r\n    float: right;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n    margin-top: 0px;\r\n    margin-right: -5px;\r\n  }\r\n.close:hover,\r\n  .close:focus {\r\n    color: red;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n  }\r\n.modal-header {\r\n    padding: 2px 16px;\r\n    /* background-color: #5cb85c;\r\n    color: white; */\r\n  }\r\n.modal-body {\r\n      padding: 2px 16px;\r\n      min-height: 20em;\r\n  }\r\n.modal-footer {\r\n    padding: 2px 16px;\r\n    /* background-color: #5cb85c;\r\n    color: white; */\r\n  }\r\n.gColor{\r\n    color: #da9d40;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3N1bW1lcnktdmlldy9zdW1tZXJ5LXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQkFBMkI7QUFDM0I7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFNBQVM7SUFDVCxvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUd6Qix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGlDQUFpQztJQUNqQyw4QkFBOEI7QUFDbEM7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCO0FBSUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0tBQ2pCLFNBQVM7R0FDWDtpQkFDYztLQUNaLGdCQUFnQjtNQUNmLFdBQVc7SUFDYjtBQUNKO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBR0E7O0dBRUc7QUFFSDtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCO0FBQ0o7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBRUE7SUFDSSxjQUFjO0lBQ2Qsc0NBQXNDO0FBQzFDO0FBS0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7SUFDVixlQUFlO0VBQ2pCO0FBQ0Y7SUFDSSxXQUFXO0FBQ2Y7QUFHQSw0QkFBNEI7QUFDNUI7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLG1DQUFtQztJQUNuQyxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQiwwQkFBMEI7SUFDMUIsbUNBQW1DO0lBQ25DLGVBQWU7QUFDbkI7QUFDQTtJQUNJO1FBQ0ksa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixtQ0FBbUM7SUFDdkM7QUFDSjtBQUVBO0lBQ0k7UUFDSSxtQkFBbUI7SUFDdkI7QUFDSjtBQUdFO0lBQ0UsS0FBSywrQkFBK0IsRUFBRTtJQUN0QyxPQUFPLGlDQUFpQyxFQUFFO0VBQzVDO0FBRUE7SUFDRSxLQUFLLHVCQUF1QixFQUFFO0lBQzlCLE9BQU8seUJBQXlCLEVBQUU7RUFDcEM7QUFLRiwyQkFBMkI7QUFDM0I7SUFDSSxjQUFjLEVBQUUsc0JBQXNCO0lBQ3RDLGVBQWUsRUFBRSxrQkFBa0I7SUFDbkMsVUFBVSxFQUFFLGVBQWU7SUFDM0Isa0JBQWtCLEVBQUUsd0JBQXdCO0lBQzVDLE9BQU87SUFDUCxNQUFNO0lBQ04sV0FBVyxFQUFFLGVBQWU7SUFDNUIsWUFBWSxFQUFFLGdCQUFnQjtJQUM5QixjQUFjLEVBQUUsNEJBQTRCO0lBQzVDLDRCQUE0QixFQUFFLG1CQUFtQjtJQUNqRCxpQ0FBaUMsRUFBRSxxQkFBcUI7RUFDMUQ7QUFFQSxrQkFBa0I7QUFDbEI7SUFDRSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixxRUFBcUU7SUFDckUsa0NBQWtDO0lBQ2xDLGdDQUFnQztJQUNoQywwQkFBMEI7SUFDMUI7RUFDRjtBQUVBO0lBQ0U7TUFDRSxrQkFBa0I7TUFDbEIseUJBQXlCO01BQ3pCLFlBQVk7TUFDWixVQUFVO01BQ1Ysc0JBQXNCO01BQ3RCLFVBQVU7TUFDVixxRUFBcUU7TUFDckUsa0NBQWtDO01BQ2xDLGdDQUFnQztNQUNoQywwQkFBMEI7TUFDMUI7SUFDRjtFQUNGO0FBRUEsa0JBQWtCO0FBQ2xCO0lBQ0UsTUFBTSxVQUFVLEVBQUUsU0FBUztJQUMzQixJQUFJLEtBQUssRUFBRSxTQUFTO0VBQ3RCO0FBRUE7SUFDRSxNQUFNLFVBQVUsRUFBRSxTQUFTO0lBQzNCLElBQUksS0FBSyxFQUFFLFNBQVM7RUFDdEI7QUFFQSxxQkFBcUI7QUFDckI7SUFDRSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjtBQUVBOztJQUVFLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsZUFBZTtFQUNqQjtBQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCO21CQUNlO0VBQ2pCO0FBRUE7TUFDSSxpQkFBaUI7TUFDakIsZ0JBQWdCO0VBQ3BCO0FBRUE7SUFDRSxpQkFBaUI7SUFDakI7bUJBQ2U7RUFDakI7QUFHQTtJQUNFLGNBQWM7RUFDaEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvc3VtbWVyeS12aWV3L3N1bW1lcnktdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogb3Bvc2l0IDkwIGRlIHRyYW1zZnJvbSAqL1xyXG4uaXRuRGF5IHNwYW4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICM2MGMyNzA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1cHg7XHJcbiAgICB0b3A6IDI0cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG5cclxuYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTY2LCAyMDQsIDEwOCk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcblxyXG5cclxuc3Bhbi5jbGljay10by10b3Agc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBub25lOyBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgICAgYm90dG9tOiAwO1xyXG4gICAvKiAgbGVmdDogMDsgXHJcbiAgICAgcmlnaHQ6IDA7ICAqL1xyXG4gICAgIGJhY2tncm91bmQ6ICMzMzM7XHJcbiAgICAgIGNvbG9yOiAjZmZmOyBcclxuICAgIH1cclxuc3Bhbi5jbGljay10by10b3A6aG92ZXIgc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYm9yZGVyLXJhZGl1czoycHg7IFxyXG4gICAgd2lkdGg6IDEwZW07ICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgICBcclxufVxyXG5cclxuXHJcbi8qIC5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDk3JTtcclxufSAqL1xyXG5cclxuaW1nIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm91dGxldC12aWV3e1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGNvbG9yOiByZ2IoMTAsIDEwLCAxMCk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW47XCJcclxufVxyXG5cclxuLmFnZW5jeS1jb2xvcntcclxuICAgIGNvbG9yOiAjYzQ2ZjA2O1xyXG4gICAgbWFyZ2luLXRvcDogMXB4O1xyXG59XHJcblxyXG4uZGF5LWNvdW50IHtcclxuICAgIGNvbG9yOiAjZmE4ZjBiO1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG8sc2Fucy1zZXJpZiFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5ib3R0b21yaWdodCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDhweDtcclxuICAgIHJpZ2h0OiAxcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG4ubWFyZ2luMXtcclxuICAgIG1hcmdpbjogMXB4O1xyXG59XHJcbiAgXHJcblxyXG4vKnNlYXJjaCBib3ggY3NzIHN0YXJ0IGhlcmUqL1xyXG4uc2VhcmNoLXNlY3tcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbn1cclxuLnNlYXJjaC1zbHR7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgY29sb3I6ICM1NTU5NWM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBoZWlnaHQ6IGNhbGMoM3JlbSArIDJweCkgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6MDtcclxufVxyXG4ud3JuLWJ0bntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDNyZW0gKyAycHgpICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOjA7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KXtcclxuICAgIC5zZWFyY2gtc2Vje1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAvKiB0b3A6IC0xMTRweDsgKi9cclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI2LCA3MCwgMTA0LCAwLjUxKTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KXtcclxuICAgIC5zZWFyY2gtc2Vje1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMxQTQ2Njg7XHJcbiAgICB9XHJcbn0gXHJcblxyXG4gIFxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcclxuICAgIDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gICAgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIHNwaW4ge1xyXG4gICAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxuICB9IFxyXG5cclxuXHJcblxyXG5cclxuLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xyXG4ubW9kYWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cclxuICAgIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cclxuICAgIHBhZGRpbmctdG9wOiAxMDBweDsgLyogTG9jYXRpb24gb2YgdGhlIGJveCAqL1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXHJcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cclxuICB9XHJcbiAgXHJcbiAgLyogTW9kYWwgQ29udGVudCAqL1xyXG4gIC5tb2RhbC1jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMiksMCA2cHggMjBweCAwIHJnYmEoMCwwLDAsMC4xOSk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40c1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEobWF4LXdpZHRoOjc2OHB4KXtcclxuICAgIC5tb2RhbC1jb250ZW50IHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XHJcbiAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKSwwIDZweCAyMHB4IDAgcmdiYSgwLDAsMCwwLjE5KTtcclxuICAgICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcclxuICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgICAgIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xyXG4gICAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNHNcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qIEFkZCBBbmltYXRpb24gKi9cclxuICBALXdlYmtpdC1rZXlmcmFtZXMgYW5pbWF0ZXRvcCB7XHJcbiAgICBmcm9tIHt0b3A6LTMwMHB4OyBvcGFjaXR5OjB9IFxyXG4gICAgdG8ge3RvcDowOyBvcGFjaXR5OjF9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgYW5pbWF0ZXRvcCB7XHJcbiAgICBmcm9tIHt0b3A6LTMwMHB4OyBvcGFjaXR5OjB9XHJcbiAgICB0byB7dG9wOjA7IG9wYWNpdHk6MX1cclxuICB9XHJcbiAgXHJcbiAgLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xyXG4gIC5jbG9zZSB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC01cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jbG9zZTpob3ZlcixcclxuICAuY2xvc2U6Zm9jdXMge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLm1vZGFsLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAycHggMTZweDtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICM1Y2I4NWM7XHJcbiAgICBjb2xvcjogd2hpdGU7ICovXHJcbiAgfVxyXG4gIFxyXG4gIC5tb2RhbC1ib2R5IHtcclxuICAgICAgcGFkZGluZzogMnB4IDE2cHg7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDIwZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5tb2RhbC1mb290ZXIge1xyXG4gICAgcGFkZGluZzogMnB4IDE2cHg7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNiODVjO1xyXG4gICAgY29sb3I6IHdoaXRlOyAqL1xyXG4gIH0gXHJcblxyXG5cclxuICAuZ0NvbG9ye1xyXG4gICAgY29sb3I6ICNkYTlkNDA7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/summery-view/summery-view.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/summery-view/summery-view.component.ts ***!
  \***************************************************************/
/*! exports provided: SummeryViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummeryViewComponent", function() { return SummeryViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_product_summary_info_summary_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/product/summary-info/summary-info.service */ "./src/app/product/summary-info/summary-info.service.ts");



var SummeryViewComponent = /** @class */ (function () {
    // productArr =[];
    function SummeryViewComponent(summaryInfoService) {
        this.summaryInfoService = summaryInfoService;
        this.loading = true;
        this.isModalOpen = false;
        this.isModalLoading = true;
        this.isButtonEnabled = true;
    }
    SummeryViewComponent.prototype.ngOnChanges = function (changes) {
        // this.productArr =this.productArrInfo;
        console.log(this.productArr);
        if (this.productArr) {
            this.loading = false;
        }
    };
    SummeryViewComponent.prototype.ngOnInit = function () {
    };
    SummeryViewComponent.prototype.openModalInfo = function (agencyId) {
        var _this = this;
        // console.log('inside--openModalInfo---------------------')
        this.isModalOpen = true;
        var req = {
            agencyId: agencyId,
            agencyName: ''
        };
        this.summaryInfoService.getBookerDetails(req).subscribe({
            next: function (products) {
                _this.bookerInfo = products;
                // console.log('productResp'+productResp
                _this.isModalLoading = false;
            },
            error: function (err) { _this.errorMessage = err; }
        });
    };
    SummeryViewComponent.prototype.closeModalInfo = function () {
        // console.log('inside--openModalInfo---------------------')
        this.isModalOpen = false;
    };
    SummeryViewComponent.ctorParameters = function () { return [
        { type: src_app_product_summary_info_summary_info_service__WEBPACK_IMPORTED_MODULE_2__["SummaryInfoService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], SummeryViewComponent.prototype, "productArr", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], SummeryViewComponent.prototype, "isButtonEnabled", void 0);
    SummeryViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-summery-view',
            template: __webpack_require__(/*! raw-loader!./summery-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/summery-view/summery-view.component.html"),
            styles: [__webpack_require__(/*! ./summery-view.component.css */ "./src/app/shared/summery-view/summery-view.component.css")]
        })
    ], SummeryViewComponent);
    return SummeryViewComponent;
}());



/***/ }),

/***/ "./src/app/sign-up-info/sign-up-info.component.css":
/*!*********************************************************!*\
  !*** ./src/app/sign-up-info/sign-up-info.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n#test {\r\n    color: #fff;\r\n    background: #19aa8d;\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.form-control, .form-control:focus, .input-group-addon {\r\n    border-color: #e1e1e1;\r\n}\r\n\r\n.form-control, .btn {        \r\n    border-radius: 3px;\r\n}\r\n\r\n.signup-form {\r\n    width: 390px;\r\n    margin: 0 auto;\r\n    padding: 30px 0;\r\n}\r\n\r\n.signup-form form {\r\n    color: #999;\r\n    border-radius: 3px;\r\n    margin-bottom: 15px;\r\n    background: #fff;\r\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n    padding: 30px;\r\n}\r\n\r\n.signup-form h2 {\r\n    color: #333;\r\n    font-weight: bold;\r\n    margin-top: 0;\r\n}\r\n\r\n.signup-form hr {\r\n    margin: 0 -30px 20px;\r\n}\r\n\r\n.signup-form .form-group {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.signup-form label {\r\n    font-weight: normal;\r\n    font-size: 13px;\r\n}\r\n\r\n.signup-form .form-control {\r\n    min-height: 38px;\r\n    box-shadow: none !important;\r\n}\r\n\r\n.signup-form .input-group-addon {\r\n    max-width: 42px;\r\n    text-align: center;\r\n}\r\n\r\n.signup-form input[type=\"checkbox\"] {\r\n    margin-top: 2px;\r\n}\r\n\r\n.signup-form .btn{        \r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    background: #19aa8d;\r\n    border: none;\r\n    min-width: 140px;\r\n}\r\n\r\n.signup-form .btn:hover, .signup-form .btn:focus {\r\n    background: #179b81;\r\n    outline: none;\r\n}\r\n\r\n.signup-form a {\r\n    color: #fff;\t\r\n    text-decoration: underline;\r\n}\r\n\r\n.signup-form a:hover {\r\n    text-decoration: none;\r\n}\r\n\r\n.signup-form form a {\r\n    color: #19aa8d;\r\n    text-decoration: none;\r\n}\r\n\r\n.signup-form form a:hover {\r\n    text-decoration: underline;\r\n}\r\n\r\n.signup-form .fa {\r\n    font-size: 21px;\r\n}\r\n\r\n.signup-form .fa-paper-plane {\r\n    font-size: 18px;\r\n}\r\n\r\n.signup-form .fa-check {\r\n    color: #fff;\r\n    left: 17px;\r\n    top: 18px;\r\n    font-size: 7px;\r\n    position: absolute;\r\n}\r\n\r\n.inner .form-row .form-holder.form-holder-2 {\r\n\twidth: 100%;\r\n\tposition: relative;\r\n}\r\n\r\n.inner .form-row .form-holder.form-holder-3 {\r\n\tmargin-bottom: 0;\r\n}\r\n\r\n.inner .form-row .form-row-inner {\r\n\tposition: relative;\r\n}\r\n\r\n.inner .form-row .form-holder {\r\n    width: 50%;\r\n    padding: 0 10px;\r\n    margin-bottom: 17px;\r\n    position: relative;\r\n}\r\n\r\n.inner .form-row.form-row-date .form-holder select {\r\n    float: left;\r\n    width: 20.6%;\r\n    margin-right: 15px;\r\n}\r\n\r\n.inner .form-row .form-holder select {\r\n    font-size: 14px;\r\n    color: #666;\r\n    font-weight: 600;\r\n    background: #fff url('form-v1-icon.png') no-repeat scroll;\r\n    background-position: right 6px center;\r\n    z-index: 1;\r\n    cursor: pointer;\r\n    position: relative;\r\n    border: 2px solid #e5e5e5;\r\n    padding: 10.4px 13px;\r\n}\r\n\r\noption {\r\n    font-weight: normal;\r\n    display: block;\r\n    white-space: pre;\r\n    min-height: 1.2em;\r\n    padding: 0px 2px 1px;\r\n}\r\n\r\nselect:not(:-internal-list-box) {\r\n    overflow: visible !important;\r\n}\r\n\r\nselect {\r\n    -webkit-writing-mode: horizontal-tb !important;\r\n    text-rendering: auto;\r\n    color: -internal-light-dark-color(black, white);\r\n    letter-spacing: normal;\r\n    word-spacing: normal;\r\n    text-transform: none;\r\n    text-indent: 0px;\r\n    text-shadow: none;\r\n    display: inline-block;\r\n    text-align: start;\r\n    -webkit-appearance: menulist;\r\n    box-sizing: border-box;\r\n    align-items: center;\r\n    white-space: pre;\r\n    -webkit-rtl-ordering: logical;\r\n    background-color: -internal-light-dark-color(white, black);\r\n    cursor: default;\r\n    margin: 0em;\r\n    font: 400 13.3333px Arial;\r\n    border-radius: 0px;\r\n    border-width: 1px;\r\n    border-style: solid;\r\n    border-color: rgb(169, 169, 169);\r\n    -o-border-image: initial;\r\n       border-image: initial;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi11cC1pbmZvL3NpZ24tdXAtaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLDBDQUEwQztJQUMxQyxhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsMkJBQTJCO0FBQy9COztBQUNBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsMEJBQTBCO0FBQzlCOztBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUNBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtBQUN6Qjs7QUFDQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUNBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixTQUFTO0lBQ1QsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFRQTtDQUNDLFdBQVc7Q0FDWCxrQkFBa0I7QUFDbkI7O0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBQ0E7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLHlEQUF5RTtJQUN6RSxxQ0FBcUM7SUFDckMsVUFBVTtJQUNWLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSw4Q0FBOEM7SUFDOUMsb0JBQW9CO0lBQ3BCLCtDQUErQztJQUMvQyxzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3QiwwREFBMEQ7SUFDMUQsZUFBZTtJQUNmLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZ0NBQWdDO0lBQ2hDLHdCQUFxQjtPQUFyQixxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9zaWduLXVwLWluZm8vc2lnbi11cC1pbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuI3Rlc3Qge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTlhYThkO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLCAuZm9ybS1jb250cm9sOmZvY3VzLCAuaW5wdXQtZ3JvdXAtYWRkb24ge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZTFlMWUxO1xyXG59XHJcbi5mb3JtLWNvbnRyb2wsIC5idG4geyAgICAgICAgXHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuLnNpZ251cC1mb3JtIHtcclxuICAgIHdpZHRoOiAzOTBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMzBweCAwO1xyXG59XHJcbi5zaWdudXAtZm9ybSBmb3JtIHtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG59XHJcbi5zaWdudXAtZm9ybSBoMiB7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxufVxyXG4uc2lnbnVwLWZvcm0gaHIge1xyXG4gICAgbWFyZ2luOiAwIC0zMHB4IDIwcHg7XHJcbn1cclxuLnNpZ251cC1mb3JtIC5mb3JtLWdyb3VwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLnNpZ251cC1mb3JtIGxhYmVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuLnNpZ251cC1mb3JtIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgbWluLWhlaWdodDogMzhweDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxufVx0XHJcbi5zaWdudXAtZm9ybSAuaW5wdXQtZ3JvdXAtYWRkb24ge1xyXG4gICAgbWF4LXdpZHRoOiA0MnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5zaWdudXAtZm9ybSBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG59ICAgXHJcbi5zaWdudXAtZm9ybSAuYnRueyAgICAgICAgXHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJhY2tncm91bmQ6ICMxOWFhOGQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtaW4td2lkdGg6IDE0MHB4O1xyXG59XHJcbi5zaWdudXAtZm9ybSAuYnRuOmhvdmVyLCAuc2lnbnVwLWZvcm0gLmJ0bjpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTc5YjgxO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG4uc2lnbnVwLWZvcm0gYSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcdFxyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuLnNpZ251cC1mb3JtIGE6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5zaWdudXAtZm9ybSBmb3JtIGEge1xyXG4gICAgY29sb3I6ICMxOWFhOGQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cdFxyXG4uc2lnbnVwLWZvcm0gZm9ybSBhOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbi5zaWdudXAtZm9ybSAuZmEge1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG59XHJcbi5zaWdudXAtZm9ybSAuZmEtcGFwZXItcGxhbmUge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5zaWdudXAtZm9ybSAuZmEtY2hlY2sge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBsZWZ0OiAxN3B4O1xyXG4gICAgdG9wOiAxOHB4O1xyXG4gICAgZm9udC1zaXplOiA3cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi5pbm5lciAuZm9ybS1yb3cgLmZvcm0taG9sZGVyLmZvcm0taG9sZGVyLTIge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uaW5uZXIgLmZvcm0tcm93IC5mb3JtLWhvbGRlci5mb3JtLWhvbGRlci0zIHtcclxuXHRtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbi5pbm5lciAuZm9ybS1yb3cgLmZvcm0tcm93LWlubmVyIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5pbm5lciAuZm9ybS1yb3cgLmZvcm0taG9sZGVyIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxN3B4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaW5uZXIgLmZvcm0tcm93LmZvcm0tcm93LWRhdGUgLmZvcm0taG9sZGVyIHNlbGVjdCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAyMC42JTtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxufSBcclxuXHJcbi5pbm5lciAuZm9ybS1yb3cgLmZvcm0taG9sZGVyIHNlbGVjdCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzY2NjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmIHVybChzcmMvYXNzZXRzL2ltYWdlcy9mb3JtLXYxLWljb24ucG5nKSBuby1yZXBlYXQgc2Nyb2xsO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgNnB4IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZTVlNWU1O1xyXG4gICAgcGFkZGluZzogMTAuNHB4IDEzcHg7XHJcbn1cclxuXHJcbm9wdGlvbiB7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlO1xyXG4gICAgbWluLWhlaWdodDogMS4yZW07XHJcbiAgICBwYWRkaW5nOiAwcHggMnB4IDFweDtcclxufVxyXG5cclxuc2VsZWN0Om5vdCg6LWludGVybmFsLWxpc3QtYm94KSB7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5zZWxlY3Qge1xyXG4gICAgLXdlYmtpdC13cml0aW5nLW1vZGU6IGhvcml6b250YWwtdGIgIWltcG9ydGFudDtcclxuICAgIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xyXG4gICAgY29sb3I6IC1pbnRlcm5hbC1saWdodC1kYXJrLWNvbG9yKGJsYWNrLCB3aGl0ZSk7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgd29yZC1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIHRleHQtaW5kZW50OiAwcHg7XHJcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBtZW51bGlzdDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2hpdGUtc3BhY2U6IHByZTtcclxuICAgIC13ZWJraXQtcnRsLW9yZGVyaW5nOiBsb2dpY2FsO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogLWludGVybmFsLWxpZ2h0LWRhcmstY29sb3Iod2hpdGUsIGJsYWNrKTtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIG1hcmdpbjogMGVtO1xyXG4gICAgZm9udDogNDAwIDEzLjMzMzNweCBBcmlhbDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDE2OSwgMTY5LCAxNjkpO1xyXG4gICAgYm9yZGVyLWltYWdlOiBpbml0aWFsO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/sign-up-info/sign-up-info.component.ts":
/*!********************************************************!*\
  !*** ./src/app/sign-up-info/sign-up-info.component.ts ***!
  \********************************************************/
/*! exports provided: SignUpInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpInfoComponent", function() { return SignUpInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Auth/authentication.service */ "./src/app/Auth/authentication.service.ts");



var SignUpInfoComponent = /** @class */ (function () {
    function SignUpInfoComponent(authenticationService) {
        this.authenticationService = authenticationService;
        this.userRole = 'PlaneUser';
        this.required = true;
        this.isLoading = false;
        this.isSuccessMessage = false;
        this.isErrorMessage = false;
        this.isAgencyUser = false;
        this.isAccept = false;
        this.PlaneUser = 'PlaneUser';
        this.TravelAgencyUser = 'TravelAgencyUser';
    }
    SignUpInfoComponent.prototype.ngOnInit = function () {
    };
    SignUpInfoComponent.prototype.onChangeValue = function (isSelect, value) {
        console.log('isSelect ' + isSelect + ' value ' + value);
        if ('trvelAgent' == value) {
            this.userRole = 'AgencyUser';
            this.isAgencyUser = true;
        }
        else {
            this.userRole = 'PlaneUser';
            this.isAgencyUser = false;
        }
    };
    SignUpInfoComponent.prototype.userSignUp = function () {
        var _this = this;
        this.isLoading = true;
        var allOk = true;
        console.log('inside....' + this.isAccept);
        if (!this.email) {
            this.errorFullMessage('Email required..');
            allOk = false;
            return;
        }
        if (this.password) {
            if (this.password != this.confirmPassword) {
                this.errorFullMessage('Password mish match try again..');
                this.password = '';
                this.confirmPassword = '';
                allOk = false;
                return;
            }
        }
        else {
            this.errorFullMessage('Password required..');
            allOk = false;
            return;
        }
        if (!this.isAccept) {
            this.errorFullMessage('Acccept Terms & Policy ....');
            allOk = false;
            return;
        }
        if (allOk) {
            var request = {
                userName: this.email,
                password: this.password,
                phoneNo: this.phoneNo,
                firstName: this.fName,
                lastName: this.lName,
                userRole: this.userRole,
                mailId: this.email,
                currency: this.currency,
                agencyName: this.agencyName
            };
            console.log("request" + JSON.stringify(request));
            this.authenticationService.userRegistration(request).subscribe({
                next: function (products) {
                    var response = products;
                    var isValid = response.isValidUser;
                    console.log('isValid--' + isValid);
                    if (isValid == 'true') {
                        _this.successFullMessage();
                    }
                    else {
                        var er = response.error;
                        if (er) {
                            _this.errorFullMessage(er);
                        }
                        else {
                            _this.errorFullMessage('Unable to create user Please provide currect info ....');
                        }
                    }
                    _this.isLoading = false;
                },
                error: function (err) {
                    _this.isLoading = false;
                    _this.errorFullMessage('Unable to create user ......');
                }
            });
        }
        else {
            this.isLoading = false;
        }
    };
    SignUpInfoComponent.prototype.successFullMessage = function () {
        this.successMsg = 'User Registration Successfuly Done, Please Login .....';
        this.isSuccessMessage = true;
        var data = this;
        setTimeout(function () {
            data.isSuccessMessage = false;
        }, 3000);
    };
    SignUpInfoComponent.prototype.errorFullMessage = function (message) {
        this.errorMsg = message;
        this.isErrorMessage = true;
        var data = this;
        setTimeout(function () {
            data.isErrorMessage = false;
        }, 3000);
        this.isLoading = false;
    };
    SignUpInfoComponent.ctorParameters = function () { return [
        { type: _Auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
    ]; };
    SignUpInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-up-info',
            template: __webpack_require__(/*! raw-loader!./sign-up-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/sign-up-info/sign-up-info.component.html"),
            styles: [__webpack_require__(/*! ./sign-up-info.component.css */ "./src/app/sign-up-info/sign-up-info.component.css")]
        })
    ], SignUpInfoComponent);
    return SignUpInfoComponent;
}());



/***/ }),

/***/ "./src/app/test-info/test-info.component.css":
/*!***************************************************!*\
  !*** ./src/app/test-info/test-info.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* The Modal (background) */\r\n.modal {\r\n    display: block; /* Hidden by default */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1; /* Sit on top */\r\n    padding-top: 100px; /* Location of the box */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n  }\r\n/* Modal Content */\r\n.modal-content {\r\n    position: relative;\r\n    background-color: #fefefe;\r\n    margin: auto;\r\n    padding: 0;\r\n    border: 1px solid #888;\r\n    width: 80%;\r\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\r\n    -webkit-animation-name: animatetop;\r\n    -webkit-animation-duration: 0.4s;\r\n    animation-name: animatetop;\r\n    animation-duration: 0.4s\r\n  }\r\n/* Add Animation */\r\n@-webkit-keyframes animatetop {\r\n    from {top:-300px; opacity:0} \r\n    to {top:0; opacity:1}\r\n  }\r\n@keyframes animatetop {\r\n    from {top:-300px; opacity:0}\r\n    to {top:0; opacity:1}\r\n  }\r\n/* The Close Button */\r\n.close {\r\n    color: red;\r\n    float: right;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n    margin-top: 0px;\r\n    margin-right: -5px;\r\n  }\r\n.close:hover,\r\n  .close:focus {\r\n    color: red;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n  }\r\n.modal-header {\r\n    padding: 2px 16px;\r\n    /* background-color: #5cb85c;\r\n    color: white; */\r\n  }\r\n.modal-body {\r\n      padding: 2px 16px;\r\n      min-height: 20em;\r\n  }\r\n.modal-footer {\r\n    padding: 2px 16px;\r\n    /* background-color: #5cb85c;\r\n    color: white; */\r\n  } \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVzdC1pbmZvL3Rlc3QtaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJCQUEyQjtBQUMzQjtJQUNJLGNBQWMsRUFBRSxzQkFBc0I7SUFDdEMsZUFBZSxFQUFFLGtCQUFrQjtJQUNuQyxVQUFVLEVBQUUsZUFBZTtJQUMzQixrQkFBa0IsRUFBRSx3QkFBd0I7SUFDNUMsT0FBTztJQUNQLE1BQU07SUFDTixXQUFXLEVBQUUsZUFBZTtJQUM1QixZQUFZLEVBQUUsZ0JBQWdCO0lBQzlCLGNBQWMsRUFBRSw0QkFBNEI7SUFDNUMsNEJBQTRCLEVBQUUsbUJBQW1CO0lBQ2pELGlDQUFpQyxFQUFFLHFCQUFxQjtFQUMxRDtBQUVBLGtCQUFrQjtBQUNsQjtJQUNFLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLHFFQUFxRTtJQUNyRSxrQ0FBa0M7SUFDbEMsZ0NBQWdDO0lBQ2hDLDBCQUEwQjtJQUMxQjtFQUNGO0FBRUEsa0JBQWtCO0FBQ2xCO0lBQ0UsTUFBTSxVQUFVLEVBQUUsU0FBUztJQUMzQixJQUFJLEtBQUssRUFBRSxTQUFTO0VBQ3RCO0FBRUE7SUFDRSxNQUFNLFVBQVUsRUFBRSxTQUFTO0lBQzNCLElBQUksS0FBSyxFQUFFLFNBQVM7RUFDdEI7QUFFQSxxQkFBcUI7QUFDckI7SUFDRSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjtBQUVBOztJQUVFLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsZUFBZTtFQUNqQjtBQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCO21CQUNlO0VBQ2pCO0FBRUE7TUFDSSxpQkFBaUI7TUFDakIsZ0JBQWdCO0VBQ3BCO0FBRUE7SUFDRSxpQkFBaUI7SUFDakI7bUJBQ2U7RUFDakIiLCJmaWxlIjoic3JjL2FwcC90ZXN0LWluZm8vdGVzdC1pbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXHJcbi5tb2RhbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jazsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cclxuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xyXG4gICAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xyXG4gICAgcGFkZGluZy10b3A6IDEwMHB4OyAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cclxuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cclxuICAgIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xyXG4gIH1cclxuICBcclxuICAvKiBNb2RhbCBDb250ZW50ICovXHJcbiAgLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKSwwIDZweCAyMHB4IDAgcmdiYSgwLDAsMCwwLjE5KTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzXHJcbiAgfVxyXG4gIFxyXG4gIC8qIEFkZCBBbmltYXRpb24gKi9cclxuICBALXdlYmtpdC1rZXlmcmFtZXMgYW5pbWF0ZXRvcCB7XHJcbiAgICBmcm9tIHt0b3A6LTMwMHB4OyBvcGFjaXR5OjB9IFxyXG4gICAgdG8ge3RvcDowOyBvcGFjaXR5OjF9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgYW5pbWF0ZXRvcCB7XHJcbiAgICBmcm9tIHt0b3A6LTMwMHB4OyBvcGFjaXR5OjB9XHJcbiAgICB0byB7dG9wOjA7IG9wYWNpdHk6MX1cclxuICB9XHJcbiAgXHJcbiAgLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xyXG4gIC5jbG9zZSB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC01cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jbG9zZTpob3ZlcixcclxuICAuY2xvc2U6Zm9jdXMge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLm1vZGFsLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAycHggMTZweDtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICM1Y2I4NWM7XHJcbiAgICBjb2xvcjogd2hpdGU7ICovXHJcbiAgfVxyXG4gIFxyXG4gIC5tb2RhbC1ib2R5IHtcclxuICAgICAgcGFkZGluZzogMnB4IDE2cHg7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDIwZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5tb2RhbC1mb290ZXIge1xyXG4gICAgcGFkZGluZzogMnB4IDE2cHg7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNiODVjO1xyXG4gICAgY29sb3I6IHdoaXRlOyAqL1xyXG4gIH0gIl19 */"

/***/ }),

/***/ "./src/app/test-info/test-info.component.ts":
/*!**************************************************!*\
  !*** ./src/app/test-info/test-info.component.ts ***!
  \**************************************************/
/*! exports provided: TestInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestInfoComponent", function() { return TestInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TestInfoComponent = /** @class */ (function () {
    function TestInfoComponent() {
        this.isDisplay = 'none';
        this.isModalOpen = false;
    }
    TestInfoComponent.prototype.ngOnInit = function () {
    };
    TestInfoComponent.prototype.openModalInfo = function () {
        console.log('inside--openModalInfo---------------------');
        this.isDisplay = 'block';
        this.isModalOpen = true;
    };
    TestInfoComponent.prototype.closeModalInfo = function () {
        console.log('inside--openModalInfo---------------------');
        this.isDisplay = 'none';
        this.isModalOpen = false;
    };
    TestInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test-info',
            template: __webpack_require__(/*! raw-loader!./test-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/test-info/test-info.component.html"),
            styles: [__webpack_require__(/*! ./test-info.component.css */ "./src/app/test-info/test-info.component.css")]
        })
    ], TestInfoComponent);
    return TestInfoComponent;
}());



/***/ }),

/***/ "./src/app/welcome-info/welcome-info.component.css":
/*!*********************************************************!*\
  !*** ./src/app/welcome-info/welcome-info.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".display-2 {\r\n    font-family: 'Kaushan Script', handwriting;\r\n    font-size: 5rem; \r\n}\r\n\r\n.align-center {\r\n    text-align: center;\r\n}\r\n\r\n.cid-qwYTGS06Eb .mbr-section-subtitle {\r\n    color: #767676;\r\n}\r\n\r\n.display-5 {\r\n    font-family: 'Kaushan Script', handwriting;\r\n    font-size: 2.5rem;\r\n}\r\n\r\n.mbr-section-subtitle {\r\n    line-height: 1.3;\r\n}\r\n\r\n.mbr-light {\r\n    font-weight: 300;\r\n}\r\n\r\n/* \r\n.container{\r\n    width: 100%;\r\n} */\r\n\r\nsection, .container, .container-fluid {\r\n    position: relative;\r\n    word-wrap: break-word;\r\n}\r\n\r\nsection {\r\n    background-position: 50% 50%;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\nsection, .container, .container-fluid {\r\n    position: relative;\r\n    word-wrap: break-word;\r\n}\r\n\r\n.card {\r\n    background-color: transparent;\r\n    border: none;\r\n}\r\n\r\n.cid-qwYWjewzYp .card-wrapper {\r\n    padding-bottom: 2rem;\r\n    background: #ffffff;\r\n    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);\r\n    transition: box-shadow 0.3s;\r\n}\r\n\r\n*, ::after, ::before {\r\n    box-sizing: inherit;\r\n}\r\n\r\n.card-img {\r\n    width: auto;\r\n}\r\n\r\n.card-img {\r\n    text-align: center;\r\n    flex-shrink: 0;\r\n}\r\n\r\n.card-img {\r\n    width: 100%;\r\n    border-radius: calc(.25rem - 1px);\r\n}\r\n\r\n.mbr-figure img, .card-img img {\r\n    width: 100%;\r\n}\r\n\r\nimg {\r\n    vertical-align: middle;\r\n    border-style: none;\r\n}\r\n\r\n.cid-qwYSQ4CzZl .image-block {\r\n    margin: auto;\r\n}\r\n\r\n.cid-qwYSQ4CzZl {\r\n    padding-top: 60px;\r\n    padding-bottom: 60px;\r\n    background: #ffffff;\r\n}\r\n\r\n.cid-qwYWjewzYp {\r\n    padding-top: 45px;\r\n    padding-bottom: 45px;\r\n    background-color: #ffffff;\r\n}\r\n\r\n.cid-qwYTGS06Eb {\r\n    padding-top: 60px;\r\n    padding-bottom: 60px;\r\n    background-color: #ffffff;\r\n}\r\n\r\n.cid-qwYSQ4CzZl {\r\n    padding-top: 60px;\r\n    padding-bottom: 60px;\r\n    background: #ffffff;\r\n}\r\n\r\n.pb-3 {\r\n    padding-bottom: 1rem!important;\r\n}\r\n\r\n/*! Media  */\r\n\r\n.media-size-item {\r\n    -moz-flex: 1 1 auto;\r\n    -o-flex: 1 1 auto;\r\n    flex: 1 1 auto; \r\n}\r\n\r\n.media-content {\r\n    flex-basis: 100%; \r\n}\r\n\r\n.media-container-row {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    align-content: center;\r\n    align-items: start;\r\n }\r\n\r\n.media-container-row .media-size-item {\r\n      width: 400px; \r\n    }\r\n\r\n.media-container-column {\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    align-content: center;\r\n    align-items: stretch;\r\n }\r\n\r\n.media-container-column > * {\r\n      width: 100%;\r\n     }\r\n\r\n@media (min-width: 992px) {\r\n    .media-container-row {\r\n      flex-wrap: nowrap; \r\n    } \r\n }\r\n\r\nfigure {\r\n    overflow: hidden;\r\n }\r\n\r\nfigure[mbr-media-size] {\r\n    transition: width 0.1s; \r\n}\r\n\r\n.mbr-figure img, .mbr-figure iframe {\r\n    display: block;\r\n    width: 100%; \r\n}\r\n\r\n.card {\r\n    background-color: transparent;\r\n    border: none; \r\n}\r\n\r\n.card-img {\r\n    text-align: center;\r\n    flex-shrink: 0; \r\n}\r\n\r\n.media {\r\n    max-width: 100%;\r\n    margin: 0 auto; \r\n}\r\n\r\n/*-- gallery --*/\r\n\r\n.gallary-font {\r\nfont-family: \"Brush Script Std\";\r\nfont-size: 3em;\r\n}\r\n\r\n.gallery {\r\n    margin-top: 30px;\r\n    margin-bottom: 5em;\r\n    /* font-family: \"Times New Roman\", Times, serif; */\r\n}\r\n\r\n.w3gallery-grids {\r\n    padding: .5em .5em 0;\r\n}\r\n\r\n/*-- imghvr-hinge --*/\r\n\r\n[class^='imghvr-'],\r\n[class*=' imghvr-'] {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\tmargin: 0px;\r\n\tmax-width: 100%;\r\n\tbackground-color:#232323;\r\n\tcolor:#212121;\r\n\toverflow: hidden;\r\n\t-webkit-backface-visibility: hidden; \r\n\tbackface-visibility: hidden;\r\n\t-moz-osx-font-smoothing: grayscale;\r\n\ttransform: translateZ(0);\r\n\tcursor: pointer;\r\n}\r\n\r\n[class^='imghvr-'] > img,\r\n[class*=' imghvr-'] > img {\r\n\tvertical-align: top;\r\n\tmax-width: 100%;\r\n}\r\n\r\n[class^='imghvr-'] .agile-figcaption,\r\n[class*=' imghvr-'] .agile-figcaption {\r\n\tbackground-color:#00d2be;\r\n\tpadding:4.5em;\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tbottom: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\tcolor:#212121;\r\n\ttext-align: center;\r\n}\r\n\r\n[class^='imghvr-'] .agile-figcaption h4{\r\n\tfont-size:2em;\r\n\tmargin-bottom:.5em;\r\n}\r\n\r\n[class^='imghvr-'] .agile-figcaption p{\r\n\tline-height:2em;\r\n\tcolor:#fff;\r\n}\r\n\r\n[class^='imghvr-'] a,\r\n[class*=' imghvr-'] a {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tbottom: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\tz-index: 1;\r\n}\r\n\r\n[class^='imghvr-'],\r\n[class*=' imghvr-'],\r\n[class^='imghvr-']:before,\r\n[class^='imghvr-']:after,\r\n[class*=' imghvr-']:before,\r\n[class*=' imghvr-']:after,\r\n[class^='imghvr-'] *,\r\n[class*=' imghvr-'] *,\r\n[class^='imghvr-'] *:before,\r\n[class^='imghvr-'] *:after,\r\n[class*=' imghvr-'] *:before,\r\n[class*=' imghvr-'] *:after {\r\n\t-o-box-sizing: border-box;\r\n\t-ms-box-sizing: border-box;\r\n\tbox-sizing: border-box;\r\n\ttransition: all 0.35s ease;\r\n}\r\n\r\n[class^='imghvr-hinge-'],\r\n[class*=' imghvr-hinge-'] {\r\n\tperspective: 50em;\r\n}\r\n\r\n[class^='imghvr-hinge-'] .agile-figcaption,\r\n[class*=' imghvr-hinge-'] .agile-figcaption {\r\n\topacity: 0;\r\n\tz-index: 1;\r\n}\r\n\r\n[class^='imghvr-hinge-']:hover img,\r\n[class*=' imghvr-hinge-']:hover img {\r\n\topacity: 0;\r\n}\r\n\r\n[class^='imghvr-hinge-']:hover .agile-figcaption,\r\n[class*=' imghvr-hinge-']:hover .agile-figcaption {\r\n\topacity: 1;\r\n\ttransition-delay: 0.21s;\r\n}\r\n\r\n/*-- imghvr-hinge-right -- */\r\n\r\n.imghvr-hinge-right img {\r\n\ttransform-origin: 100% 50%;\r\n}\r\n\r\n.imghvr-hinge-right .agile-figcaption {\r\n\t-webkit-transform: rotateY(90deg);\r\n\t-moz-transform-origin: 0 50%;\r\n\t-o-transform-origin: 0 50%;\r\n\t-ms-transform-origin: 0 50%;\r\n\ttransform: rotateY(90deg);\r\n\ttransform-origin: 0 50%;\r\n}\r\n\r\n.imghvr-hinge-right:hover > img {\r\n\ttransform: rotateY(-90deg);\r\n}\r\n\r\n.imghvr-hinge-right:hover .agile-figcaption {\r\n\ttransform: rotateY(0deg);\r\n} \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS1pbmZvL3dlbGNvbWUtaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMENBQTBDO0lBQzFDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksMENBQTBDO0lBQzFDLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTs7O0dBR0c7O0FBSUg7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLDRDQUE0QztJQUM1QywyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUdBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQix5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBLFlBQVk7O0FBQ1o7SUFFSSxtQkFBbUI7SUFFbkIsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUU7SUFFRSxnQkFBZ0I7QUFDcEI7O0FBRUU7SUFHRSxhQUFhO0lBR2IsbUJBQW1CO0lBR25CLGVBQWU7SUFHZix1QkFBdUI7SUFHdkIscUJBQXFCO0lBR3JCLGtCQUFrQjtDQUNyQjs7QUFFQTtNQUNLLFlBQVk7SUFDZDs7QUFFRjtJQUdFLGFBQWE7SUFHYixzQkFBc0I7SUFHdEIsZUFBZTtJQUdmLHVCQUF1QjtJQUd2QixxQkFBcUI7SUFHckIsb0JBQW9CO0NBQ3ZCOztBQUNHO01BQ0UsV0FBVztLQUNaOztBQUVIO0lBQ0U7TUFHRSxpQkFBaUI7SUFDbkI7Q0FDSDs7QUFDQztJQUNFLGdCQUFnQjtDQUNuQjs7QUFFQztJQUNFLHNCQUFzQjtBQUMxQjs7QUFFRTtJQUNFLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7O0FBRUU7SUFDRSw2QkFBNkI7SUFDN0IsWUFBWTtBQUNoQjs7QUFFRTtJQUNFLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVFO0lBQ0UsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBVUEsZ0JBQWdCOztBQUNoQjtBQUNBLCtCQUErQjtBQUMvQixjQUFjO0FBQ2Q7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtEQUFrRDtBQUN0RDs7QUFDQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFDQSxxQkFBcUI7O0FBQ3JCOztDQUVDLGtCQUFrQjtDQUNsQixxQkFBcUI7Q0FDckIsV0FBVztDQUNYLGVBQWU7Q0FDZix3QkFBd0I7Q0FDeEIsYUFBYTtDQUNiLGdCQUFnQjtDQUNoQixtQ0FBbUM7Q0FDbkMsMkJBQTJCO0NBQzNCLGtDQUFrQztDQUtsQyx3QkFBd0I7Q0FDeEIsZUFBZTtBQUNoQjs7QUFDQTs7Q0FFQyxtQkFBbUI7Q0FDbkIsZUFBZTtBQUNoQjs7QUFDQTs7Q0FFQyx3QkFBd0I7Q0FDeEIsYUFBYTtDQUNiLGtCQUFrQjtDQUNsQixNQUFNO0NBQ04sU0FBUztDQUNULE9BQU87Q0FDUCxRQUFRO0NBQ1IsYUFBYTtDQUNiLGtCQUFrQjtBQUNuQjs7QUFDQTtDQUNDLGFBQWE7Q0FDYixrQkFBa0I7QUFDbkI7O0FBQ0E7Q0FDQyxlQUFlO0NBQ2YsVUFBVTtBQUNYOztBQUNBOztDQUVDLGtCQUFrQjtDQUNsQixNQUFNO0NBQ04sU0FBUztDQUNULE9BQU87Q0FDUCxRQUFRO0NBQ1IsVUFBVTtBQUNYOztBQUNBOzs7Ozs7Ozs7Ozs7Q0FjQyx5QkFBeUI7Q0FDekIsMEJBQTBCO0NBQzFCLHNCQUFzQjtDQUd0QiwwQkFBMEI7QUFDM0I7O0FBQ0E7O0NBR0MsaUJBQWlCO0FBQ2xCOztBQUNBOztDQUVDLFVBQVU7Q0FDVixVQUFVO0FBQ1g7O0FBQ0E7O0NBRUMsVUFBVTtBQUNYOztBQUNBOztDQUVDLFVBQVU7Q0FLVix1QkFBdUI7QUFDeEI7O0FBRUEsNEJBQTRCOztBQUM1QjtDQUtDLDBCQUEwQjtBQUMzQjs7QUFDQTtDQUNDLGlDQUFpQztDQUNqQyw0QkFBNEI7Q0FDNUIsMEJBQTBCO0NBQzFCLDJCQUEyQjtDQUMzQix5QkFBeUI7Q0FLekIsdUJBQXVCO0FBQ3hCOztBQUNBO0NBS0MsMEJBQTBCO0FBQzNCOztBQUNBO0NBS0Msd0JBQXdCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvd2VsY29tZS1pbmZvL3dlbGNvbWUtaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpc3BsYXktMiB7XHJcbiAgICBmb250LWZhbWlseTogJ0thdXNoYW4gU2NyaXB0JywgaGFuZHdyaXRpbmc7XHJcbiAgICBmb250LXNpemU6IDVyZW07IFxyXG59XHJcblxyXG4uYWxpZ24tY2VudGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNpZC1xd1lUR1MwNkViIC5tYnItc2VjdGlvbi1zdWJ0aXRsZSB7XHJcbiAgICBjb2xvcjogIzc2NzY3NjtcclxufVxyXG4uZGlzcGxheS01IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnS2F1c2hhbiBTY3JpcHQnLCBoYW5kd3JpdGluZztcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG59XHJcbi5tYnItc2VjdGlvbi1zdWJ0aXRsZSB7XHJcbiAgICBsaW5lLWhlaWdodDogMS4zO1xyXG59XHJcbi5tYnItbGlnaHQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuLyogXHJcbi5jb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSAqL1xyXG5cclxuXHJcblxyXG5zZWN0aW9uLCAuY29udGFpbmVyLCAuY29udGFpbmVyLWZsdWlkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbnNlY3Rpb24sIC5jb250YWluZXIsIC5jb250YWluZXItZmx1aWQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG59XHJcbi5jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uY2lkLXF3WVdqZXd6WXAgLmNhcmQtd3JhcHBlciB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwKTtcclxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcztcclxufVxyXG5cclxuKiwgOjphZnRlciwgOjpiZWZvcmUge1xyXG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcclxufVxyXG4uY2FyZC1pbWcge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbi5jYXJkLWltZyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxufVxyXG4uY2FyZC1pbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiBjYWxjKC4yNXJlbSAtIDFweCk7XHJcbn1cclxuXHJcbi5tYnItZmlndXJlIGltZywgLmNhcmQtaW1nIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcblxyXG4uY2lkLXF3WVNRNEN6WmwgLmltYWdlLWJsb2NrIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmNpZC1xd1lTUTRDelpsIHtcclxuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDYwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uY2lkLXF3WVdqZXd6WXAge1xyXG4gICAgcGFkZGluZy10b3A6IDQ1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuLmNpZC1xd1lUR1MwNkViIHtcclxuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDYwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uY2lkLXF3WVNRNEN6Wmwge1xyXG4gICAgcGFkZGluZy10b3A6IDYwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNjBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbn1cclxuLnBiLTMge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW0haW1wb3J0YW50O1xyXG59IFxyXG5cclxuLyohIE1lZGlhICAqL1xyXG4ubWVkaWEtc2l6ZS1pdGVtIHtcclxuICAgIC13ZWJraXQtZmxleDogMSAxIGF1dG87XHJcbiAgICAtbW96LWZsZXg6IDEgMSBhdXRvO1xyXG4gICAgLW1zLWZsZXg6IDEgMSBhdXRvO1xyXG4gICAgLW8tZmxleDogMSAxIGF1dG87XHJcbiAgICBmbGV4OiAxIDEgYXV0bzsgXHJcbn1cclxuICBcclxuICAubWVkaWEtY29udGVudCB7XHJcbiAgICAtd2Via2l0LWZsZXgtYmFzaXM6IDEwMCU7XHJcbiAgICBmbGV4LWJhc2lzOiAxMDAlOyBcclxufVxyXG4gIFxyXG4gIC5tZWRpYS1jb250YWluZXItcm93IHtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xyXG4gICAgLW1zLWZsZXgtd3JhcDogd3JhcDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC13ZWJraXQtYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgLW1zLWZsZXgtbGluZS1wYWNrOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBzdGFydDtcclxuICAgIC1tcy1mbGV4LWFsaWduOiBzdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcclxuIH1cclxuICAgIFxyXG4gLm1lZGlhLWNvbnRhaW5lci1yb3cgLm1lZGlhLXNpemUtaXRlbSB7XHJcbiAgICAgIHdpZHRoOiA0MDBweDsgXHJcbiAgICB9XHJcbiAgXHJcbiAgLm1lZGlhLWNvbnRhaW5lci1jb2x1bW4ge1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAtbXMtZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1hbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAtbXMtZmxleC1saW5lLXBhY2s6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICAtbXMtZmxleC1hbGlnbjogc3RyZXRjaDtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gfVxyXG4gICAgLm1lZGlhLWNvbnRhaW5lci1jb2x1bW4gPiAqIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgLm1lZGlhLWNvbnRhaW5lci1yb3cge1xyXG4gICAgICAtd2Via2l0LWZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgICAtbXMtZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICAgIGZsZXgtd3JhcDogbm93cmFwOyBcclxuICAgIH0gXHJcbiB9XHJcbiAgZmlndXJlIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiB9XHJcbiAgXHJcbiAgZmlndXJlW21ici1tZWRpYS1zaXplXSB7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjFzOyBcclxufVxyXG4gIFxyXG4gIC5tYnItZmlndXJlIGltZywgLm1ici1maWd1cmUgaWZyYW1lIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7IFxyXG59XHJcbiAgXHJcbiAgLmNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7IFxyXG59XHJcbiAgXHJcbiAgLmNhcmQtaW1nIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZsZXgtc2hyaW5rOiAwOyBcclxufVxyXG4gIFxyXG4gIC5tZWRpYSB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bzsgXHJcbn0gXHJcbiAgXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLyotLSBnYWxsZXJ5IC0tKi9cclxuLmdhbGxhcnktZm9udCB7XHJcbmZvbnQtZmFtaWx5OiBcIkJydXNoIFNjcmlwdCBTdGRcIjtcclxuZm9udC1zaXplOiAzZW07XHJcbn0gXHJcblxyXG4uZ2FsbGVyeSB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNWVtO1xyXG4gICAgLyogZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjsgKi9cclxufVxyXG4udzNnYWxsZXJ5LWdyaWRzIHtcclxuICAgIHBhZGRpbmc6IC41ZW0gLjVlbSAwO1xyXG59ICBcclxuLyotLSBpbWdodnItaGluZ2UgLS0qL1xyXG5bY2xhc3NePSdpbWdodnItJ10sXHJcbltjbGFzcyo9JyBpbWdodnItJ10ge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0bWFyZ2luOiAwcHg7XHJcblx0bWF4LXdpZHRoOiAxMDAlO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IzIzMjMyMztcclxuXHRjb2xvcjojMjEyMTIxO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47IFxyXG5cdGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHQtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG5cdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG5cdC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG5cdC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuXHQtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuW2NsYXNzXj0naW1naHZyLSddID4gaW1nLFxyXG5bY2xhc3MqPScgaW1naHZyLSddID4gaW1nIHtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG5cdG1heC13aWR0aDogMTAwJTtcclxufVxyXG5bY2xhc3NePSdpbWdodnItJ10gLmFnaWxlLWZpZ2NhcHRpb24sXHJcbltjbGFzcyo9JyBpbWdodnItJ10gLmFnaWxlLWZpZ2NhcHRpb24ge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IzAwZDJiZTtcclxuXHRwYWRkaW5nOjQuNWVtO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDA7XHJcblx0Ym90dG9tOiAwO1xyXG5cdGxlZnQ6IDA7XHJcblx0cmlnaHQ6IDA7XHJcblx0Y29sb3I6IzIxMjEyMTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0gXHJcbltjbGFzc149J2ltZ2h2ci0nXSAuYWdpbGUtZmlnY2FwdGlvbiBoNHtcclxuXHRmb250LXNpemU6MmVtO1xyXG5cdG1hcmdpbi1ib3R0b206LjVlbTtcclxufVxyXG5bY2xhc3NePSdpbWdodnItJ10gLmFnaWxlLWZpZ2NhcHRpb24gcHtcclxuXHRsaW5lLWhlaWdodDoyZW07XHJcblx0Y29sb3I6I2ZmZjtcclxufVxyXG5bY2xhc3NePSdpbWdodnItJ10gYSxcclxuW2NsYXNzKj0nIGltZ2h2ci0nXSBhIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAwO1xyXG5cdGJvdHRvbTogMDtcclxuXHRsZWZ0OiAwO1xyXG5cdHJpZ2h0OiAwO1xyXG5cdHotaW5kZXg6IDE7XHJcbn1cclxuW2NsYXNzXj0naW1naHZyLSddLFxyXG5bY2xhc3MqPScgaW1naHZyLSddLFxyXG5bY2xhc3NePSdpbWdodnItJ106YmVmb3JlLFxyXG5bY2xhc3NePSdpbWdodnItJ106YWZ0ZXIsXHJcbltjbGFzcyo9JyBpbWdodnItJ106YmVmb3JlLFxyXG5bY2xhc3MqPScgaW1naHZyLSddOmFmdGVyLFxyXG5bY2xhc3NePSdpbWdodnItJ10gKixcclxuW2NsYXNzKj0nIGltZ2h2ci0nXSAqLFxyXG5bY2xhc3NePSdpbWdodnItJ10gKjpiZWZvcmUsXHJcbltjbGFzc149J2ltZ2h2ci0nXSAqOmFmdGVyLFxyXG5bY2xhc3MqPScgaW1naHZyLSddICo6YmVmb3JlLFxyXG5bY2xhc3MqPScgaW1naHZyLSddICo6YWZ0ZXIge1xyXG5cdC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHQtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0LW8tYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHQtbXMtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMzVzIGVhc2U7XHJcblx0LW1vei10cmFuc2l0aW9uOiBhbGwgMC4zNXMgZWFzZTtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC4zNXMgZWFzZTtcclxufVxyXG5bY2xhc3NePSdpbWdodnItaGluZ2UtJ10sXHJcbltjbGFzcyo9JyBpbWdodnItaGluZ2UtJ10ge1xyXG5cdC13ZWJraXQtcGVyc3BlY3RpdmU6IDUwZW07XHJcblx0cGVyc3BlY3RpdmU6IDUwZW07XHJcbn1cclxuW2NsYXNzXj0naW1naHZyLWhpbmdlLSddIC5hZ2lsZS1maWdjYXB0aW9uLFxyXG5bY2xhc3MqPScgaW1naHZyLWhpbmdlLSddIC5hZ2lsZS1maWdjYXB0aW9uIHtcclxuXHRvcGFjaXR5OiAwO1xyXG5cdHotaW5kZXg6IDE7XHJcbn1cclxuW2NsYXNzXj0naW1naHZyLWhpbmdlLSddOmhvdmVyIGltZyxcclxuW2NsYXNzKj0nIGltZ2h2ci1oaW5nZS0nXTpob3ZlciBpbWcge1xyXG5cdG9wYWNpdHk6IDA7XHJcbn1cclxuW2NsYXNzXj0naW1naHZyLWhpbmdlLSddOmhvdmVyIC5hZ2lsZS1maWdjYXB0aW9uLFxyXG5bY2xhc3MqPScgaW1naHZyLWhpbmdlLSddOmhvdmVyIC5hZ2lsZS1maWdjYXB0aW9uIHtcclxuXHRvcGFjaXR5OiAxO1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMC4yMXM7XHJcblx0LW1vei10cmFuc2l0aW9uLWRlbGF5OiAwLjIxcztcclxuXHQtby10cmFuc2l0aW9uLWRlbGF5OiAwLjIxcztcclxuXHQtbXMtdHJhbnNpdGlvbi1kZWxheTogMC4yMXM7XHJcblx0dHJhbnNpdGlvbi1kZWxheTogMC4yMXM7XHJcbn1cclxuIFxyXG4vKi0tIGltZ2h2ci1oaW5nZS1yaWdodCAtLSAqL1xyXG4uaW1naHZyLWhpbmdlLXJpZ2h0IGltZyB7XHJcblx0LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDUwJTtcclxuXHQtbXMtdHJhbnNmb3JtLW9yaWdpbjogMTAwJSA1MCU7XHJcblx0LW1vei10cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDUwJTtcclxuXHQtby10cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDUwJTtcclxuXHR0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDUwJTtcclxufVxyXG4uaW1naHZyLWhpbmdlLXJpZ2h0IC5hZ2lsZS1maWdjYXB0aW9uIHtcclxuXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSg5MGRlZyk7XHJcblx0LW1vei10cmFuc2Zvcm0tb3JpZ2luOiAwIDUwJTtcclxuXHQtby10cmFuc2Zvcm0tb3JpZ2luOiAwIDUwJTtcclxuXHQtbXMtdHJhbnNmb3JtLW9yaWdpbjogMCA1MCU7XHJcblx0dHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKTtcclxuXHQtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgNTAlO1xyXG5cdC1tb3otdHJhbnNmb3JtLW9yaWdpbjogMCA1MCU7XHJcblx0LW8tdHJhbnNmb3JtLW9yaWdpbjogMCA1MCU7XHJcblx0LW1zLXRyYW5zZm9ybS1vcmlnaW46IDAgNTAlO1xyXG5cdHRyYW5zZm9ybS1vcmlnaW46IDAgNTAlO1xyXG59XHJcbi5pbWdodnItaGluZ2UtcmlnaHQ6aG92ZXIgPiBpbWcge1xyXG5cdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKC05MGRlZyk7XHJcblx0LW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoLTkwZGVnKTtcclxuXHQtby10cmFuc2Zvcm06IHJvdGF0ZVkoLTkwZGVnKTtcclxuXHQtbXMtdHJhbnNmb3JtOiByb3RhdGVZKC05MGRlZyk7XHJcblx0dHJhbnNmb3JtOiByb3RhdGVZKC05MGRlZyk7XHJcbn1cclxuLmltZ2h2ci1oaW5nZS1yaWdodDpob3ZlciAuYWdpbGUtZmlnY2FwdGlvbiB7XHJcblx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XHJcblx0LW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XHJcblx0LW8tdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG5cdC1tcy10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XHJcblx0dHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG59ICJdfQ== */"

/***/ }),

/***/ "./src/app/welcome-info/welcome-info.component.ts":
/*!********************************************************!*\
  !*** ./src/app/welcome-info/welcome-info.component.ts ***!
  \********************************************************/
/*! exports provided: WelcomeInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeInfoComponent", function() { return WelcomeInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WelcomeInfoComponent = /** @class */ (function () {
    function WelcomeInfoComponent() {
        this.isParentDivActive = false;
    }
    WelcomeInfoComponent.prototype.ngOnInit = function () {
    };
    WelcomeInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-welcome-info',
            template: __webpack_require__(/*! raw-loader!./welcome-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/welcome-info/welcome-info.component.html"),
            styles: [__webpack_require__(/*! ./welcome-info.component.css */ "./src/app/welcome-info/welcome-info.component.css")]
        })
    ], WelcomeInfoComponent);
    return WelcomeInfoComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Project\Angular\Angular8\travel-journey\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map