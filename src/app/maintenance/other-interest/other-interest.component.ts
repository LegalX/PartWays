import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2';
import 'rxjs/add/operator/first';
import { FirebaseArrayProcessingService } from '../../shared/firebaseArrayProcessing.service';

@Component({
  selector: 'app-other-interest',
  templateUrl: './other-interest.component.html',
})
export class OtherInterestComponent implements OnInit {
  @Input('applicantOtherInterest') applicantOtherInterest: Array<FirebaseObjectObservable<any>>;
  @Input('respondentOtherInterest') respondentOtherInterest: Array<FirebaseObjectObservable<any>>;
  index: number;

  constructor(private processingService: FirebaseArrayProcessingService) { }

  addItem(type: string) {
    this.processingService.addItem(type, 'other-interest', this.applicantOtherInterest, this.respondentOtherInterest);
  }

  removeItem(id: string, type: string) {
    this.processingService.removeItem(id, type, this.applicantOtherInterest, this.respondentOtherInterest);
  }

  ngOnInit() {
  }

}
