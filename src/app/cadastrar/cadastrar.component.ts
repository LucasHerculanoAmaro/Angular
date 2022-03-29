import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  //criando um objeto para receber/referenciar a model usuario
  usuario: Usuario = new Usuario
  confirmarSenha: string

  constructor(
    
    private authService: AuthService) { }

  ngOnInit(): void {                            //responsavel por iniciar a página dando
  }

  confirmeSenha(event:any){                     // criando evento para receber as senhas
    this.confirmarSenha = event.target.value    //chamando o confirmar senha

  }

  cadastrarUsuario() {
    if (this.usuario.senha != this.confirmarSenha) {
      alert("Senhas não compatíveis!")
    }
    else {//vai sobrescrever a senha em formato json
      this.authService.Cadastrar(this.usuario).subscribe((resp:Usuario) => {
        this.usuario = resp
        alert("você foi cadastrado com sucesso!")
      }); 
    }
  }

}
