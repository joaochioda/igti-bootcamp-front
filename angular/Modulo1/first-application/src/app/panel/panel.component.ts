import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
})
export class PanelComponent implements OnInit {
  expanded = true;
  @Input() title: string;

  constructor() {}

  ngOnInit(): void {}

  expand() {
    this.expanded = !this.expanded
  }
}
