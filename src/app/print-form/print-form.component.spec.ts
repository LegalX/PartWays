import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintFormComponent } from './print-form.component';

describe('PrintFormComponent', () => {
  let component: PrintFormComponent;
  let fixture: ComponentFixture<PrintFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
