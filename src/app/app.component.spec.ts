import { async, TestBed } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireModule } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
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
        MaterialModule.forRoot(),
        RouterTestingModule,
        AngularFireModule.initializeApp(firebaseConfig),
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});
