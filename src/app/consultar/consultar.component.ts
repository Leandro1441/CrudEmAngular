import { Component, OnInit } from '@angular/core';

import { UsuarioService } from './../servicos/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.scss']
})
export class ConsultarComponent implements OnInit {

  usuarios:{}
  usuario: string;

  id: number;
  table: boolean = true

  consultarUsuario():void {
    if (this.usuario) {
      this.usuarioService.buscarUsuario(this.usuario).subscribe(
        sucess => this.usuarios=sucess,
        error => 
            console.log(error)
      )
    }
    else if(this.usuario===''){
      this.consultarTudo()
    }
  }

  consultarTudo():void{
    this.usuarioService.getUsuario().subscribe(
      sucess => this.usuarios=sucess,
      error => 
          console.log(error)
    )
  }
  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.consultarTudo()
  }
}
