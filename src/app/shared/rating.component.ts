import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit, OnChanges {
  @Input() rating: number;
  // @Input() itemId: number;
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();
  itemId: number;
  inputName: string;

  ngOnChanges(): void {
    // console.log("rating--------------------------"+this.rating);
    this.rating = parseInt(""+this.rating);
    // this.inputName = this.itemId + '_rating';
    
      // this.ratingClick.emit({
      //   itemId: this.itemId,
      //   rating: this.rating
      // });
  }

  ngOnInit() {
    //   this.rating = 3;
    //   this.itemId = 4;
    // this.inputName = this.itemId + '_rating';
    // this.ratingClick.emit({
    //     itemId: this.itemId,
    //     rating: this.rating
    //   });
  }
  onClick(rating: number): void {
    // this.rating = rating;
    this.ratingClick.emit({
      itemId: this.itemId,
      rating: rating
    });
  }
}
