import { Component, OnInit } from '@angular/core';


/**Importações utilizadas na tarefa 10, que valida o login do Administrador*/
import { ProjetosService } from '../serviço/projetos.service';
import {Token} from '../model/Token';
import {Projeto} from '../model/Projeto';
import {Administrador} from '../model/Administrador';
//utilizamos o router tambem PAREI AQUI.


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
