import { UsuarioService } from './../servicos/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-atualizar',
  templateUrl: './atualizar.component.html',
  styleUrls: ['./atualizar.component.scss']
})
export class AtualizarComponent implements OnInit {
  id: any
  nUsuario: any;
  nSenha: any;
  frase: string = '';
  ativo: boolean = false;
  error: boolean = false;

  voltar() {
    this.ativo = false;
    this.error = false;
  }

  atualizar() {
    console.log(this.id)
    if (this.nUsuario != '' && this.nUsuario.length >= 8) {
      if (this.nSenha != '' && this.nSenha.length >= 8) {
        let atu
        atu = this.usuarioService.atualizar(this.id, this.nUsuario, this.nSenha)
        if (atu) {
          this.router.navigate(['/consultar'])
        }
        else {
          alert('Usuario não alterado!')
        }
      }
      else {
        console.log('Senha Invalida!')
      }
    }
    else {
      console.log('Usuario Invalido!')
    }
    console.log(this.id)
  }

  buscar() {
    let usuario = (this.usuarioService.buscarUsuarioId(this.id))
    if (usuario.id) {
      this.nUsuario = usuario.usuario;
      this.nSenha = usuario.senha;
      this.frase = '';
      this.ativo = true;
      this.error = false;
    }
    else {
      this.frase = 'Usuario não encontrado';
      this.ativo = false;
      this.error = true;
    }
  }

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit() {
  }

}
