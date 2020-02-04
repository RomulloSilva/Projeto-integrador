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
  private idBusca: number;
  private pesquisa:number;

   
  private projeto: Projeto=null;
  private all: Projeto[];
  

  ngOnInit() {
    this.pegaProj();
  }
   private pj: Projeto;

   pegaProj(){
    this.proj.listarProjetos().subscribe((postOut: Projeto[]) => {
      this.all = postOut;
      console.log(this.all);
    })
  }

   /*public deletarProjeto(id: number){
     this.proj.deletar(id).subscribe((res)=>{
       alert("Apagado com sucesso");
       document.location.reload(true);
     },
     (err)=>{
       alert("Não deletou");
     })
   }*/
   
   private pesquisar(){
    this.pesquisa=this.idBusca
    if(this.pesquisa <= 0 || this.pesquisa == NaN){
    alert("Item não encontrado");
    this.pesquisa = null;
      }else{
        this.proj.listarProjetoId(this.pesquisa).subscribe((res: Projeto) =>{
          this.projeto = res;
          console.log(this.projeto);

      }
      )
    }
  }

}
