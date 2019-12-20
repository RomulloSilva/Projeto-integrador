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
  private telefone: string;
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

    var i = 0;

    if (this.nome == "" || this.nome == null) {
      this._msgNome = "Digite um numero valido";
      i++;
    } else {
      this._msgNome = null;
    }
    if (this.sobrenome == "" || this.sobrenome == null) {
      this._msgSobrenome = "Digite um numero valido";
      i++;
    } else {
      this._msgSobrenome = null;
    }
    if (this.email == "" || this.email == null || this.email.indexOf("@") == -1) {

      this._msgEmail = "Digite um numero valido";
      i++;
    } else {
      this._msgEmail = null;
    }
    if (this.telefone == "" || this.telefone == null || this.telefone.length < 14) {
      this._msgTelefone = "Digite um numero valido";
      i++;
    } else {
      this._msgTelefone = null;
    }
    if (this.cidade == "" || this.cidade == null) {
      this._msgCidade = "Digite um numero valido";
      i++;
    } else {
      this._msgCidade = null;
    }
    if (this.estado == "" || this.estado == null) {
      this._msgEstado = "Digite um numero valido";
      i++;
    } else {
      this._msgEstado = null;
    }
    if (this.msg == "" || this.msg == null) {
      this._msgTexto = "Digite um numero valido";
      i++;
    } else {
      this._msgTexto = null;
    }

    if (i < 1) {
      alert('Msg enviada');
    }

  };
}
