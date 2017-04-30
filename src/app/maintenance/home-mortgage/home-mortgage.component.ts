import { Component, Input, OnInit } from '@angular/core';
import { FirebaseObjectObservable } from 'angularfire2/database';
import 'rxjs/add/operator/first';
import { FirebaseArrayProcessingService } from '../../shared/firebaseArrayProcessing.service';

@Component({
  selector: 'app-home-mortgage',
  templateUrl: './home-mortgage.component.html',
})
export class HomeMortgageComponent implements OnInit {
  @Input('applicantHomeMortgage') applicantHomeMortgage: Array<FirebaseObjectObservable<any>>;
  @Input('respondentHomeMortgage') respondentHomeMortgage: Array<FirebaseObjectObservable<any>>;

  index: number;

  constructor(private processingService: FirebaseArrayProcessingService) { }

  addItem(type: string) {
    this.processingService.addItem(type, 'home-mortgage', this.applicantHomeMortgage, this.respondentHomeMortgage);
  }

  removeItem(id: string, type: string) {
    this.processingService.removeItem(id, type, this.applicantHomeMortgage, this.respondentHomeMortgage);
  }

  ngOnInit() {
  }

}
