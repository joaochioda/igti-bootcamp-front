import { Component } from '@angular/core';
import { TodoItem } from './todoItem';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  newTask: string = '';

  tasks: TodoItem[] = [
    { description: 'Arrumar a casa', done: false, priority: 4 },
    { description: 'Limpar o banheiro', done: true, priority: 6 },
    { description: 'Passear com o dog', done: false, priority: 6 },
  ];


  addTask() {
    this.tasks.push({
      description: this.newTask,
      done: false,
      priority: 1
    });
  }

  delete(i: number) {
    console.log(i);
    this.tasks.splice(i, 1);
  }
}
