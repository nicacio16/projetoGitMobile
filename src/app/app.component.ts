import { Component } from '@angular/core'
import { Estado } from './paginas/entidades/estado'
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {

  /*nomes : string[]=['João', 'Fernando', 'Eduardo'];
  nomes2 : Array<string> = ['Hérica', 'Dianna', 'Gabriela'];
  nomes3 : Array('Yuri', 'Felipe', 'Liu');
  nomes5 = new Array<string>(5);
  nome6 = string[5];
  */
  listaEstado = new Array<Estado>();
  //criando uma variavel estado do ESTADO e instancia um objeto ESTADO
  estado : Estado = new Estado();

  //define o método utilizado no botão CADASTRAR
  adicionar() : void {
    //o Array THIS.NOMES4 está adiconando(push) o THIS.nome que é o valor do CAMPO CADASTRAR
    this.listaEstado.push(this.estado);
    //limpa o campo // estado = new Estado(); ESTANCIA objeto
    this.estado = new Estado();
  }

  //para excluir preciso pegar por parâmetro (i:number) e depois apagar o i e a quantidade 1
  excluir(i:number) : void {
    this.listaEstado.splice(i,1);
  }

  alterar(i:number) : void {
    this.estado = this.listaEstado[i];
    this.listaEstado.splice(i,1);
  }

  constructor(){

    //inserir
    //this.nomes4.push('PEDRO');
    //this.nomes4.push('JOANA');
    //this.nomesArray.push('Diego');

    //excluir
    //this.nomes4.splice(0,1);

    //busca o indice de PEDRO e armazena em na variavel indice
    //let indice = this.nomes4.indexOf('PEDRO')

    //listar
    for(let estado of this.listaEstado){
      //adiciona o valor
      console.log(estado);
    }

  }

}
