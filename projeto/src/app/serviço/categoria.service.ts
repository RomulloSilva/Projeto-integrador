import { Injectable } from '@angular/core';
//Importação para o crud.
import {HttpClient} from '@angular/common/http';
import {Categoria} from '../model/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }
}


/** Aqui ficaram os métodos com os caminhos */