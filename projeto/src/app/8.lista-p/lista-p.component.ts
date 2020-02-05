import { Component, OnInit } from '@angular/core';
import { Subscriber, from } from 'rxjs';


/**Importações */
import {Projeto} from '../model/Projeto';
import {ProjetosService} from '../serviço/projetos.service';


@Component({
  selector: 'app-lista-p',
  templateUrl: './lista-p.component.html',
  styleUrls: ['./lista-p.component.css']
})
export class ListaPComponent implements OnInit {

  public idProj: number;
  public projeto: Projeto=null;

  constructor(private ProjetosService: ProjetosService) { }

  public post: Projeto[];
  public listaProjeto: Projeto;
  

  ngOnInit() {
    this.pegaPost();
  }


  pegaPost(){
    this.ProjetosService.listarProjetos().subscribe((postOut: Projeto[]) => {
      this.post = postOut;
      console.log(this.post);
    })
  }

  private pesquisar(){
    if(this.idProj != null){
      this.ProjetosService.listarProjetoId(this.idProj).subscribe((res:Projeto)=>{
        this.listaProjeto = res;
        this.projeto = res;
      })
    }else{
      this.listaProjeto = null;
    }
    console.log(this.listaProjeto);
  }


}
