import { UsuarioService } from './../servicos/usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  form: FormGroup;
  frase:string

  salvar() {
    if (this.form.valid) {
      this.usuarioService.setUsuario(this.form.value).subscribe(
        sucess => console.log(sucess),
        error => this.frase=error.error.text
      );
    }
    else{
      this.frase='Usuario ou senha invalida!'
    }
  }
  constructor(private usuarioService: UsuarioService, private fb: FormBuilder) { }
  ngOnInit() {
    this.form = this.fb.group({
      usuario: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      senha: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      senha2: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(20)]]
    })
  }

}
