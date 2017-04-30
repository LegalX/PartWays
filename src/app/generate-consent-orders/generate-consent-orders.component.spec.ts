import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateConsentOrdersComponent } from './generate-consent-orders.component';

describe('GenerateConsentOrdersComponent', () => {
  let component: GenerateConsentOrdersComponent;
  let fixture: ComponentFixture<GenerateConsentOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateConsentOrdersComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateConsentOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
