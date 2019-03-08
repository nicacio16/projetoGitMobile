import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './paginas/home/home.component';
import { CalculadoraComponent } from './paginas/calculadora/calculadora.component';
import { PositivoNegativoComponent } from './paginas/positivoNegativo/positivoNegativo.component';
import { ImcComponent } from './paginas/imc/imc.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalculadoraComponent,
    PositivoNegativoComponent,
    ImcComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
