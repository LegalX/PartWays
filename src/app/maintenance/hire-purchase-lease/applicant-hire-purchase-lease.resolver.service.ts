import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import 'rxjs/add/operator/first';
import { Observable } from 'rxjs/Observable';
import { FirebaseArrayProcessingService } from '../../shared/firebaseArrayProcessing.service';

@Injectable()
export class ApplicantHirePurchaseLeaseResolver implements Resolve<any> {

  constructor(private processingService: FirebaseArrayProcessingService) { }

  resolve(): Observable<any> | Promise<any> {
    return this.processingService.getArray(`/application/${localStorage.getItem('applicationId')}/maintenance/applicant/hire-purchase-lease`);
  }
}
