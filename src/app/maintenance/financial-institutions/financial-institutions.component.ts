import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2';
import { FirebaseArrayProcessingService } from '../../shared/firebaseArrayProcessing.service';
import 'rxjs/add/operator/first';

@Component({
  selector: 'app-financial-institutions',
  templateUrl: './financial-institutions.component.html',
  styleUrls: [],
})
export class FincancialInstitutionsComponent implements OnInit {
  @Input('applicantFincancialInstitutions') applicantFincancialInstitutions: Array<FirebaseObjectObservable<any>>;
  @Input('respondentFincancialInstitutions') respondentFincancialInstitutions: Array<FirebaseObjectObservable<any>>;

  constructor(private processingService: FirebaseArrayProcessingService) {}

  addItem(type: string) {
    this.processingService.addItem(type, 'financial-institutions', this.applicantFincancialInstitutions, this.respondentFincancialInstitutions);
  }

  removeItem(id: string, type: string) {
    this.processingService.removeItem(id, type, this.applicantFincancialInstitutions, this.respondentFincancialInstitutions);
  }

  ngOnInit() {
  }

}
