import { Component, Input, OnInit } from '@angular/core';
import { FirebaseObjectObservable } from 'angularfire2';
import 'rxjs/add/operator/first';
import { FirebaseArrayProcessingService } from '../../shared/firebaseArrayProcessing.service';

@Component({
  selector: 'app-hire-purchase-lease',
  templateUrl: './hire-purchase-lease.component.html',
})
export class HirePurchaseLeaseComponent implements OnInit {
  @Input('applicantHirePurchaseLease') applicantHirePurchaseLease: Array<FirebaseObjectObservable<any>>;
  @Input('respondentHirePurchaseLease') respondentHirePurchaseLease: Array<FirebaseObjectObservable<any>>;

  index: number;

  constructor(private processingService: FirebaseArrayProcessingService) { }

  addItem(type: string) {
    this.processingService.addItem(type, 'hire-purchase-lease', this.applicantHirePurchaseLease, this.respondentHirePurchaseLease);
  }

  removeItem(id: string, type: string) {
    this.processingService.removeItem(id, type, this.applicantHirePurchaseLease, this.respondentHirePurchaseLease);
  }

  ngOnInit() {
  }

}
