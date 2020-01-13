import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';// para o consume de  web service.
import {Usuario} from '../model/Usuario';//Importação da classe Usuário e seu objeto.

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }// criamos uma variável chamada de 'http'.


  /*------------------------------------
Criando serviços para os produtos dentro export.------------------------*/
  pegarPostagens():any {
    return this.http.get("http://cloud.professorisidro.com.br:8088/postagens");// vai retornar todos os objetos.
  }

  buscarCodigoDoProjeto(idPostagem: number):any {
    return this.http.get(`http://cloud.professorisidro.com.br:8088/postagens/${idPostagem}`);//vai buscar pelo id da postagem.

  }

/*------------------------------------
Criando serviços para o Usuarios dentro export.------------------------*/

recuperaTodos(){
  //Aqui essa função vai retornar todos os usuários.
  return this.http.get('http://cloud.professorisidro.com.br:8088/usuario/all');

}

recuperaDetalhe(id:number){//Como queremos a info através do id, criamos uma var "id" do tipo number.
    //Essa função vai retornar a informação através do is
    return this.http.get("http://cloud.professorisidro.com.br:8088/usuario/"+id)

  }

  public insere(usuario:Usuario){
    //criando o serviço "post" que vai adicionar o cadastro do usuário.
    return this.http.post("http://cloud.professorisidro.com.br:8088/usuario/new",usuario);

  }


  public atualiza(usuario: Usuario){
    return this.http.put("http://cloud.professorisidro.com.br:8088/usuario",usuario)
  }

}




