import { Component, OnInit } from '@angular/core';

import {Projeto} from '../model/Projeto';
import { HttpClient } from '@angular/common/http';
import {ProjetosService} from '../serviço/projetos.service';


@Component({
  selector: 'app-cadastrar-projeto',
  templateUrl: './cadastrar-projeto.component.html',
  styleUrls: ['./cadastrar-projeto.component.css']
})
export class CadastrarProjetoComponent implements OnInit {


  //Var que alimenta o banco de dados do projeto.
  private idAlimenta: number;
	private  imagensAlimenta: string; 
	private  tituloAlimenta: string; 
	private  descricaoAlimenta: string; 
	private  resumoAlimenta: string; 
  private  metaAlimenta: string; 
  private projeto: Projeto = new Projeto();

  constructor(private proj: ProjetosService) { }

  ngOnInit() {
  }


  public enviarProjeto(){
    this.projeto.id = this.idAlimenta;
    this.projeto.imagens = this.imagensAlimenta;
    this.projeto.titulo = this.tituloAlimenta;
    this.projeto.descricao = this.descricaoAlimenta;
    this.projeto.resumo = this.resumoAlimenta;
    this.projeto.meta = this.metaAlimenta;

    this.proj.adicionarProjeto(this.projeto).subscribe(res=>{
      alert("Cadastro realizado com sucesso!!!");
    },
    (err=>{
      alert("Erro ao realizar o cadastro");
    }))
    
  }

}
