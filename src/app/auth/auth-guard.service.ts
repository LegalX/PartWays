import { Injectable } from '@angular/core';
import { MdDialog } from '@angular/material';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { LoginComponent } from './login';

@Injectable()
export class AuthGuard implements CanActivate {
  public allowed: boolean;

  constructor(private afAuth: AngularFireAuth, private router: Router, public dialog: MdDialog) {
    // this.af.auth.subscribe((auth) => console.log(auth));
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    localStorage.setItem('redirect', state.url);
    return this.afAuth.authState.map((auth) => {
      if (auth == null) {
        this.dialog.open(LoginComponent);
        return false;
      } else {
        return true;
      }
    }).first();
  }
}
