import { Component } from '@angular/core';
import { MdDialog, MdDialogRef, MdIconRegistry, MdSnackBar } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import {
  ActivatedRouteSnapshot,
  Event as RouterEvent,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { AngularFire, AuthMethods, AuthProviders, FirebaseListObservable } from 'angularfire2';

import { FeedbackDialogComponent } from './feedback-dialog/feedback-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'PartWays';
  currentUserId: string;
  currentUserName: string;
  currentUserEmail: string;
  isLoading = true;

  constructor(public af: AngularFire, private router: Router, iconRegistry: MdIconRegistry, public dialog: MdDialog, sanitizer: DomSanitizer) {
    localStorage.removeItem('currentUserId');
    localStorage.removeItem('currentUserName');
    this.currentUserId = null;

    iconRegistry.addSvgIcon('A', sanitizer.bypassSecurityTrustResourceUrl('assets/img/a.svg'));

    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });

    this.af.auth.subscribe((auth) => {
      if (!auth) {
        return;
      }
      this.currentUserId = auth.uid;
      this.currentUserName = auth.auth.displayName;
      this.currentUserEmail = auth.auth.email;
      const user = this.af.database.object(`/user/${this.currentUserId}`);
      user.subscribe((item) => {
        if (item.$exists()) {
          localStorage.setItem('applicationId', item.applicationId);
        } else {
          this.createNewUserAndApplication();
        }
      });

      localStorage.setItem('currentUserId', this.currentUserId);
      localStorage.setItem('currentUserName', auth.auth.displayName);
    });
  }

  ngOnInit() {
    return this.router.events.subscribe((event) => {
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

  loginGoogle() {
    this.af.auth.login();
  }

  loginFacebook() {
    this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Redirect,
    });
  }

  logout() {
    this.af.auth.logout();
    this.currentUserId = null;
    localStorage.removeItem('currentUserId');
    this.router.navigate(['/']);
  }

  private createNewUserAndApplication() {
    const newApplication = {
      parties: {
        applicant: {
          id: this.currentUserId,
          name: this.currentUserName,
        },
      },
    };
    const newApplicationRef = this.af.database.list(`/application`);
    newApplicationRef.push(newApplication).then((application) => {
      const userData = {
        authName: this.currentUserName,
        authEmail: this.currentUserEmail,
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

  openPrintForm() {
    window.open('/assets/printform/index.html', '_blank');
  }

  openFeedbackDialog() {
    const feedbackDialog = this.dialog.open(FeedbackDialogComponent);
    feedbackDialog.afterClosed().subscribe((result) => {
      const feedback = result;
      console.log(feedback);
    });
  }

}
