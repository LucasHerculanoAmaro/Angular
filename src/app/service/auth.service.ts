import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { Observable } from 'rxjs';
import { UsuarioEntrar } from '../model/UsuarioEntrar';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}


  Entrar(usuarioEntrar: UsuarioEntrar):Observable<UsuarioEntrar>{

    return this.http.post<UsuarioEntrar>('http://localhost:8080/usuarios/logar', usuarioEntrar)

  }

  Cadastrar(usuario: Usuario): Observable<Usuario> {

    return this.http.post<Usuario>('http://localhost:8080/usuarios/cadastrar', usuario);

  }
}
