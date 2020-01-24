import { Component, OnInit } from '@angular/core';


/**Importações utilizadas na tarefa 10,CRUD*/
import {Projeto} from '../model/Projeto';
import { ProjetosService } from '../serviço/projetos.service';

//utilizamos o router tambem PAREI AQUI.


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private proj: ProjetosService,) { }


    //Variaveis

  //variável que armazena as postagens feitas pelo admnistrador.
  private projeto: Projeto[];

  ngOnInit() {

      this.proj.listarProjetos().subscribe((res: Projeto[])=>{
        this.projeto = res;
      },(err)=>{
        alert("ERRO")
      });
  }



public pesquisarProjeto(){

}

}
