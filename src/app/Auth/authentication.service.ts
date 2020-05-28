import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AppConstants } from '../common/AppConstants';
import { User } from '../login-info/login-info.component';
import { tap, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  
  _baseURL: string;
  requestBody: any;
  constructor(private http: HttpClient) {
    this._baseURL = AppConstants.apiURL;
  }


  loginValidate(username: string, password: string): Observable<User> {
    this.requestBody = { userName: username, password: password };

    return this.http.post<User>(this._baseURL + 'LoginService/authenticate', this.requestBody)
      .pipe(tap(data => {  console.log('All: ' ) ;
                            this.getLoggedInName.emit(data.firstName);
                        }),
            catchError(this.handleError)
      );
    // return this.http.post<any>(this._baseURL + 'LoginService/authenticate', this.requestBody)
    //   .pipe(map(user => {
    //     // login successful if there's a jwt token in the response
    //     if (user && user.token) {
    //       // store user details and jwt token in local storage to keep user logged in between page refreshes
    //       localStorage.setItem('currentUser', JSON.stringify(user));
    //     }

    //     return user;
    //   }));

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
