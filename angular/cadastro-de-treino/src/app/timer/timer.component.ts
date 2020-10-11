import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { TimerService } from '../timer.services';
@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit, OnDestroy {
  interval: NodeJS.Timeout;

  constructor(public ts: TimerService) {}

  formatPhase(phase: number) {
    switch (phase) {
      case 0:
        return 'Preparação';
      case 1:
        return 'Exercício';
      case 2:
        return 'Descanso';
    }
  }

  start() {
    if (!this.interval) {
      let lastTime = Date.now();
      this.interval = setInterval(() => {
        let currentTime = Date.now();
        let ellapsedTime = currentTime - lastTime;
        lastTime = currentTime;
     this.ts.decrementTimeLeft(ellapsedTime);
      }, 100);
    }
  }

  pause() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = undefined;
    }
  }

  ngOnDestroy() {
    this.pause();
  }

  ngOnInit(): void {
    this.ts.restart();
  }

  restart(){
    this.ts.restart();
  }
  next(){
    this.ts.next();
  }
}
