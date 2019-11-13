import { UsuarioService } from './../servicos/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.scss']
})
export class ConsultarComponent implements OnInit {
  usuarios: any = [{}]
  usuario: string;

  consultarUsuario() {
    this.usuarios = this.usuarioService.buscarUsuario(this.usuario);
  }

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarios = this.usuarioService.getUsuario();
  }

}
