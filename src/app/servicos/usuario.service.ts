import { SettingService } from './../setting.service';
import { Injectable } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';

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
  getUsuario(): { id: number; usuario: string; senha: string }[] {
    return this.usuarios;
  }
  setUsuario(usuario: string, senha: string): void {
    let idMaior = 0
    for (let i = 0; i < this.usuarios.length; i++) {
      if (idMaior < this.usuarios[i].id) {
        idMaior = this.usuarios[i].id + 2;
      }
    }
    this.usuarios.push({ usuario: usuario, senha: senha, id: idMaior })
    alert('Usuario cadastrado')
  }

  deletarUsuarioId(id){
    console.log(id)
    for (let i = 0; i < this.usuarios.length; i++) {
      if (this.usuarios[i].id == id) {
        this.usuarios.splice(i, 1);
        return 'Usuario removido';
      }
    }
    return "Usuario não existente"
  }

  buscarUsuario(usuario: string): { id: number; usuario: string; senha: string }[] {
    let usuarios2 = []
    for (let i = 0; i < this.usuarios.length; i++) {
      if (this.usuarios[i].usuario.match(usuario)) {
        usuarios2.push(this.usuarios[i]);
      }
    }
    return usuarios2
  }

  buscarUsuarioId(id: number): { id: number; usuario: string; senha: string } {
    for (let i = 0; i < this.usuarios.length; i++) {
      if (this.usuarios[i].id == id) {
        return this.usuarios[i];
      }
    }
    return { id: null, usuario: null, senha: null }
  }

  atualizar(id: number, nUsuario: string, nSenha: string): boolean {
    for (let i = 0; i < this.usuarios.length; i++) {
      if (this.usuarios[i].usuario === nUsuario) {
        if (this.usuarios[i].senha != nSenha) {
          this.usuarios[i].senha = nSenha;
          return true
        }
        else {
          return false
        }
      }
    }
    for (let i = 0; i < this.usuarios.length; i++) {
      if (this.usuarios[i].id == id) {
        this.usuarios[i].usuario = nUsuario;
        return true
      }
    }
  }

  loginUsuario(usuario: string, senha: string): boolean {
    for (let i = 0; i < this.usuarios.length; i++) {
      if (this.usuarios[i].usuario == usuario && this.usuarios[i].senha == senha) {
        this.settingService.setUsuario(usuario);
        return true
      }
    }
    return false;
  }
  constructor(private settingService: SettingService) { }
}
