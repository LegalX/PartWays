import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AngularFire } from 'angularfire2';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import {MdDialog} from '@angular/material';
import { LoginComponent } from './login';

@Injectable()
export class AuthGuard implements CanActivate {
  public allowed: boolean;

  constructor(private af: AngularFire, private router: Router, public dialog: MdDialog) {
    // this.af.auth.subscribe((auth) => console.log(auth));
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    localStorage.setItem('redirect',state.url);
    return this.af.auth.map((auth) => {
      if (auth == null) {
        this.dialog.open(LoginComponent);
        return false;
      } else {
        return true;
      }
    }).first();
  }
}
