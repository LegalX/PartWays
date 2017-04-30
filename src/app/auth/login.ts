import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
})

export class LoginComponent {

  constructor(public afAuth: AngularFireAuth, public dialogRef: MdDialogRef<LoginComponent>) { }

  loginGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.auth.signInWithPopup(provider);
    this.dialogRef.close();
  }

  loginFacebook() {
    const provider = new firebase.auth.FacebookAuthProvider();
    this.afAuth.auth.signInWithPopup(provider);
    this.dialogRef.close();
  }
}
