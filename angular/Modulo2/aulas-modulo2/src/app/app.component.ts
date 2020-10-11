import { Component } from '@angular/core';
import { TodoListService } from './todoList.service';
import {
  FormControl,
  FormGroup,
  Validators,
  AbstractControl,
  ValidatorFn,
} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoListService],
})
export class AppComponent {
  myForms = new FormGroup({
    name: new FormControl('', [Validators.required, forbiddenNameValidator('Joao')]),
    address: new FormControl(''),
  });

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
  onSubmit() {
    console.log(this.myForms.value);
  }
}

export function forbiddenNameValidator(invalidName: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if(control.value === invalidName) {
      return {forbiddenName: { value: control.value } };
    } else {
      return null;
    }
  };
}
