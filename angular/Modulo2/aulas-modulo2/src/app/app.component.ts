import { Component } from '@angular/core';
import { TodoListService } from './todoList.service';
import {
  FormControl,
  FormGroup,
  Validators,
  AbstractControl,
  ValidatorFn,
} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

const urlBase = 'http://localhost:3000';

interface Produto {
  id: number;
  nome: string;
  preco: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoListService],
})
export class AppComponent {
  myForms = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      forbiddenNameValidator('Joao'),
    ]),
    address: new FormControl(''),
  });

  title = 'PipEsS';
  n: number = 123123.3123123;
  hoje: Date = new Date();
  meuCep = '12345678';
  meucpf = '12345678121';
  strings: string[] = ['gato', 'cavalo'];

  todoListService: TodoListService;

  produtos: Produto[];

  form = new FormGroup({
    nome: new FormControl('', Validators.required),
    preco: new FormControl('', [Validators.required, Validators.min(1)]),
  });

  constructor(
    todoListService: TodoListService,
    private router: Router,
    private htttpClient: HttpClient
  ) {
    this.todoListService = todoListService;
  }
  //poderia declarar no construtor private todoListService: TodoListService
  //assim nao precisaria declarar o this nele

  ngOnInit(): void {
    this.htttpClient.get<Produto[]>(`${urlBase}/produtos`).subscribe(dados => {
      this.produtos = dados;
    });
  }

  adicionarProduto() {
    const produto = this.form.value;
    this.htttpClient.post<Produto>(`${urlBase}/produtos`, produto).subscribe(novo => {
      this.produtos = [...this.produtos, novo]
    })
  }

  excluirProduto(produto: Produto) {
    this.htttpClient.delete(`${urlBase}/produtos/${produto.id}`).subscribe(() => {
      const index = this.produtos.indexOf(produto);
      this.produtos = [...this.produtos.slice(0, index), ...this.produtos.slice(index +1)]
    })
  }
  addString(newString) {
    this.strings.push(newString);
  }
  onSubmit() {
    console.log(this.myForms.value);
  }

  goToPage2() {
    this.router.navigate(['page2', '20']);
  }
}

export function forbiddenNameValidator(invalidName: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (control.value === invalidName) {
      return { forbiddenName: { value: control.value } };
    } else {
      return null;
    }
  };
}
