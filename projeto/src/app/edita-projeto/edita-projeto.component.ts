import { Component, OnInit } from '@angular/core';

//importações da tarefa 10.
import {ProjetosService} from '../serviço/projetos.service';
import {Projeto} from '../model/Projeto';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edita-projeto',
  templateUrl: './edita-projeto.component.html',
  styleUrls: ['./edita-projeto.component.css']
})
export class EditaProjetoComponent implements OnInit {


  public projeto: Projeto = new Projeto();
 

  //var
  private idAlimenta: number;
	private  imagensAlimenta: string; 
	private  tituloAlimenta: string; 
	private  descricaoAlimenta: string; 
	private  resumoAlimenta: string; 
  private  metaAlimenta: string; 
  //var
  
  constructor(private rota: ActivatedRoute, private busca: ProjetosService) { }

  ngOnInit() {
    this.idAlimenta = this.rota.snapshot.params["id"];
    this.busca.listarProjetoId(this.idAlimenta).subscribe((res:Projeto)=>{
      this.projeto = res;
      this.idAlimenta =this.projeto.id;
      this.imagensAlimenta =this.projeto.imagens;
      this.tituloAlimenta =this.projeto.titulo;
      this.descricaoAlimenta =this.projeto.descricao;
      this.resumoAlimenta =this.projeto.resumo;
      this.metaAlimenta =this.projeto.meta;
    },(err)=>{
      alert("Não funcionou a exibiçãod o produto")
    })

    
  }



 public enviarAlteracoes(){

  
      this.projeto.id = this.idAlimenta;
      this.projeto.imagens =  this.imagensAlimenta;
      this.projeto.titulo = this.tituloAlimenta;
      this.projeto.descricao = this.descricaoAlimenta;
      this.projeto.resumo = this.resumoAlimenta;
      this.projeto.meta = this.metaAlimenta;
      this.busca.atualizarProjeto(this.projeto).subscribe((res)=>{
        alert("Atualizado com sucesso")
      },
      (err)=>{
        alert("Sem sucesso")
      });
   
 }







}
