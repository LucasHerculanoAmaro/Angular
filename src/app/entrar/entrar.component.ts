import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

import { UsuarioEntrar } from '../model/UsuarioEntrar';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  usuarioEntrar: UsuarioEntrar = new UsuarioEntrar()

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  entrar(){
    this.auth.Entrar(this.usuarioEntrar).subscribe((resp: UsuarioEntrar) => {
      this.usuarioEntrar = resp

      environment.token = this.usuarioEntrar.token
      environment.nome = this.usuarioEntrar.nome
      environment.foto = this.usuarioEntrar.foto
      environment.id = this.usuarioEntrar.id

      console.log(environment.token)
      console.log(environment.nome)
      console.log(environment.id)
      console.log(environment.id)

      this.router.navigate(['/inicio'])
    }, error =>{
      if (error.status == 500){
        alert('Usuario ou senha estão incorretos!')
      }
    });
  
  }

}
