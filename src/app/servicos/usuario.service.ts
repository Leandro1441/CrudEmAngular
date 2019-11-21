

import { Injectable } from '@angular/core';
import { SettingService } from './../setting.service';
import { HttpClient, HttpRequest, HttpParams } from '@angular/common/http';
import { Usuario } from './Usuario';
import { tap, take } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuarios: { id; usuario; senha }[] = [
    { id: 0, usuario: 'Pedro555', senha: "12345671" },
    { id: 1, usuario: 'Joao6585', senha: "12345672" },
    { id: 2, usuario: 'Leornado1234', senha: "12345673" },
    { id: 3, usuario: 'Claudio1471', senha: "12345674" },
    { id: 4, usuario: '1Silva1236', senha: "12345675" },
    { id: 5, usuario: 'Debora@qq', senha: "12345676" },
    { id: 6, usuario: 'SemUsuario1235', senha: "12345677" },
    { id: 7, usuario: 'joSuea41254', senha: "12345678" },
    { id: 8, usuario: 'EnzO1234566', senha: "12345679" },
    { id: 9, usuario: 'Leandro1441', senha: "12345678" },
    { id: 10, usuario: '1', senha: "1" },
  ]

  getUsuario() {
    const url = 'http://localhost:3000/usuario/'
    return this.httpClient.get(url).pipe(take(1));
  }

  setUsuario(usuario: { usuario: string, senha: string, senha2: string }) {
    const url = 'http://localhost:3000/usuario/' + usuario.usuario + '/' + usuario.senha + '/' + usuario.senha2;
    return this.httpClient.post(url, null).pipe(take(1));
  }

  deletarUsuarioId(id) {
    const url = 'http://localhost:3000/usuario/' + id
    return this.httpClient.delete(url).pipe(take(1));
  }

  buscarUsuario(usuario: string) {
    const url = 'http://localhost:3000/usuario/user/' + usuario
    return this.httpClient.get(url).pipe(take(1));
  }

  buscarUsuarioId(id: number) {
    const url = 'http://localhost:3000/usuario/id/' + id
    return this.httpClient.get(url).pipe(take(1))
  }

  atualizar(usuario: { usuario: string, senha: string }, id: number) {
    const url = 'http://localhost:3000/usuario/' + '/' + id + '/' + usuario.usuario + '/' + usuario.senha + '/'
    return this.httpClient.put(url, null)
  }

  loginUsuario(usuario: { usuario: string, senha: string }) {
    const url = 'http://localhost:3000/usuario/login/' + usuario.usuario + '/' + usuario.senha;
    return this.httpClient.get(url).pipe(take(1))

  }
  constructor(
    private settingService: SettingService,
    private httpClient: HttpClient
  ) { }
}
