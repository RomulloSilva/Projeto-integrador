import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './3.home/home.component';
import { LoginComponent } from './4.login/login.component';
import { FormularioEComponent } from './5.formulario-e/formulario-e.component';
import { FormularioAComponent } from './6.formulario-a/formulario-a.component';
import { PerfilComponent } from './7.perfil/perfil.component';
import { ListaPComponent } from './8.lista-p/lista-p.component';
import { DescricaoPComponent } from './9.descricao-p/descricao-p.component';
import { PaginaDoacaoComponent } from './10.pagina-doacao/pagina-doacao.component';
import { SobreComponent } from './11.sobre/sobre.component';
import {ListagemComponent} from './listagem/listagem.component';
import {EditaUserComponent} from './edita-user/edita-user.component';
import {FaqComponent} from './faq/faq.component';


const routes: Routes = [
  {path: "" , redirectTo: 'home' , pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent  },
  {path: 'formularioE', component: FormularioEComponent},
  {path: 'formularioA', component: FormularioAComponent },
  {path: 'perfil', component: PerfilComponent },
  {path: 'listaP', component: ListaPComponent},
  {path: 'descricaoP', component: DescricaoPComponent},
  {path: 'paginaDoacao', component: PaginaDoacaoComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'listagem', component: ListagemComponent},
  {path: 'editaUser/:id', component: EditaUserComponent},
  {path: 'faq', component:FaqComponent}
  //chmar a página com os detalhes de um usuário específico pelo ID.
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
