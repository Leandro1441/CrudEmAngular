import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './../servicos/usuario.service';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  usuarios: {}
  usuario: string

  atualizarTable() {
    if (this.usuario) {
      this.usuarioService.buscarUsuario(this.usuario).subscribe(
        sucess => this.usuarios = sucess,
        error =>
          console.log(error)
      )
    }
    else if (this.usuario === '') {
      this.consultarTudo()
    }
  }

  deletarX(id) {
    this.usuarioService.deletarUsuarioId(id).subscribe(
      sucess => alert(sucess),
      error =>
        alert(error),
      () => this.consultarTudo()
    )
  }

  consultarTudo(): void {
    this.usuarioService.getUsuario().subscribe(
      sucess => this.usuarios = sucess,
      error =>
        console.log(error)
    )
  }
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.consultarTudo()
  }
}
