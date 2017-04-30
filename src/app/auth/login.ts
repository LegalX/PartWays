import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
})

export class LoginComponent {

  constructor(public afAuth: AngularFireAuth) { }

  loginGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.auth.signInWithRedirect(provider);
  }

  loginFacebook() {
    const provider = new firebase.auth.FacebookAuthProvider();
    this.afAuth.auth.signInWithRedirect(provider);
  }
}
