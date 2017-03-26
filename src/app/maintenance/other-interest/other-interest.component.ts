import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2';
import { FirebaseArrayProcessingService } from '../../shared/firebaseArrayProcessing.service';
import 'rxjs/add/operator/first';

@Component({
  selector: 'app-other-interest',
  templateUrl: './other-interest.component.html',
  styleUrls: [],
})
export class OtherInterestComponent implements OnInit {
  @Input('applicantOtherInterest') applicantOtherInterest: Array<FirebaseObjectObservable<any>>;
  @Input('respondentOtherInterest') respondentOtherInterest: Array<FirebaseObjectObservable<any>>;

  constructor(private processingService: FirebaseArrayProcessingService) {}

  addItem(type: string) {
    this.processingService.addItem(type, 'other-interest', this.applicantOtherInterest, this.respondentOtherInterest);
  }

  removeItem(id: string, type: string) {
    this.processingService.removeItem(id, type, this.applicantOtherInterest, this.respondentOtherInterest);
  }

  ngOnInit() {
  }

}
