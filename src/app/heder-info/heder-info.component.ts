import { Component, OnInit, Injectable } from '@angular/core';
import { LoginInfoComponent } from '../login-info/login-info.component';
import { AuthenticationService } from '../Auth/authentication.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-heder-info',
  templateUrl: './heder-info.component.html',
  styleUrls: ['./heder-info.component.css']
})
@Injectable({ providedIn: 'root' })
export class HederInfoComponent implements OnInit {

  isProfileDataShoW : boolean = false;

  isLoggedIn$: Observable<boolean>;

  constructor(private authService : AuthenticationService, private loginService : LoginInfoComponent) { 
    if(localStorage.getItem('currentUser')){
      this.isProfileDataShoW = true;
    }
    // if(loginService.getLoggedInName){
    //   this.changeName(true);
    // }
    
    // this.isLoggedIn$ = loginService.isLoggedIn;
    // loginService.loggedInNameDay().subscribe(name => {console.log("----------------loggedInName----"+name)});
  }


  ngOnInit() {
    // this.loginService.isLoggedIn.subscribe( name =>{ this.changeName(name); console.log("----------------name----"+name) });
    // this.loginService.loggedInNameDay.subscribe(name => {console.log("----------------loggedInName----"+name)});
    this.authService.getLoggedInName.subscribe(name =>{ this.changeName(name) ; console.log('getLoggedInName subscribe*************'+name)});
  }
  

  private changeName(name: any): void {
    if(name){
      console.log('inside-------------------changeName ')
      this.isProfileDataShoW = true;
    }
  }


  
}
