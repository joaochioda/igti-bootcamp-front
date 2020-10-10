import { Component } from '@angular/core';
import { TodoListService } from './todoList.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoListService],
})

export class AppComponent {
  title = 'PipEsS';
  n: number = 123123.3123123;
  hoje: Date = new Date();
  meuCep = '12345678';
  meucpf = '12345678121';
  strings: string[] = ['gato', 'cavalo'];

  todoListService: TodoListService;

  constructor(todoListService: TodoListService) {
    this.todoListService = todoListService;
  }
  //poderia declarar no construtor private todoListService: TodoListService
  //assim nao precisaria declarar o this nele
  addString(newString) {
    this.strings.push(newString);
  }
}
