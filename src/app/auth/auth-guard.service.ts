import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AngularFire } from 'angularfire2';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
  public allowed: boolean;

  constructor(private af: AngularFire, private router: Router) {
    // this.af.auth.subscribe((auth) => console.log(auth));
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.af.auth.map((auth) => {
      if (auth == null) {
        this.router.navigate(['/login']);
        return false;
      } else {
        return true;
      }
    }).first();
  }
}
