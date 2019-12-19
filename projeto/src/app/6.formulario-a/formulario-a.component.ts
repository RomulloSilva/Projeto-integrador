import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-formulario-a',
  templateUrl: './formulario-a.component.html',
  styleUrls: ['./formulario-a.component.css']
})
export class FormularioAComponent implements OnInit {

  private nome: string;
  private sobrenome: string;
  private email: string;
  private telefone: number;
  private cidade: string;
  private estado: string;
  private msg: string;
  private _msgNome: string = null;
  private _msgSobrenome: string = null;
  private _msgEmail: string = null;
  private _msgTelefone: string = null;
  private _msgCidade: string = null;
  private _msgEstado: string = null;
  private _msgTexto: string = null;

  constructor() { }

  ngOnInit() {

  }
  private pesquisar() {
    if (this.nome == "" || this.nome == null) {
   
      this._msgNome = "Digite um numero valido";
    }
    else {
      this._msgNome = "ok";
    }
    /************************************************************************** */
    if (this.sobrenome == "" || this.sobrenome == null) {

      this._msgSobrenome = "Digite um numero valido";
    }
    else {
      this._msgSobrenome = "ok";
    }
    /***************************************************************************** */
    if (this.email == "" || this.email == null) {

      this._msgEmail = "Digite um numero valido";
    }
    else {
      this._msgEmail = "ok";
    }
    /***************************************************************************** */
    if (this.telefone == 0 || this.telefone == null) {

      this._msgTelefone = "Digite um numero valido";
    }
    else {
      this._msgTelefone = "ok";
    }

    /***************************************************************************** */
    if (this.cidade == "" || this.cidade == null) {

      this._msgCidade = "Digite um numero valido";
    }
    else {
      this._msgCidade = "ok";
    }
    /***************************************************************************** */
    if (this.estado == "" || this.estado == null) {

      this._msgEstado = "Digite um numero valido";
    }
    else {
      this._msgEstado = "ok";
    }
    /***************************************************************************** */
    if (this.msg == "" || this.msg == null) {

      this._msgTexto = "Digite um numero valido";
    }
    else {
      this._msgTexto = "ok";
    }

  };
}
