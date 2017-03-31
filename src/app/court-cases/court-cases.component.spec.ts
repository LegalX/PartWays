import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireModule } from 'angularfire2';
import { CourtCasesComponent } from './court-cases.component';

import 'hammerjs';

describe('CourtCasesComponent', () => {
  let component: CourtCasesComponent;
  let fixture: ComponentFixture<CourtCasesComponent>;

  beforeEach(async(() => {
    const firebaseConfig = {
      apiKey: 'AIzaSyBo41ERx8-sWyLWx56WvFc-RH6-nCvpFTI',
      authDomain: 'partways-dev.firebaseapp.com',
      databaseURL: 'https://partways-dev.firebaseio.com',
      storageBucket: 'partways-dev.appspot.com',
      messagingSenderId: '1727367456',
    };
    TestBed.configureTestingModule({
      declarations: [ CourtCasesComponent ],
      imports: [
        MaterialModule,
        FormsModule,
        RouterTestingModule,
        AngularFireModule.initializeApp(firebaseConfig),
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourtCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
