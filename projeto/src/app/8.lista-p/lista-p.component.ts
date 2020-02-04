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

  private idBusca: number;
  private projeto: Projeto=null;

  constructor(private ProjetosService: ProjetosService) { }

  post: Projeto[];
  

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
    if(this.idBusca <= 0 || this.idBusca >10){
    alert("Item não encontrado")
    
      }else{
        this.ProjetosService.listarProjetoId(this.idBusca).subscribe((search: Projeto) =>{
          this.projeto = search;
      }
      )
    }
  }


}
