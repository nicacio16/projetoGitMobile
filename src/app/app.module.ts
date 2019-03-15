import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './paginas/home/home.component';
import { CalculadoraComponent } from './paginas/calculadora/calculadora.component';
import { PositivoNegativoComponent } from './paginas/positivoNegativo/positivoNegativo.component';
import { ImcComponent } from './paginas/imc/imc.component';
import { CategoriaComponent } from './paginas/categoria/categoria.component';


//define quais componentes serão utilizados
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalculadoraComponent,
    PositivoNegativoComponent,
    ImcComponent,
    CategoriaComponent
  ],
  //define os modulos ou conjunto de componentes que serão utilizados
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  //define qual será a página principal - AppComponent
  bootstrap: [AppComponent]
})
export class AppModule { }
