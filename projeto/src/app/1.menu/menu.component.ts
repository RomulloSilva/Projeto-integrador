import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


      private nome: string;
      private email: string;
      private telefone: String;
      private senha: string;
      private confirmaSenha: string;
      private msgNome: string = null;
      private msgEmail: string = null;
      private msgTelefone: string = null;
      private msgSenha: string = null;
      private msgSenha1: string = null;
      private msgSenha2: string = null;
      private msgConfirmaSenha: string = null;
      //------------INVESTIDOR--------//
      private nomeInvest: string;
      private emailInvest: string;
      private telefoneInvest: String;
      private senhaInvest: string;
      private confirmaSenhaInvest: string;
      private msgNomeInvest: string = null;
      private msgEmailInvest: string = null;
      private msgTelefoneInvest: string = null;
      private msgSenhaInvest: string = null;
      private msgSenhaInvest1: string = null;
      private msgSenhaInvest2: string = null;
      private msgConfirmaSenhaInvest: string = null;

  constructor() { }

  ngOnInit() {
  }

  private forcaSenha(){
    if( this.senha.indexOf("@") >=0  && this.senha.length >=10 || this.senha.indexOf("#") >=0  && this.senha.length >=10 || this.senha.indexOf("$") >=0  && this.senha.length >=10 || this.senha.indexOf("%") >=0  && this.senha.length >=10 || this.senha.indexOf("&") >=0 && this.senha.length >=10 ){
      this.msgSenha1 = "Senha Forte!";
      this.msgSenha2 = null;
    }else if (this.senha.length < 10){
      this.msgSenha2 = "Senha Fraca!";
      this.msgSenha1 = null;
    }
  }

  private validacao(){
    var u =0;
    var regex = /[0-9]/;

    if (this.nome == "" || this.nome == null || regex.test(this.nome)) {
      this.msgNome = "Digite um nome válido";
      u++;
    } else {
      this.msgNome = null;
    }
    if (this.email == "" || this.email == null || this.email.indexOf("@") == -1 || this.email.indexOf(".") == -1) {

      this.msgEmail = "Digite um e-mail valido";
      u++;
    } else {
      this.msgEmail = null;
    }
    var tel = Number(this.telefone);
    if ( this.telefone == null || this.telefone.length != 11 || isNaN(tel)) {
      this.msgTelefone = "Digite um numero de telefone válido";
      u++;
    } else {
      this.msgTelefone = null;
    }
    if(this.senha == "" || this.senha == null){
      this.msgSenha = "Digite uma senha"
      u++
    }else{
      this.msgSenha = null;
    }
    
    if(this.confirmaSenha != this.senha || this.confirmaSenha == null){
      this.msgConfirmaSenha = "Senhas incompatíveis";
      u++
    } else{
      this.msgConfirmaSenha = null;
    }

    if(u < 1){
      alert("Bem-vindo ao B.lieveOn "+this.nome);
    }
  }


  //---------------------------Funções do investidor--------------------------------//

  private forcaSenhaInvest(){
  if( this.senhaInvest.indexOf("@") >=0  && this.senhaInvest.length >=10 || this.senhaInvest.indexOf("#") >=0  && this.senhaInvest.length >=10 || this.senhaInvest.indexOf("$") >=0  && this.senhaInvest.length >=10 || this.senhaInvest.indexOf("%") >=0  && this.senhaInvest.length >=10 || this.senhaInvest.indexOf("&") >=0 && this.senhaInvest.length >=10 ){
    this.msgSenhaInvest1 = "Senha Forte!";
    this.msgSenhaInvest2 = null;
  }else if (this.senhaInvest.length < 10){
    this.msgSenhaInvest2 = "Senha Fraca!";
    this.msgSenhaInvest1 = null;
  }
}


  private validacaoInvestidor(){
    var u =0;
    var regex = /[0-9]/;

    if (this.nomeInvest == "" || this.nomeInvest == null || regex.test(this.nomeInvest)) {
      this.msgNomeInvest = "Digite um nome válido";
      u++;
    } else {
      this.msgNomeInvest = null;
    }
    if (this.emailInvest == "" || this.emailInvest == null || this.emailInvest.indexOf("@") == -1 || this.emailInvest.indexOf(".") == -1) {

      this.msgEmailInvest = "Digite um e-mail valido";
      u++;
    } else {
      this.msgEmailInvest = null;
    }
    var tel = Number(this.telefoneInvest);
    if ( this.telefoneInvest == null || this.telefoneInvest.length != 11 || isNaN(tel)) {
      this.msgTelefoneInvest = "Digite um numero de telefone válido";
      u++;
    } else {
      this.msgTelefoneInvest = null;
    }
    if(this.senhaInvest == "" || this.senhaInvest == null){
      this.msgSenhaInvest = "Digite uma senha"
      u++
    }else{
      this.msgSenhaInvest = null;
    }
    
    if(this.confirmaSenhaInvest != this.senhaInvest || this.confirmaSenhaInvest == null){
      this.msgConfirmaSenhaInvest = "Senhas incompatíveis";
      u++
    } else{
      this.msgConfirmaSenhaInvest = null;
    }

    if(u < 1){
      alert("Bem-vindo ao B.lieveOn "+this.nomeInvest);
    }
  }
  }

