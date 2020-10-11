import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TimerService } from '../timer.services';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css'],
})
export class ConfigComponent {

  exerciseForm = new FormGroup({
    name: new FormControl('', Validators.required),
    duration: new FormControl(30, Validators.required),
    repetitions: new FormControl(3, Validators.required),
    preparation: new FormControl(15, Validators.required),
    rest: new FormControl(30, Validators.required),
  });

  constructor(public ts: TimerService) {}

  add() {
    this.ts.add(this.exerciseForm.value);
    this.exerciseForm.reset({ ...this.exerciseForm.value, name: '' })
  }
  delete(i: number) {
    this.ts.delete(i);
  }
}
