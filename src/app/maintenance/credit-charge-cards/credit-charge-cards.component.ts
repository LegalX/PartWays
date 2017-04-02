import { Component, Input, OnInit } from '@angular/core';
import { FirebaseObjectObservable } from 'angularfire2';
import 'rxjs/add/operator/first';
import { FirebaseArrayProcessingService } from '../../shared/firebaseArrayProcessing.service';

@Component({
  selector: 'app-credit-charge-cards',
  templateUrl: './credit-charge-cards.component.html',
})
export class CreditChargeCardsComponent implements OnInit {
  @Input('applicantCreditChargeCards') applicantCreditChargeCards: Array<FirebaseObjectObservable<any>>;
  @Input('respondentCreditChargeCards') respondentCreditChargeCards: Array<FirebaseObjectObservable<any>>;

  index: number;

  constructor(private processingService: FirebaseArrayProcessingService) { }

  addItem(type: string) {
    this.processingService.addItem(type, 'credit-charge-cards', this.applicantCreditChargeCards, this.respondentCreditChargeCards);
  }

  removeItem(id: string, type: string) {
    this.processingService.removeItem(id, type, this.applicantCreditChargeCards, this.respondentCreditChargeCards);
  }

  ngOnInit() {
  }

}
