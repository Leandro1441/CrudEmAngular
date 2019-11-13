import { UsuarioService } from './../servicos/usuario.service';
import { SettingService } from './../setting.service';
import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  frase:string='';

  logar(usuario:string, senha:string) {
    if (this.usuarioService.loginUsuario(usuario, senha)) {
      this.router.navigate(['/cadastro'])
    } else
      this.frase="Senha ou Usuario errado!";
  }

  constructor(
    private settingService: SettingService,
    private usuarioService: UsuarioService,
    private router: Router
  ) {

  }

  ngOnInit() {
  }

}
