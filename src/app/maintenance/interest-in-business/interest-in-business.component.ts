import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2/database';
import 'rxjs/add/operator/first';
import { FirebaseArrayProcessingService } from '../../shared/firebaseArrayProcessing.service';

@Component({
  selector: 'app-interest-in-business',
  templateUrl: './interest-in-business.component.html',
})
export class InterestInBusinessComponent implements OnInit {
  @Input('applicantInterestInBusiness') applicantInterestInBusiness: Array<FirebaseObjectObservable<any>>;
  @Input('respondentInterestInBusiness') respondentInterestInBusiness: Array<FirebaseObjectObservable<any>>;
  index: number;

  constructor(private processingService: FirebaseArrayProcessingService) { }

  addItem(type: string) {
    this.processingService.addItem(type, 'interest-in-business', this.applicantInterestInBusiness, this.respondentInterestInBusiness);
  }

  removeItem(id: string, type: string) {
    this.processingService.removeItem(id, type, this.applicantInterestInBusiness, this.respondentInterestInBusiness);
  }

  ngOnInit() {
  }

}
