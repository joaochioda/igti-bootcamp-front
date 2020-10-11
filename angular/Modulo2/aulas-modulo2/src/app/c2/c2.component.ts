import { Component, Inject, OnInit } from '@angular/core';
import { TodoListService } from '../todoList.service';
import { TEMA } from '../app.module';
@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {

  constructor(public todoListService: TodoListService, @Inject(TEMA) public tema: string) {
  }

  ngOnInit(): void {
  }

}
