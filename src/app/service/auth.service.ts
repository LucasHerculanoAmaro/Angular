import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private html: HttpClient) {

  }

  Cadastrar(usuario: Usuario): Observable<Usuario> {

    return this.html.post<Usuario>('http://localhost/8080/usuarios/cadastrar', usuario);

  }
}
