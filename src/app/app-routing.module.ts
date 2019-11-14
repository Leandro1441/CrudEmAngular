
import { LoginComponent } from './login/login.component';

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { DeleteComponent } from './delete/delete.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ConsultarComponent } from './consultar/consultar.component';
import { AtualizarComponent } from './atualizar/atualizar.component';
import { AuthGuardService } from './guards/auth-guard.service';


const APP_ROUTES: Routes = [
    { path: 'cadastro', component: CadastroComponent, canActivate: [AuthGuardService] },
    { path: 'deletar', component: DeleteComponent, canActivate: [AuthGuardService] },
    { path: 'consultar', component: ConsultarComponent, canActivate: [AuthGuardService] },
    { path: 'consultar/:id', component: ConsultarComponent, canActivate: [AuthGuardService] },
    { path: '', component: LoginComponent },
    { path: 'atualizar', component: AtualizarComponent, canActivate: [AuthGuardService] }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);