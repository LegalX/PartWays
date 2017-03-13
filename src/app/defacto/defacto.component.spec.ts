import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefactoComponent } from './defacto.component';

describe('DefactoComponent', () => {
  let component: DefactoComponent;
  let fixture: ComponentFixture<DefactoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefactoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
