import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from './../servicos/usuario.service';
import { SettingService } from './../setting.service';
import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  frase:string=''
  form: FormGroup
logar(){
  if (this.form.valid) {
    this.usuarioService.loginUsuario(this.form.value).subscribe(
      sucess => {
        if(sucess==true){
          console.log(sucess)
          this.settingService.setUsuario(this.form.value);
          this.router.navigate(['/cadastro'])
        }else{
          console.log(sucess)
          this.frase="Senha ou Usuario errado!";
        }
      },
      error => 
          console.log(error),
      () => console.log('request completo')
    )
  }
}
  constructor(
    private settingService: SettingService,
    private usuarioService: UsuarioService,
    private router: Router,
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      usuario: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      senha: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
    })
  }
}
