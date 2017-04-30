import { Component } from '@angular/core';
import { AngularFire, AuthMethods, AuthProviders, FirebaseListObservable } from 'angularfire2';
import {MdDialogRef} from '@angular/material';

@Component({
    selector: 'app-login',
    templateUrl: './login.html',
})

export class LoginComponent {

  constructor(public af: AngularFire, public dialogRef: MdDialogRef<LoginComponent>) { }
  loginGoogle() {
    this.af.auth.login({
        method: AuthMethods.Popup,
    });
    this.dialogRef.close();
  }

  loginFacebook() {
    this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup,
    });
    this.dialogRef.close();
  }
}
