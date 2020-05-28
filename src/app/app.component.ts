import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'travel-journey';
  alterNateImage :string = 'assets/images/alt/enjoy.jpg';
  isParentDivActive : boolean= true;

  constructor(private router: Router) {
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


   public setIsLeftPanalRequired(value : boolean){
     this.isParentDivActive = value;
   }

}
