import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

 
  constructor(app :AppComponent){
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

  ngOnInit() {
  }

}
