import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { AppConstants } from '../common/AppConstants';

@Injectable({ 
    providedIn : 'root'
})
export class ProductService{
  log: any;
  _baseURL : string;
  constructor(private http: HttpClient) { 
    this._baseURL = AppConstants.apiURL;
  } 


    // getProductList() : Observable<> {

    //   return this.http.get<IProduct[]>(this._baseURL+'/productSummery')
    //   .pipe(
    //     tap(data => console.log('All: ' + JSON.stringify(data))),
    //     catchError(this.handleError)
    //   ); 
 
    // }

/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError(err: HttpErrorResponse) {
  // in a real world app, we may send the server to some remote logging infrastructure
  // instead of just logging it to the console
  let errorMessage = '';
  if (err.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    errorMessage = `An error occurred: ${err.error.message}`;
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
  }
  console.error(errorMessage);
  return throwError(errorMessage);
}

} 