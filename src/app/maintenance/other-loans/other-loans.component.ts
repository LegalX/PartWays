import { Component, Input, OnInit } from '@angular/core';
import { FirebaseObjectObservable } from 'angularfire2/database';
import 'rxjs/add/operator/first';
import { FirebaseArrayProcessingService } from '../../shared/firebaseArrayProcessing.service';

@Component({
  selector: 'app-other-loans',
  templateUrl: './other-loans.component.html',
})
export class OtherLoansComponent implements OnInit {
  @Input('applicantOtherLoans') applicantOtherLoans: Array<FirebaseObjectObservable<any>>;
  @Input('respondentOtherLoans') respondentOtherLoans: Array<FirebaseObjectObservable<any>>;

  index: number;

  constructor(private processingService: FirebaseArrayProcessingService) { }

  addItem(type: string) {
    this.processingService.addItem(type, 'other-loans', this.applicantOtherLoans, this.respondentOtherLoans);
  }

  removeItem(id: string, type: string) {
    this.processingService.removeItem(id, type, this.applicantOtherLoans, this.respondentOtherLoans);
  }

  ngOnInit() {
  }

}
