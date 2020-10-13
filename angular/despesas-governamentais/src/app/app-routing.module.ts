import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DespesasSenadorComponent } from './despesas-senador/despesas-senador.component';
import { ListSenadoresComponent } from './list-senadores/list-senadores.component';

const routes: Routes = [
  {path: 'listSenadores', component: ListSenadoresComponent},
  {path: 'despesasSenador/:id', component: DespesasSenadorComponent},
  {path: '', redirectTo: 'listSenadores', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
