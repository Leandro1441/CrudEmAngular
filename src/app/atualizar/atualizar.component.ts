import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsuarioService } from './../servicos/usuario.service';

@Component({
  selector: 'app-atualizar',
  templateUrl: './atualizar.component.html',
  styleUrls: ['./atualizar.component.scss']
})
export class AtualizarComponent implements OnInit {
  form: FormGroup;
  id: any
  usuario: {};
  frase: string = '';
  ativo: boolean = false;
  error: boolean = false;

  voltar() {
    this.ativo = false;
    this.error = false;
  }

  atualizar() {
    this.usuarioService.atualizar(this.usuario[0], this.id).subscribe(
      sucess => this.router.navigate(['/consultar']),
      error => {
        if (error.error.text == 'b') {
          alert('Usuario ja existente')
        }
        else if (error.error.text == 'c') {
          alert('Campos Invalidos')
        }
        else
          console.log(error)
      }
    )
  }
  buscar() {
    this.usuarioService.buscarUsuarioId(this.id).subscribe(
      sucess => {
        this.usuario = sucess;
        this.frase = '';
        this.ativo = true;
        this.error = false;
      },
      error => {
        if (error.error.text == 'ID invalido!') {
          this.frase = error.error.text
          this.ativo = false;
          this.error = true;
        }
        else
          console.log(error)
      }
    );
  }

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit() {
  }

}
