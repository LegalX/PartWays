import { async, TestBed } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import 'hammerjs';
import { Observable } from 'rxjs/Observable';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeAll(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 999999;
  });
  beforeEach(async(() => {
    const firebaseConfig = {
      apiKey: 'AIzaSyBo41ERx8-sWyLWx56WvFc-RH6-nCvpFTI',
      authDomain: 'partways-dev.firebaseapp.com',
      databaseURL: 'https://partways-dev.firebaseio.com',
      storageBucket: 'partways-dev.appspot.com',
      messagingSenderId: '1727367456',
    };

    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports: [
        MaterialModule,
        RouterTestingModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'PartWays'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('PartWays');
  }));
});
