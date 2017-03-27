import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2';
import { FirebaseArrayProcessingService } from '../../shared/firebaseArrayProcessing.service';
import 'rxjs/add/operator/first';

@Component({
  selector: 'app-life-insurance',
  templateUrl: './life-insurance.component.html',
  styleUrls: [],
})
export class LifeInsuranceComponent implements OnInit {
  @Input('applicantLifeInsurance') applicantLifeInsurance: Array<FirebaseObjectObservable<any>>;
  @Input('respondentLifeInsurance') respondentLifeInsurance: Array<FirebaseObjectObservable<any>>;

  constructor(private processingService: FirebaseArrayProcessingService) {}

  addItem(type: string) {
    this.processingService.addItem(type, 'life-insurance', this.applicantLifeInsurance, this.respondentLifeInsurance);
  }

  removeItem(id: string, type: string) {
    this.processingService.removeItem(id, type, this.applicantLifeInsurance, this.respondentLifeInsurance);
  }

  ngOnInit() {
  }

}
