import {Component} from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {

  campo:  string = "";
  valor1: string = "";
  valor2: string = "";
  total: string = "";

  metodoClique() : void{
      alert(this.valor);
  }

  somar(valor1, valor2) : void{
    number(this.total) = number(this.valor1) + number(this.valor2);
  }

  subtracao(valor1, valor2) : void{
    number(this.total) = number(this.valor1) - number(this.valor2);
  }

  multiplica(valor1, valor2) : void{
    number(this.total) = number(this.valor1) * number(this.valor2);
  }

  divisao(valor1, valor2) : void{
    number(this.total) = number(his.valor1) / number(his.valor2);
  }
}
