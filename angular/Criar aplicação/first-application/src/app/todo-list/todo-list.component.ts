import { Component } from '@angular/core';
import { TodoItem } from './todoItem';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  tasks: TodoItem[] = [
    { description: 'Arrumar a casa', done: false },
    { description: 'Limpar o banheiro', done: true },
  ];

  addTask(description: string) {
    this.tasks.push({
      description: description,
      done: false,
    });
  }

  delete(i: number) {
    console.log(i);
    this.tasks.splice(i, 1);
  }
}
