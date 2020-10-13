import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const urlBase = 'http://localhost:3000';

export interface ListSenador {
  id: number;
  nomeSenador: string;
}

export interface despesasSenador {
  id: number;
  nomeSenador: string;
  tipo: number;
  fornec: string;
  ano: number;
  mes: number;
  dia: number;
  valor: number;
}

@Injectable({
  providedIn: 'root',
})

export class ApiService {
  constructor(private http: HttpClient) {}

  listSenadores() {
    return this.http.get<ListSenador[]>(`${urlBase}/senadores?_sort=name`);
  }

  listSenadorById(id: number) {
    return this.http.get<despesasSenador>(`${urlBase}/despesasSenadores/${id}`);
  }
}
