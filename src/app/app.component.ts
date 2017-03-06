import { Component } from '@angular/core';
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string;
  currentUser: string;

  constructor(public af: AngularFire, private router: Router) {
    this.title = 'Part - Ways';
    localStorage.removeItem('currentUser');
    this.currentUser = null;

    this.af.auth.subscribe((auth) => {
      this.currentUser = auth.uid;
      localStorage.setItem('currentUser', this.currentUser);
    });
  }

  login() {
    this.af.auth.login();
    this.currentUser = this.af.auth.getAuth().uid;
    localStorage.setItem('currentUser', this.currentUser);
    this.router.navigate(['/']);
  }

  logout() {
    this.af.auth.logout();
    this.currentUser = null;
    localStorage.removeItem('currentUser');
    this.router.navigate(['/']);
  }
}
