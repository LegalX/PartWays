import { Component } from '@angular/core';
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';
import {
  Event as RouterEvent,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string;
  currentUser: string;
  isLoading = true;

  constructor(public af: AngularFire, private router: Router) {
    this.title = 'Part - Ways';
    localStorage.removeItem('currentUser');
    this.currentUser = null;

    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });

    this.af.auth.subscribe((auth) => {
      this.currentUser = auth.uid;
      localStorage.setItem('currentUser', this.currentUser);
    });
  }

  /**
   * Shows and hides the loading spinner during RouterEvent changes
   *
   * @param {RouterEvent} event
   * @memberOf AppComponent
   */
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.isLoading = true;
    }
    if (event instanceof NavigationEnd) {
      this.isLoading = false;
    }
    if (event instanceof NavigationCancel) {
      this.isLoading = false;
    }
    if (event instanceof NavigationError) {
      this.isLoading = false;
    }
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
