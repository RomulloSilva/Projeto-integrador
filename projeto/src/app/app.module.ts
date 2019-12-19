import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './1.menu/menu.component';
import { RodapeComponent } from './2.rodape/rodape.component';
import { HomeComponent } from './3.home/home.component';
import { LoginComponent } from './4.login/login.component';
import { FormularioEComponent } from './5.formulario-e/formulario-e.component';
import { PerfilComponent } from './7.perfil/perfil.component';
import { ListaPComponent } from './8.lista-p/lista-p.component';
import { DescricaoPComponent } from './9.descricao-p/descricao-p.component';
import { PaginaDoacaoComponent } from './10.pagina-doacao/pagina-doacao.component';
import { SobreComponent } from './11.sobre/sobre.component';
import { FormularioAComponent } from './6.formulario-a/formulario-a.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    HomeComponent,
    LoginComponent,
    FormularioEComponent,
    FormularioAComponent,
    PerfilComponent,
    ListaPComponent,
    DescricaoPComponent,
    PaginaDoacaoComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /**forms para validar o  */
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
