import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-feedback-dialog',
  templateUrl: './feedback-dialog.component.html',
  styleUrls: ['./feedback-dialog.component.css'],
})
export class FeedbackDialogComponent implements OnInit {

  public feedback: any;

  constructor(public feedbackDialog: MdDialogRef<FeedbackDialogComponent>) { }

  ngOnInit() {
    this.feedback = {};
  }

  onSubmit() {
    this.feedbackDialog.close(this.feedback);
  }
}
