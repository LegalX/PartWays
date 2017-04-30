import { Component, Input, OnInit } from '@angular/core';
import { FirebaseObjectObservable } from 'angularfire2/database';
import 'rxjs/add/operator/first';
import { FirebaseArrayProcessingService } from '../../shared/firebaseArrayProcessing.service';

@Component({
  selector: 'app-other-liabilities',
  templateUrl: './other-liabilities.component.html',
})
export class OtherLiabilitiesComponent implements OnInit {
  @Input('applicantOtherLiabilities') applicantOtherLiabilities: Array<FirebaseObjectObservable<any>>;
  @Input('respondentOtherLiabilities') respondentOtherLiabilities: Array<FirebaseObjectObservable<any>>;

  index: number;

  constructor(private processingService: FirebaseArrayProcessingService) { }

  addItem(type: string) {
    this.processingService.addItem(type, 'other-liabilities', this.applicantOtherLiabilities, this.respondentOtherLiabilities);
  }

  removeItem(id: string, type: string) {
    this.processingService.removeItem(id, type, this.applicantOtherLiabilities, this.respondentOtherLiabilities);
  }

  ngOnInit() {
  }

}
