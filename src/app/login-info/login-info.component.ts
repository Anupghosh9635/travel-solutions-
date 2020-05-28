import { Component, OnInit, Output, EventEmitter, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../Auth/authentication.service';
import { BehaviorSubject, Subject, Observable } from 'rxjs';


@Component({
  selector: 'app-login-info',
  templateUrl: './login-info.component.html',
  styleUrls: ['./login-info.component.css']
})
export class LoginInfoComponent implements OnInit {
   loginForm : FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    response :User;
    errorMessage;
    
    // @Output() getLoggedInName: EventEmitter<String> = new EventEmitter();

    // public loggedIn = new BehaviorSubject<boolean>(false); // {1}
    
    // get isLoggedIn(): Observable<boolean>{ 
    //   return this.loggedIn.asObservable(); // {2} 
    // }

    // public loggedInName = new Subject<boolean>(); 

    // get loggedInNameDay() : Observable<boolean>{ 
    //   return this.loggedInName.asObservable(); // {2} 
    // }
    
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) { 

  }
 
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });

  }

// convenience getter for easy access to form fields
get f() { 
  return this.loginForm.controls; 
}

    
  onSubmit() {
    console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&")
    this.submitted = true;
      console.log('this.f-----username--------'+JSON.stringify(this.f.username.value));
      console.log('this.f-------password------'+JSON.stringify(this.f.password.value));
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        let userName =this.f.username.value;
        let password =this.f.password.value;
        this.loading = true;
        this.authenticationService.loginValidate(userName, password).subscribe({
          next: products => {
            this.response = products;
            if(this.response.isValidUser == 'true'){
              if('ADMIN' == this.response.userRole.toLocaleUpperCase()){
                this.router.navigate(['admin']);
              }else{
                this.router.navigate(['profile']); 
              }
              
              localStorage.setItem('currentUser', JSON.stringify(this.response));
              sessionStorage.setItem('sessionUser', JSON.stringify(this.response));
              // this.getLoggedInName.emit(this.response.firstName);
              // this.loggedIn.next(true);
              // this.loggedInName.next(true);
            }

            this.loading = false;
            // this.filteredProducts = this.products;
          },
          error: err => this.errorMessage = err
        }); 
  }

}



export class User {
  userId: number;
  userName: string;
  token: string;
  firstName: string;
  lastName: string;
  userType: string;
  userRole: string;
  mailId : string;
  isValidUser : string;
  agencyName : string;
}