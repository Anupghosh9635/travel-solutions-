import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { AppConstants } from '../common/AppConstants';
import { IProduct } from './product';

@Injectable({
  providedIn: 'root'
})
export class SummaryInfoService {

  // log: any;
  _baseURL : string;
  constructor(private http: HttpClient) { 
    this._baseURL = AppConstants.apiURL;
  } 

  getProducts(): Observable<IProduct> {
    this._baseURL ='assets/api/summery/summery.json'
    return this.http.get<IProduct>(this._baseURL)
      .pipe(tap (data => {console.log('All: ' + JSON.stringify(data))}
                ),
              catchError(this.handleError)
          );
  }

  getSearchProducts(): Observable<IProduct> {
    this._baseURL ='assets/api/summery/summery1.json'
    return this.http.get<IProduct>(this._baseURL)
      .pipe(tap (data => {console.log('All: ' + JSON.stringify(data))}
                ),
              catchError(this.handleError)
          );
  }

  

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
