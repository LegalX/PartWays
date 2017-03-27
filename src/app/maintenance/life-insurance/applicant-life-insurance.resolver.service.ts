import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { FirebaseArrayProcessingService } from '../../shared/firebaseArrayProcessing.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/first';

@Injectable()
export class ApplicantLifeInsuranceResolver implements Resolve<any> {

  constructor(private processingService: FirebaseArrayProcessingService) { }

  resolve(): Observable<any> | Promise<any> {
    return this.processingService.getArray(`/application/${localStorage.getItem('applicationId')}/maintenance/applicant/life-insurance`);
  }
}
