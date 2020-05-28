import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private router : Router ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let currentUser = localStorage.getItem('currentUser');
      let obj = JSON.parse(currentUser);
       console.log('****currentUser*******'+currentUser)
      if( obj && 'true' == obj.isValidUser){
        return true;
      }else{
        this.router.navigate(['login']);
      }
    return false;
  }
  
}
