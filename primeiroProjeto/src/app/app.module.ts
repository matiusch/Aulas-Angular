import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SobreComponent } from './sobre/sobre.component';
import { MenuComponent } from './menu/menu.component';
import { OutletComponent } from './outlet/outlet.component';
import { HomeComponent } from './home/home.component';
import { TituloPrincipalComponent } from './sobre/titulo-principal/titulo-principal.component';
import { ValoreCompanyComponent } from './sobre/valore-company/valore-company.component';
import { InfoEquipeComponent } from './sobre/info-equipe/info-equipe.component';
import { RodapeComponent } from './rodape/rodape.component';
import { ContatoComponent } from './contato/contato.component';
import { FormularioComponent } from './formulario/formulario.component';
import { TarefasComponent } from './tarefas/tarefas.component';

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    MenuComponent,
    OutletComponent,
    HomeComponent,
    TituloPrincipalComponent,
    ValoreCompanyComponent,
    InfoEquipeComponent,
    RodapeComponent,
    ContatoComponent,
    FormularioComponent,
    TarefasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
