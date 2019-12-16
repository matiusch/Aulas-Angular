import { Component, OnInit } from '@angular/core';
import {Tarefa} from '../model/Tarefa';
import {ListaWebService} from '../service/lista-web.service';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {

  minhaTarefa:Tarefa[];

  //injentando serviço
  

  constructor( private servicoLista:ListaWebService) {
    
   }

  ngOnInit() {
    console.log("chamando a funcao que recupera a lista");
    this.obterTodasAsTarefas();
    console.log("Espero que tenha dado certo");
    console.log(this.minhaTarefa);
    
  }

  public obterTodasAsTarefas(){
    this.servicoLista.obterTarefas().subscribe((resultado:Tarefa[])=>{this.minhaTarefa = resultado})
  }

}
