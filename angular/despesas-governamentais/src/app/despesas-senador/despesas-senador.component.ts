import { Component, OnInit } from '@angular/core';
import { ApiService, despesasSenador } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-despesas-senador',
  templateUrl: './despesas-senador.component.html',
  styleUrls: ['./despesas-senador.component.css'],
})
export class DespesasSenadorComponent implements OnInit {
  id: number;

  despesas = null;
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      this.id = parseInt(paramMap.get('id'));
      this.apiService.listSenadorById(this.id).subscribe((data) => {
        this.despesas = data;
        console.log(data);
      });
    });
  }

  calculeDespesas(type: number) {
    if (type === 8) {
      return this.despesas.despesas.reduce((accum, curr) => {
        return accum = accum + curr.valor;
      }, 0);
    } else {
      return this.despesas.despesas.reduce((accum, curr) => {
        if (curr.tipo === type) {
          accum = accum + curr.valor;
        }
        return accum;
      }, 0);
    }
  }

  tipoDeDespesa(type: number) {
    if (type === 1) {
      return 'Aluguel de imóveis e despesas concernentes a eles';
    }
    if (type === 2) {
      return 'Divulgação da atividade parlamentar';
    }
    if (type === 3) {
      return 'Aquisição de material de consumo para uso no escritório';
    }
    if (type === 4) {
      return 'Passagens aéreas, aquáticas e terrestres nacionais';
    }
    if (type === 5) {
      return 'Contratação de consultorias, assessorias, pesquisas, trabalhos técnicos e outros serviços';
    }
    if (type === 6) {
      return 'Locomoção, hospedagem, alimentação e combustíveis';
    }
    if (type === 7) {
      return 'Serviços de Segurança Privada';
    }
  }

  joinData(dia:number, mes:number, ano:number) {
    return `${dia}/${mes}/${ano}`
  }
}
