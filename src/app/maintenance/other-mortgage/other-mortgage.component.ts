import { Component, Input, OnInit } from '@angular/core';
import { FirebaseObjectObservable } from 'angularfire2';
import 'rxjs/add/operator/first';
import { FirebaseArrayProcessingService } from '../../shared/firebaseArrayProcessing.service';

@Component({
  selector: 'app-other-mortgage',
  templateUrl: './other-mortgage.component.html',
})
export class OtherMortgageComponent implements OnInit {
  @Input('applicantOtherMortgage') applicantOtherMortgage: Array<FirebaseObjectObservable<any>>;
  @Input('respondentOtherMortgage') respondentOtherMortgage: Array<FirebaseObjectObservable<any>>;

  index: number;

  constructor(private processingService: FirebaseArrayProcessingService) { }

  addItem(type: string) {
    this.processingService.addItem(type, 'other-mortgage', this.applicantOtherMortgage, this.respondentOtherMortgage);
  }

  removeItem(id: string, type: string) {
    this.processingService.removeItem(id, type, this.applicantOtherMortgage, this.respondentOtherMortgage);
  }

  ngOnInit() {
  }

}
