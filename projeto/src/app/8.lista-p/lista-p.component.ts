import { Component, OnInit } from '@angular/core';
import { Subscriber, from } from 'rxjs';

import{Postagem} from './../model/postagem';
import {ProdutosService} from './../serviço/produtos.service';

@Component({
  selector: 'app-lista-p',
  templateUrl: './lista-p.component.html',
  styleUrls: ['./lista-p.component.css']
})
export class ListaPComponent implements OnInit {

  private idBusca: number;
  private produto: Postagem=null;

  constructor(private ProdutosService: ProdutosService) { }

  post: Postagem[];
  

  ngOnInit() {
    this.pegaPost();
  }


  pegaPost(){
    this.ProdutosService.pegarPostagens().subscribe((postOut: Postagem[]) => {
      this.post = postOut;
      console.log(this.post);
    })
  }

  private pesquisar(){
    if(this.idBusca <= 0 || this.idBusca >10){
    alert("Item não encontrado")
      }else{
        this.ProdutosService.buscarCodigoDoProjeto(this.idBusca).subscribe((search: Postagem) =>{
          this.produto = search;
      }
      )
    }
  }


}
