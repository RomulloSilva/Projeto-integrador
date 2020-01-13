import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { ActivatedRoute } from '@angular/router';//necessário para ativar a rota dos links.
import { ProdutosService } from '../serviço/produtos.service';


@Component({
  selector: 'app-edita-user',
  templateUrl: './edita-user.component.html',
  styleUrls: ['./edita-user.component.css']
})
export class EditaUserComponent implements OnInit {

  public usuario: Usuario = new Usuario();
  private id: number;

  constructor(private rota: ActivatedRoute, private busca: ProdutosService) { }

  //Aqui fica no OnInit porque deve ser inicado junto com a página.
  ngOnInit() {

    this.id = this.rota.snapshot.params["id"];
    console.log("Veio com o parâmetro o valor = " + this.id);

    this.busca.recuperaDetalhe(this.id).subscribe((res: Usuario) => {
      this.usuario = res;
      console.log("RECUPERADO!");
      console.log(this.usuario);
    });
  }


  enviarAlteracoes() {
    this.busca.atualiza(this.usuario).subscribe(
      (res) => {
        alert("Atualizado com sucesso");
      },
      (err) => {
        alert("Erro ao atualizar");
        console.log(err);
      });
  }



}
