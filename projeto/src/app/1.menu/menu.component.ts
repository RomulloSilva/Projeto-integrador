import { Component, OnInit } from '@angular/core';

//Importar a classe de usuario.
import{Usuario} from '../model/Usuario';
import{ProdutosService} from '../serviço/produtos.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  //Varáveis de validação.
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
  private telefoneInvest: string;
  private senhaInvest: string;
  private confirmaSenhaInvest: string;
  private msgNomeInvest: string = null;
  private msgEmailInvest: string = null;
  private msgTelefoneInvest: string = null;
  private msgSenhaInvest: string = null;
  private msgSenhaInvest1: string = null;
  private msgSenhaInvest2: string = null;
  private msgConfirmaSenhaInvest: string = null;

  //Variável para invocar o objeto Usuário(sempre da new para não da erro).
  public usuario: Usuario = new Usuario();

//
  constructor(private busca: ProdutosService) { }

  ngOnInit() {
  }



// Criar função que enviar os dados e tem menssagem de erro caso o email seja duplicado e outra de sucesso.(tem de ser fora do ngOnInit)*/
enviarDados(){
  this.busca.insere(this.usuario).subscribe(
    res=>{
      console.log(res);
      alert("Inserido com sucesso");
    },
    error=>{
      console.log(error);
      alert("Erro ao enserir");
    }
  );
}






//Funções de validação.
  private forcaSenha(){
    if( this.usuario.senha.indexOf("@") >=0  && this.usuario.senha.length >=10 || this.usuario.senha.indexOf("#") >=0  && this.usuario.senha.length >=10 || this.usuario.senha.indexOf("$") >=0  && this.usuario.senha.length >=10 || this.usuario.senha.indexOf("%") >=0  && this.usuario.senha.length >=10 || this.usuario.senha.indexOf("&") >=0 && this.usuario.senha.length >=10 ){
      this.msgSenha1 = "Senha Forte!";
      this.msgSenha2 = null;
    }else if (this.usuario.senha.length < 10){
      this.msgSenha2 = "Senha Fraca!";
      this.msgSenha1 = null;
    }
  }

  private validacao(){
    var u =0;
    var regex = /[0-9]/;

    if (this.usuario.nome == "" || this.usuario.nome == null || regex.test(this.usuario.nome) || this.usuario.nome.indexOf(" ") == -1) {
      this.msgNome = "Digite um nome válido";
      u++;
    } else {
      this.msgNome = null;
    }
    if (this.usuario.email == "" || this.usuario.email == null || this.usuario.email.indexOf("@") == -1 || this.usuario.email.indexOf(".com") == -1) {

      this.msgEmail = "Digite um e-mail valido";
      u++;
    } else {
      this.msgEmail = null;
    }
    var tel = Number(this.usuario.telefone);
    if ( this.usuario.telefone == null || this.usuario.telefone.length != 11 || isNaN(tel)) {
      this.msgTelefone = "Digite um numero de telefone válido";
      u++;
    } else {
      this.msgTelefone = null;
    }
    if(this.usuario.senha == "" || this.usuario.senha == null){
      this.msgSenha = "Digite uma senha"
      u++
    }else{
      this.msgSenha = null;
    }
    
    if(this.confirmaSenha != this.usuario.senha || this.confirmaSenha == null){
      this.msgConfirmaSenha = "Senhas incompatíveis";
      u++
    } else{
      this.msgConfirmaSenha = null;
    }

    if(u < 1){
      alert("Bem-vindo ao B.lieveOn "+this.usuario.nome);
     
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
    if (this.emailInvest == "" || this.emailInvest == null || this.emailInvest.indexOf("@") == -1 || this.emailInvest.indexOf(".com") == -1) {

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


  }//Termina o export.

