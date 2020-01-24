import { Component, OnInit } from '@angular/core';


/**Importações utilizadas na tarefa 10,CRUD*/
import {Projeto} from '../model/Projeto';
import { ProjetosService } from '../serviço/projetos.service';
import { ActivatedRoute } from '@angular/router';

//utilizamos o router tambem PAREI AQUI.


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private proj: ProjetosService, private rota: ActivatedRoute) { }


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
   private pj: Projeto;


   public deletarProjeto(id: number){
     this.proj.deletar(id).subscribe((res)=>{
       alert("Apagado com sucesso");
       document.location.reload(true);
     },
     (err)=>{
       alert("Não deletou")
     })
   }


}
