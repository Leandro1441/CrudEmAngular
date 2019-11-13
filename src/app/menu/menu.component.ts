import { SettingService } from './../setting.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  sair() {
    localStorage.removeItem('Usuario')
    this.settingService.setUsuario('');
  }
  constructor(private settingService: SettingService) { }

  ngOnInit() {
  }

}
