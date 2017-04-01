import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2';
import 'rxjs/add/operator/first';
import { FirebaseArrayProcessingService } from '../../shared/firebaseArrayProcessing.service';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
})
export class InvestmentsComponent implements OnInit {
  @Input('applicantInvestments') applicantInvestments: Array<FirebaseObjectObservable<any>>;
  @Input('respondentInvestments') respondentInvestments: Array<FirebaseObjectObservable<any>>;
  index: number;

  constructor(private processingService: FirebaseArrayProcessingService) { }

  addItem(type: string) {
    this.processingService.addItem(type, 'investments', this.applicantInvestments, this.respondentInvestments);
  }

  removeItem(id: string, type: string) {
    this.processingService.removeItem(id, type, this.applicantInvestments, this.respondentInvestments);
  }

  ngOnInit() {
  }

}
