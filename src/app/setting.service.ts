import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingService {
  constructor(){ }

  getUsuario():boolean {
    if(localStorage.getItem('usuario'))
    return true
    return false
  }
  setUsuario(usuario:string){
    if(usuario){
      localStorage.setItem('Usuario','true')
    }else{
      localStorage.removeItem('Usuario')
    }
  }

}
