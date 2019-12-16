import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListaWebService {

 

  constructor( private http: HttpClient) {

   }

  public obterTarefas(){
    return this.http.get("http://www.professorisidro.com.br/tarefas.php");
  }
}
