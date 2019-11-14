import { SettingService } from './setting.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crud';
  mostrarMenu: boolean = false;

  atualizar() {
    if (localStorage.getItem('Usuario')) {
      return true;
    }
  }

  constructor(private settingService: SettingService) {

  }
  ngOnInit() {
    this.mostrarMenu = this.settingService.getUsuario();
  }

}
