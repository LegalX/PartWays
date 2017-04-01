import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2';
import 'rxjs/add/operator/first';
import { FirebaseArrayProcessingService } from '../../shared/firebaseArrayProcessing.service';

@Component({
  selector: 'app-life-insurance',
  templateUrl: './life-insurance.component.html',
})
export class LifeInsuranceComponent implements OnInit {
  @Input('applicantLifeInsurance') applicantLifeInsurance: Array<FirebaseObjectObservable<any>>;
  @Input('respondentLifeInsurance') respondentLifeInsurance: Array<FirebaseObjectObservable<any>>;
  index: number;

  constructor(private processingService: FirebaseArrayProcessingService) { }

  addItem(type: string) {
    this.processingService.addItem(type, 'life-insurance', this.applicantLifeInsurance, this.respondentLifeInsurance);
  }

  removeItem(id: string, type: string) {
    this.processingService.removeItem(id, type, this.applicantLifeInsurance, this.respondentLifeInsurance);
  }

  ngOnInit() {
  }

}
