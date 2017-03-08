import { Component } from '@angular/core';
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';
import {
  ActivatedRouteSnapshot,
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
  currentUserId: string;
  currentUserName: string;
  isLoading = true;

  constructor(public af: AngularFire, private router: Router) {
    localStorage.removeItem('currentUserId');
    localStorage.removeItem('currentUserName');
    this.currentUserId = null;

    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });

    this.af.auth.subscribe((auth) => {
      if (!auth) {
        return;
      }
      this.currentUserId = auth.uid;
      this.currentUserName = auth.auth.displayName;
      const user = this.af.database.object(`/user/${this.currentUserId}`);
      user.subscribe((item) => {
        if (!item.$exists()) {
          this.createNewUserAndApplication();
        }
      });

      localStorage.setItem('currentUserId', this.currentUserId);
      localStorage.setItem('currentUserName', auth.auth.displayName);
    });
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.title = this.getDeepestTitle(this.router.routerState.snapshot.root);
      }
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
  }

  logout() {
    this.af.auth.logout();
    this.currentUserId = null;
    localStorage.removeItem('currentUserId');
    this.router.navigate(['/']);
  }

  private createNewUserAndApplication() {
    const newApplication = { applicant: { id: this.currentUserId, name: this.currentUserName } };
    const newApplicationRef = this.af.database.list(`/application`);
    newApplicationRef.push(newApplication).then((application) => {
      const userData = {
        authName: this.currentUserName,
        applicationId: application.key,
      };
      const newUser = this.af.database.object(`/user/${this.currentUserId}`);
      newUser.set(userData);
    });
  }

  private getDeepestTitle(routeSnapshot: ActivatedRouteSnapshot) {
    let title = routeSnapshot.data ? routeSnapshot.data['title'] : '';
    if (routeSnapshot.firstChild) {
      title = this.getDeepestTitle(routeSnapshot.firstChild) || title;
    }
    return title;
  }

}
