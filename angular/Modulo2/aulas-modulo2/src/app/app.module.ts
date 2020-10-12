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
import { ReactiveFormsModule } from '@angular/forms';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
export const TEMA = new InjectionToken<string>('app.theme');
registerLocaleData(localePt);

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    CepPipe,
    CpfPipe,
    JoinStringsPipe,
    C2Component,
    Page1Component,
    Page2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatTableModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    TodoListService,
    { provide: TEMA, useValue: 'dark' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
