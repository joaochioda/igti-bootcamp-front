import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-galeria-component',
  templateUrl: './galeria-component.component.html',
  styleUrls: ['./galeria-component.component.css']
})
export class GaleriaComponentComponent {

  selectedPicture: number = 0;

  @Input() pictures: string;
  @Input() titulo: string;

  buttonClick(action: string) {
    if (action === 'goLeft') {
      this.selectedPicture --;
    }

    if (action === 'goRight') {
      this.selectedPicture ++;
    }

    if (action === 'goEnd') {
      this.selectedPicture = this.pictures.length -1;
    }

    if (action === 'goBegin') {
      this.selectedPicture = 0;
    }
  }
}
