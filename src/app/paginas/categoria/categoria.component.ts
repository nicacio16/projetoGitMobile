import { Component } from '@angular/core'
import { Categoria } from './paginas/categoria/categoria'
@Component({
  selector: 'Categoria-component',
  templateUrl: 'categoria.html',
  styleUrls: ['categoria.css']
})
export class CategoriaComponent {

  listaCategoria = new Array<Categoria>();
  categoria : Categoria = new Categoria();

  //define o método utilizado no botão CADASTRAR
  adicionar() : void {
    //o Array THIS.NOMES4 está adiconando(push) o THIS.nome que é o valor do CAMPO CADASTRAR
    this.listaCategoria.push(this.categoria);
    //limpa o campo // estado = new Estado(); ESTANCIA objeto
    this.categoria = new Categoria();
  }

  //para excluir preciso pegar por parâmetro (i:number) e depois apagar o i e a quantidade 1
  excluir(i:number) : void {
    this.listaCategoria.splice(i,1);
  }

  alterar(i:number) : void {
    this.categoria = this.listaCategoria[i];
    this.listaCategoria.splice(i,1);
  }

  constructor(){
    for(let categoria of this.listaCategoria){
      console.log(categoria);
    }
  }
}
