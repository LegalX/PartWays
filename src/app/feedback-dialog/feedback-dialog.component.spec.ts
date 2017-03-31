// http://stackoverflow.com/questions/41273391/cant-resolve-all-parameters-for-mddialogref-error-when-testing-ng2-mater

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MaterialModule, MdDialog, MdDialogModule, MdDialogRef, MdIconModule } from '@angular/material';

import { FeedbackDialogComponent } from './feedback-dialog.component';

describe('FeedbackDialogComponent', () => {
  let component: FeedbackDialogComponent;
  let dialog: MdDialog;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FeedbackDialogComponent],
      imports: [
        MaterialModule.forRoot(),
        FormsModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    dialog = TestBed.get(MdDialog);
    const dialogRef = dialog.open(FeedbackDialogComponent);
    component = dialogRef.componentInstance;
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
