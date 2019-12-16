import { Component, OnInit } from '@angular/core';
import {Tarefa} from '../model/Tarefa';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {

  minhaTarefa:Tarefa;

  constructor() {
    this.minhaTarefa = new Tarefa("Tarefa 1","Matheus Prestes");
   }

  ngOnInit() {
    console.log("Estou no ngOnInit");
  }

}
