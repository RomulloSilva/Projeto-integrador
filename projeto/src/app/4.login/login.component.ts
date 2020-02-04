import { Component, OnInit } from '@angular/core';
//Importação do Globals, para que o componente possa consultar os dados do usuario.
import { Globals } from '../model/Globals';
import { Usuario } from '../model/Usuario';
import {Router} from '@angular/router';


/**importação dos dados do empreendedor */
import { Empreendedor } from '../model/Empreendedor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [Globals]
})
export class LoginComponent implements OnInit {

  usuario: Usuario;

  //var do empreendedor.
  empreendedor: Empreendedor;

  constructor(private router: Router) { }

  ngOnInit() {

    this.usuario = Globals.USUARIO;
    this.empreendedor = Globals.EMPREENDEDOR;
    
    if(!this.usuario){
      this.router.navigate(['/login']);/**lembrar de colocar o home de volta */
    }
    else{
      //Permite que os dados do usuário sejam utilizados pelo componente.
    this.usuario = Globals.USUARIO;
    }

    if(!this.empreendedor){
      this.router.navigate(['/login']);
    }else{
      this.empreendedor = Globals.EMPREENDEDOR;
    }
  }


}
