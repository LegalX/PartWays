import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatementOfTruthComponent } from './statement-of-truth.component';

describe('StatementOfTruthComponent', () => {
  let component: StatementOfTruthComponent;
  let fixture: ComponentFixture<StatementOfTruthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatementOfTruthComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatementOfTruthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
