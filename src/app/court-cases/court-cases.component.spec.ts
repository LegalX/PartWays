import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtCasesComponent } from './court-cases.component';

describe('CourtCasesComponent', () => {
  let component: CourtCasesComponent;
  let fixture: ComponentFixture<CourtCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourtCasesComponent ]
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
