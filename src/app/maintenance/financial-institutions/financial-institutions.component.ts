import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2';
import 'rxjs/add/operator/first';
import { FirebaseArrayProcessingService } from '../../shared/firebaseArrayProcessing.service';

@Component({
  selector: 'app-financial-institutions',
  templateUrl: './financial-institutions.component.html',
})
export class FinancialInstitutionsComponent implements OnInit {
  @Input('applicantFinancialInstitutions') applicantFinancialInstitutions: Array<FirebaseObjectObservable<any>>;
  @Input('respondentFinancialInstitutions') respondentFinancialInstitutions: Array<FirebaseObjectObservable<any>>;

  constructor(private processingService: FirebaseArrayProcessingService) { }

  addItem(type: string) {
    this.processingService.addItem(type, 'financial-institutions', this.applicantFinancialInstitutions, this.respondentFinancialInstitutions);
  }

  removeItem(id: string, type: string) {
    this.processingService.removeItem(id, type, this.applicantFinancialInstitutions, this.respondentFinancialInstitutions);
  }

  ngOnInit() {
  }

}
