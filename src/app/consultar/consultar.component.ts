import { Component, OnInit } from '@angular/core';

import { UsuarioService } from './../servicos/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.scss']
})
export class ConsultarComponent implements OnInit {
  usuarios: any = [{}]
  usuario: string;
  id: number
  table: boolean = true
  consultarUsuario() {
    this.usuarios = this.usuarioService.buscarUsuario(this.usuario);
  }

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.usuarios = this.usuarioService.getUsuario();
    let teste: { id: number; usuario: string; senha: string } = this.usuarioService.buscarUsuarioId(this.route.snapshot.params['id'])
    if (teste.id != null) {
      console.log(teste)
      this.usuarios = [teste];
    }
    else
      this.router.navigate(['/consultar'])
  }

}
