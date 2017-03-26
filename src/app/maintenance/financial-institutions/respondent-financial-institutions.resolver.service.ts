import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FirebaseArrayProcessingService } from '../../shared/firebaseArrayProcessing.service';
import 'rxjs/add/operator/first';

@Injectable()
export class RespondentFincancialInstitutionsResolver implements Resolve<any> {

  constructor(private processingService: FirebaseArrayProcessingService) { }

  resolve(): Observable<any> | Promise<any> {
    return this.processingService.getArray(`/application/${localStorage.getItem('applicationId')}/maintenance/respondent/financial-institutions`);
  }
}
