import { Component } from '@angular/core';
import { AngularFire, AuthMethods, AuthProviders, FirebaseListObservable } from 'angularfire2';

@Component({
    selector: 'app-login',
    templateUrl: './login.html',
})

export class LoginComponent {

  constructor(public af: AngularFire) { }
  loginGoogle() {
    this.af.auth.login();
  }

  loginFacebook() {
    this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Redirect,
    });
  }
}
