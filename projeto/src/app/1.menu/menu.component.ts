import { Component, OnInit } from '@angular/core';
import {ProdutosService} from '../serviço/produtos.service';

//Importar a classe de usuario.
import { Usuario } from '../model/Usuario';
import { Router } from '@angular/router';
import { Globals } from '../model/Globals';
//importação do jquery
import * as $ from 'jquery';



/**Importações utilizadas na tarefa 10, que valida o login do Administrador*/
import { AdministradorService } from '../serviço/administrador.service';
import {Token} from '../model/Token';
import {Projeto} from '../model/Projeto';
import {Administrador} from '../model/Administrador';
//utilizamos o router tambem.
/**Imposrtações para validar login de investidor e Empreendedor */
import {Investidor} from '../model/Investidor';
import {Empreendedor} from '../model/Empreendedor';
import {EmpreendedorService} from'../serviço/empreendedor.service';
import {InvestidorService} from '../serviço/investidor.service';
/**FIM**/

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [Globals]
  
})
export class MenuComponent implements OnInit {



  //Varáveis de validação.

  public inputEmail: string;
  public inputPassword: string;
  private confirmaSenha: string;
  public msgNome: string = null;
  public msgEmail: string = null;
  public msgTelefone: string = null;
  public msgSenha: string = null;
  public msgSenha1: string = null;
  public msgSenha2: string = null;
  public msgConfirmaSenha: string = null;
  //------------INVESTIDOR--------//
  private nomeInvest: string;//gui-validandologin2=criando variaveis de validação de login
  private emailInvest: string;//gui-validandologin2=criando variaveis de validação de login
  private telefoneInvest: string;
  private senhaInvest: string;
  private confirmaSenhaInvest: string;
  public msgNomeInvest: string = null;
  public msgEmailInvest: string = null;
  public msgTelefoneInvest: string = null;
  public msgSenhaInvest: string = null;
  public msgSenhaInvest1: string = null;
  public msgSenhaInvest2: string = null;
  public msgConfirmaSenhaInvest: string = null;
  public idResposta: String = null;

 

  //Variável para invocar o objeto Usuário(sempre da new para não da erro).
  public usuario: Usuario = new Usuario();
  //variavel de invocação dos objetos.
  public investidor: Investidor = new Investidor();
  public invLogado: boolean = false;
  public empreendedor: Empreendedor = new Empreendedor();
  public empLogado: boolean = false;

  //Variável que é usada para retirar dados que só podem ser utilizados qquando logado.
  public estaLogado: boolean = false;
  
   //Variáveis do administrador
   public admnistrador: Administrador = new Administrador();
   public admLogado: boolean = false;



  
  constructor(private busca: ProdutosService, private srv: ProdutosService, private router: Router, private adm: AdministradorService, private inv: InvestidorService, private emp: EmpreendedorService) { }


  ngOnInit() {

    //Salvando o Token no localStorage
    if(localStorage.getItem("admToken")){
      this.router.navigate(['/perfil']);
    }
    
    

    

    
  }

   

  //gui-validandologin3=esta função compara os dados e valida (compara a api com os dados inseridos nos inputs do form de login)
    public efetuaLogin() {


      if(this.inputEmail == "ADM@adm.com" && this.inputPassword == "12345"){
        this.admnistrador.emailADM = this.inputEmail;
        this.admnistrador.senhaADM = this.inputPassword;
        this.adm.loginAdm(this.admnistrador).subscribe((res:Administrador)=>{
          console.log("Administrador logado")

          //var que faz os componentes de ADM aparecer.
          this.admLogado = true;
          //Rota para levar ao componente perfil onde postamos os projetos.
          this.router.navigate(['perfil']);
          $('#fecharModal').click();
          alert("Administrador logado");
        },
        (err)=>{
          console.log("Não conectado");
        alert("Senha ou email do Administrador errados")
        })
      }else{

        this.investidor.email = this.inputEmail;
        this.investidor.senha = this.inputPassword;
    
        this.inv.loginInvest(this.investidor).subscribe((res:Investidor)=>{
          console.log("Conectado");

          //var que faz os componentes do investidor aparecer.
          this.invLogado = true;
  
            //Atribuir o Globals ao objet
            Globals.INVESTIDOR = res;
  
            //var que faz os dados aparecerem.
            this.estaLogado = true;
          
          this.router.navigate(['login']);
          //jquery que faz o modal sair após ser logado.
          $('#fecharModal').click();//Aqui vai o id do modal.
          alert("Investidor logado")
        
        },
        (erro)=>{
          console.log("Não conectado");
          alert("Senha ou email errados Investidor")
          //Como somos o commerce não vamos ter rota, só msg de erro.
  
        })

      }

     
  }

  public loginEmp(){
        this.empreendedor.emailEmp = this.inputEmail;
        this.empreendedor.emailEmp = this.inputPassword;
        this.emp.loginInvest(this.empreendedor).subscribe((res: Empreendedor)=>{
          console.log("Conectado");
          this.empLogado = true;
          Globals.EMPREENDEDOR = res;
          this.router.navigate(['login'])
          $('#fecharModal').click();
          alert("Investidor logado")
        },(erro)=>{
          console.log("Não conectado");
          alert("Senha ou email errados do empreendedor");
        })


  }

  // Cria função que envia os dados e tem mensagem de erro caso o email seja duplicado e outra de sucesso.(tem de ser fora do ngOnInit).
  enviarDados() {
    this.busca.insere(this.usuario).subscribe(
      res => {
        console.log(res);
        alert("Bem-vindo ao B.lieveOn " + this.usuario.nome);
      },
      error => {
        console.log(error);
        alert("Erro ao enserir");
      }
    );
  }






  //Funções de validação.
  private forcaSenha() {
    if (this.usuario.senha.indexOf("@") >= 0 && this.usuario.senha.length >= 10 || this.usuario.senha.indexOf("#") >= 0 && this.usuario.senha.length >= 10 || this.usuario.senha.indexOf("$") >= 0 && this.usuario.senha.length >= 10 || this.usuario.senha.indexOf("%") >= 0 && this.usuario.senha.length >= 10 || this.usuario.senha.indexOf("&") >= 0 && this.usuario.senha.length >= 10) {
      this.msgSenha1 = "Senha Forte!";
      this.msgSenha2 = null;
      this.idResposta = "msgCorreta"
      this.msgSenha = null;
    } else if (this.usuario.senha.length < 10) {
      this.msgSenha2 = "Senha Fraca!";
      this.msgSenha1 = null;
      this.idResposta = "msgErro"
      this.msgSenha = null;
    }
  }

  private validacao() {
    var u = 0;
    var regex = /[0-9]/;

    if (this.usuario.nome == "" || this.usuario.nome == null || regex.test(this.usuario.nome) || this.usuario.nome.indexOf(" ") == -1) {
      this.msgNome = "Digite um nome válido.";
      u++;
    } else {
      this.msgNome = null;
    }
    if (this.usuario.email == "" || this.usuario.email == null || this.usuario.email.indexOf("@") == -1 || this.usuario.email.indexOf(".com") == -1) {

      this.msgEmail = "Digite um e-mail válido.";
      u++;
    } else {
      this.msgEmail = null;
    }
    var tel = Number(this.usuario.telefone);
    if (this.usuario.telefone == null || this.usuario.telefone.length != 11 || isNaN(tel)) {
      this.msgTelefone = "Digite um telefone válido.";
      u++;
    } else {
      this.msgTelefone = null;
    }
    if (this.usuario.senha == "" || this.usuario.senha == null) {
      this.msgSenha = "Digite uma senha."
      this.idResposta = "msgErro"
      this.msgSenha1 = null;
      this.msgSenha2 = null;
      u++
    } else {
      this.msgSenha = null;
    }

    if (this.confirmaSenha != this.usuario.senha || this.confirmaSenha == null) {
      this.msgConfirmaSenha = "Senhas incompatíveis.";
      u++
    } else {
      this.msgConfirmaSenha = null;
    }

    if (u < 1) {

      this.enviarDados();


    }
  }


  //---------------------------Funções do investidor--------------------------------//

  private forcaSenhaInvest() {
    if (this.senhaInvest.indexOf("@") >= 0 && this.senhaInvest.length >= 10 || this.senhaInvest.indexOf("#") >= 0 && this.senhaInvest.length >= 10 || this.senhaInvest.indexOf("$") >= 0 && this.senhaInvest.length >= 10 || this.senhaInvest.indexOf("%") >= 0 && this.senhaInvest.length >= 10 || this.senhaInvest.indexOf("&") >= 0 && this.senhaInvest.length >= 10) {
      this.msgSenhaInvest1 = "Segurança: Forte!";
      this.msgSenhaInvest2 = null;
      this.idResposta = "msgCorreta"
      this.msgSenhaInvest = null;
    } else if (this.senhaInvest.length < 10) {
      this.msgSenhaInvest2 = "Segurança: Fraca.";
      this.msgSenhaInvest1 = null;
      this.idResposta = "msgErro"
      this.msgSenhaInvest = null;
    }
  }


  private validacaoInvestidor() {
    var u = 0;
    var regex = /[0-9]/;

    if (this.nomeInvest == "" || this.nomeInvest == null || regex.test(this.nomeInvest)) {
      this.msgNomeInvest = "Digite seu nome completo.";
      u++;
    } else {
      this.msgNomeInvest = null;
    }
    if (this.emailInvest == "" || this.emailInvest == null || this.emailInvest.indexOf("@") == -1 || this.emailInvest.indexOf(".com") == -1) {

      this.msgEmailInvest = "Digite um e-mail válido";
      u++;
    } else {
      this.msgEmailInvest = null;
    }
    var tel = Number(this.telefoneInvest);
    if (this.telefoneInvest == null || this.telefoneInvest.length != 11 || isNaN(tel)) {
      this.msgTelefoneInvest = "Digite um telefone válido.";
      u++;
    } else {
      this.msgTelefoneInvest = null;
    }
    if (this.senhaInvest == "" || this.senhaInvest == null) {
      this.msgSenhaInvest = "Digite uma senha."
      this.idResposta = "msgErro"
      this.msgSenhaInvest1 = null;
      this.msgSenhaInvest2 = null;
      u++
    } else {
      this.msgSenhaInvest = null;
    }

    if (this.confirmaSenhaInvest != this.senhaInvest || this.confirmaSenhaInvest == null) {
      this.msgConfirmaSenhaInvest = "Senhas incompatíveis.";
      u++
    } else {
      this.msgConfirmaSenhaInvest = null;
    }

    if (u < 1) {

      alert("Bem-vindo ao B.lieveOn " + this.nomeInvest);


    }
  }











}


