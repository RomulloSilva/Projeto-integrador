import { Component, OnInit } from '@angular/core';

/**importações para exibir dados de um projeto  */
import {Projeto} from '../model/Projeto';
import { ActivatedRoute } from '@angular/router';//necessário para ativar a rota dos links.
import{ProjetosService} from '../serviço/projetos.service';
import {Meta} from '../model/Meta';
import {Investidor} from '../model/Investidor';
import {Categoria} from '../model/Categoria';
import {MetaService} from '../serviço/meta.service';
import {CategoriaService} from '../serviço/categoria.service';
import {InvestidorService} from '../serviço/investidor.service';

@Component({
  selector: 'app-pagina-doacao',
  templateUrl: './pagina-doacao.component.html',
  styleUrls: ['./pagina-doacao.component.css']
})
export class PaginaDoacaoComponent implements OnInit {

  public projeto: Projeto = new Projeto();
  public meta: Meta = new Meta();
  public investidor: Investidor = new Investidor();
  public categoria: Categoria = new Categoria();
  public idProj: number;

  /*TESTE */
  private post1:  Projeto=null;



  

  constructor(private rota: ActivatedRoute, private busca: ProjetosService, private cat: CategoriaService, private met: MetaService, private invest: InvestidorService) { }

  ngOnInit() {

    this.idProj = this.rota.snapshot.params["idProj"]
    console.log("Veio com o parâmetro o valor = " + this.idProj);
    
    this.busca.listarProjetoId(this.idProj).subscribe((res: Projeto)=>{
      this.projeto = res;
      console.log("RECUPERADO");
      console.log(this.projeto);
    });

    this.pegarPost1();


  }

  pegarPost1(){
    this.busca.listarProjetoId(this.idProj).subscribe((procura: Projeto)=>{
      this.post1 = procura;
    })
  }
  
    
  

  /*public doar()*/
}
