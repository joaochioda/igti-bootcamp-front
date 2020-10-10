import { Injectable } from '@angular/core';

// @Injectable({
//     providedIn: 'root'
// })

export class TodoListService {
  items: string[] = ['martelo'];
  add(newItem: string) {
    this.items.push(newItem);
  }
}
