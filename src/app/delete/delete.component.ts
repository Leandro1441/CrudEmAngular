import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './../servicos/usuario.service';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  usuarios: { id: number; usuario: string; senha: string }[] = []
  usuario: string

  atualizarTable(){
    this.usuarios = this.usuarioService.buscarUsuario(this.usuario)
  }
  deletarX(id){
    alert(this.usuarioService.deletarUsuarioId(id))
    this.atualizarTable();
  }

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarios = this.usuarioService.getUsuario();
  }
}
