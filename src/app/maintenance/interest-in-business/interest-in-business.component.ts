import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2';
import { FirebaseArrayProcessingService } from '../../shared/firebaseArrayProcessing.service';
import 'rxjs/add/operator/first';

@Component({
  selector: 'app-interest-in-business',
  templateUrl: './interest-in-business.component.html',
  styleUrls: [],
})
export class InterestInBusinessComponent implements OnInit {
  @Input('applicantInterestInBusiness') applicantInterestInBusiness: Array<FirebaseObjectObservable<any>>;
  @Input('respondentInterestInBusiness') respondentInterestInBusiness: Array<FirebaseObjectObservable<any>>;

  constructor(private processingService: FirebaseArrayProcessingService) {}

  addItem(type: string) {
    this.processingService.addItem(type, 'interest-in-business', this.applicantInterestInBusiness, this.respondentInterestInBusiness);
  }

  removeItem(id: string, type: string) {
    this.processingService.removeItem(id, type, this.applicantInterestInBusiness, this.respondentInterestInBusiness);
  }

  ngOnInit() {
  }

}
