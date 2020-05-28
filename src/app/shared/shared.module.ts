import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SummeryViewComponent } from './summery-view/summery-view.component';
import { RatingComponent } from './rating.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SummeryViewComponent,
    StarRatingComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SummeryViewComponent,
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class SharedModule { }
