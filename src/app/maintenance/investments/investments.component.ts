import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2';
import { FirebaseArrayProcessingService } from '../../shared/firebaseArrayProcessing.service';
import 'rxjs/add/operator/first';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: [],
})
export class InvestmentsComponent implements OnInit {
  @Input('applicantInvestments') applicantInvestments: Array<FirebaseObjectObservable<any>>;
  @Input('respondentInvestments') respondentInvestments: Array<FirebaseObjectObservable<any>>;
  items: FirebaseListObservable<any>;

  constructor(private processingService: FirebaseArrayProcessingService) {}

  addItem(type: string) {
    this.processingService.addItem(type, 'investments', this.applicantInvestments, this.respondentInvestments);
  }

  removeItem(id: string, type: string) {
    this.processingService.removeItem(id, type, this.applicantInvestments, this.respondentInvestments);
  }

  ngOnInit() {
  }

}
