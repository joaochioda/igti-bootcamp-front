import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent {
  @Input() rating: number;
  @Output() ratingChange = new EventEmitter<number>();

  className: string = "box1";
  boxSize: number = 80;

  onClick(i: number) {
    this.ratingChange.emit(i);
  }
}
