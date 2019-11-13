import { UsuarioService } from './../servicos/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  novoUsario(usuario, senha, csenha) {
    if (senha === csenha && senha != '' && senha.length >= 8) {
      let tem = this.usuarioService.buscarUsuario(usuario);
      if (usuario != '' && usuario.length >= 8 && tem.length == 0) {
        this.usuarioService.setUsuario(usuario, senha)
      } else if (tem => 0)
        alert("Usuario já existente");
      else
        alert("Insira um Usuario valido")
    }
    else if (csenha == '' && senha == '' && usuario == '')
      alert("Campos vazios")
    else
      alert('Senha invalida')
  }
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

}
