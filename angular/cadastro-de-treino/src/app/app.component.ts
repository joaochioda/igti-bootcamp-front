import { Component } from '@angular/core';
import { Exercise } from './exercise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  config: boolean = false;
  exercises: Exercise[] = [{
    name: "Abdominal",
    duration: 5,
    preparation: 4,
    repetitions: 3,
    rest: 3
  }];
}
