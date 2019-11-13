import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { routing } from './app-routing.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DeleteComponent } from './delete/delete.component';
import { UsuarioService } from './servicos/usuario.service';
import { ConsultarComponent } from './consultar/consultar.component';
import { LoginComponent } from './login/login.component';
import { AtualizarComponent } from './atualizar/atualizar.component';
import { AuthGuardService } from './guards/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CadastroComponent,
    DeleteComponent,
    ConsultarComponent,
    LoginComponent,
    AtualizarComponent    
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [UsuarioService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
