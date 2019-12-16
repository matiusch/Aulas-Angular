import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SobreComponent} from './sobre/sobre.component';
import {HomeComponent}  from './home/home.component';
import {ContatoComponent} from './contato/contato.component';
import {TarefasComponent}           from './tarefas/tarefas.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'sobre',component:SobreComponent},
  {path:'home',component:HomeComponent},
  {path:'contato',component:ContatoComponent},
  {path:'tarefa',component:TarefasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
