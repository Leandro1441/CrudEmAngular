import { SettingService } from './../setting.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
    if (localStorage.getItem('Usuario'))
      return true
    else
      this.router.navigate(['']);
  }
  constructor(private settingService: SettingService,
    private router: Router) {
  }
}
