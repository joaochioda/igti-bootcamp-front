import { Component, OnInit } from '@angular/core';
import { ApiService, ListSenador } from '../api.service';

@Component({
  selector: 'app-list-senadores',
  templateUrl: './list-senadores.component.html',
  styleUrls: ['./list-senadores.component.css']
})
export class ListSenadoresComponent implements OnInit {

  senadores: ListSenador[] = [];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.listSenadores().subscribe((data)=> {
     this.senadores = data;
    })
  }

}
