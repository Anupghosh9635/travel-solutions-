import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeInfoComponent } from './home/home-info.component';
import { AboutInfoComponent } from './about-info/about-info.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { LoginInfoComponent } from './login-info/login-info.component';
import { SignUpInfoComponent } from './sign-up-info/sign-up-info.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { WelcomeInfoComponent } from './welcome-info/welcome-info.component';
import { PackageInfoComponent } from './package-info/package-info.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { ActionModule } from './action/action.module';
import { ProductModule } from './product/product.module';



const routes: Routes = [
  { path: 'home', component: HomeInfoComponent },
  { path: 'about', component: AboutInfoComponent },
  { path: 'contact', component: ContactInfoComponent },
  { path: 'login', component: LoginInfoComponent },
  { path: 'singup', component: SignUpInfoComponent },
  { path: 'profile', component: ProfileInfoComponent },
  { path: 'welcome', component: WelcomeInfoComponent },
  { path: 'packages', component: PackageInfoComponent },
  { path: 'details', component: DetailsPageComponent },
  { path: 'product/:id', component: DetailsPageComponent },
  // { path: 'admin', component: AdminInfoComponent , canActivate :[AuthGuard] },  
  // { path: 'admin/in-cpmpleate', component: IncompleateInfoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), 
    ActionModule ,
    ProductModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
