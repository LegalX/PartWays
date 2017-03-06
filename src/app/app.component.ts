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
  items: FirebaseListObservable<any[]>;
  title: string;

  constructor(public af: AngularFire, private router: Router) {
    this.title = 'Part - Ways';
    this.items = af.database.list('/items');
  }

  login() {
    this.af.auth.login();
  }

  logout() {
    this.af.auth.logout();
    this.router.navigate(['/']);
  }
}
