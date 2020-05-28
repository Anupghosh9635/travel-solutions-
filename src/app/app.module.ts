import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatToolbarModule,  MatIconModule,  MatCardModule, MatButtonModule, MatProgressSpinnerModule } from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HederInfoComponent } from './heder-info/heder-info.component';
import { FooterInfoComponent } from './footer-info/footer-info.component';
import { HomeInfoComponent } from './home/home-info.component';
import { AboutInfoComponent } from './about-info/about-info.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { LoginInfoComponent } from './login-info/login-info.component';
import { SignUpInfoComponent } from './sign-up-info/sign-up-info.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { WelcomeInfoComponent } from './welcome-info/welcome-info.component';
import { RecentTripComponent } from './recent-trip/recent-trip.component';
import { PackageInfoComponent } from './package-info/package-info.component';
import { RecentTripInfoComponent } from './recent-trip-info/recent-trip-info.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { RatingComponent } from './shared/rating.component';
import { SummaryInfoComponent } from './summary-info/summary-info.component';
import { HttpClientModule } from '@angular/common/http';
import { SummaryPopupComponent } from './summary-info/summary-popup.component';





@NgModule({
  declarations: [
    AppComponent,
    HederInfoComponent,
    FooterInfoComponent,
    HomeInfoComponent,
    AboutInfoComponent,
    ContactInfoComponent,
    NotFoundComponent,
    LoginInfoComponent,
    SignUpInfoComponent,
    ProfileInfoComponent,
    WelcomeInfoComponent,
    RecentTripComponent,
    PackageInfoComponent,
    RecentTripInfoComponent,
    DetailsPageComponent,
    RatingComponent,
    SummaryInfoComponent,
    SummaryPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoginInfoComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }


// AngularFontAwesomeModule,
// BrowserAnimationsModule,
// MatToolbarModule,
// MatIconModule,
// MatButtonModule,
// MatCardModule,
// MatProgressSpinnerModule,
