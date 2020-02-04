import { Component, OnInit } from '@angular/core';


import{Postagem} from './../model/postagem';
import {ProdutosService} from './../serviço/produtos.service';

/**Importações para os projetos */



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private ProdutosService: ProdutosService) { }

  private post1:  Postagem=null;
  private post2:  Postagem=null;
  private post3:  Postagem=null;
  private post4:  Postagem=null;
  private post5:  Postagem=null;

  ngOnInit() {
    this.pegarPost1();
    this.pegarPost2();
    this.pegarPost3();
    this.pegarPost4();
  }


  pegarPost1(){
    this.ProdutosService.pegarNovasPostagens(1).subscribe((procura: Postagem)=>{
      this.post1 = procura;
    })
  }

  pegarPost2(){
    this.ProdutosService.pegarNovasPostagens(2).subscribe((procura: Postagem)=>{
      this.post2 = procura;
    }) 
  }

  pegarPost3(){
    this.ProdutosService.pegarNovasPostagens(3).subscribe((procura: Postagem)=>{
      this.post3 = procura;
    }) 
  }

  pegarPost4(){
    this.ProdutosService.pegarNovasPostagens(4).subscribe((procura: Postagem)=>{
      this.post4 = procura;
    })
  }






}
