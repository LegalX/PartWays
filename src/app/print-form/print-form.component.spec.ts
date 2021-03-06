import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintDirective } from '../shared/print.directive';
import { PrintFormComponent } from './print-form.component';

describe('PrintFormComponent', () => {
  let component: PrintFormComponent;
  let fixture: ComponentFixture<PrintFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintFormComponent ],
      imports: [
        PrintDirective,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
