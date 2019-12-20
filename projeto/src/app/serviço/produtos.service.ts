import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';// para o consume de  web service.

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }// criamos uma variável chamada de 'http'.

  pegarPostagens():any {
    return this.http.get("http://cloud.professorisidro.com.br:8088/postagens");// vai retornar todos os objetos.
  }

  buscarCodigoDoProjeto(idPostagem: number):any {
    return this.http.get(`http://cloud.professorisidro.com.br:8088/postagens/${idPostagem}`);//vai buscar pelo id da postagem.

  }
}


