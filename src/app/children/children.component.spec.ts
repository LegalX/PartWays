import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenComponent } from './children.component';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireModule } from 'angularfire2';

import 'hammerjs';

describe('ChildrenComponent', () => {
  let component: ChildrenComponent;
  let fixture: ComponentFixture<ChildrenComponent>;

  beforeEach(async(() => {
    const firebaseConfig = {
      apiKey: 'AIzaSyBo41ERx8-sWyLWx56WvFc-RH6-nCvpFTI',
      authDomain: 'partways-dev.firebaseapp.com',
      databaseURL: 'https://partways-dev.firebaseio.com',
      storageBucket: 'partways-dev.appspot.com',
      messagingSenderId: '1727367456',
    };
    TestBed.configureTestingModule({
      declarations: [ ChildrenComponent ],
      imports: [
        MaterialModule,
        FormsModule,
        RouterTestingModule,
        AngularFireModule.initializeApp(firebaseConfig)
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
