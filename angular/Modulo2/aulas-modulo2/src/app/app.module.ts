import { BrowserModule } from '@angular/platform-browser';
import { InjectionToken, LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { CepPipe } from './cep.pipe';
import { CpfPipe } from './cpf.pipe';
import { JoinStringsPipe } from './join-strings.pipe';
import { C2Component } from './c2/c2.component';
import { TodoListService } from './todoList.service';

export const TEMA = new InjectionToken<string>('app.theme');
registerLocaleData(localePt);

@NgModule({
  declarations: [AppComponent, CepPipe, CpfPipe, JoinStringsPipe, C2Component],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    TodoListService,
    { provide: TEMA, useValue: 'dark' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
