import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalAdviceComponent } from './legal-advice.component';

describe('LegalAdviceComponent', () => {
  let component: LegalAdviceComponent;
  let fixture: ComponentFixture<LegalAdviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalAdviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalAdviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
