import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PipEsS';
  n: number = 123123.3123123;
  hoje:Date = new Date();
  meuCep = '12345678'
  meucpf = '12345678121'
  strings: string[] = ['gato', 'cavalo'];

  addString(newString) {
    this.strings.push(newString);
  }
}
