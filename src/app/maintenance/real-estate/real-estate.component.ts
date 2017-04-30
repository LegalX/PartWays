import { Component, Input, OnInit } from '@angular/core';
import { FirebaseObjectObservable } from 'angularfire2/database';
import 'rxjs/add/operator/first';
import { FirebaseArrayProcessingService } from '../../shared/firebaseArrayProcessing.service';

@Component({
  selector: 'app-real-estate',
  templateUrl: './real-estate.component.html',
})
export class RealEstateComponent implements OnInit {
  @Input('applicantRealEstates') applicantRealEstates: Array<FirebaseObjectObservable<any>>;
  @Input('respondentRealEstates') respondentRealEstates: Array<FirebaseObjectObservable<any>>;
  index: number;

  constructor(private processingService: FirebaseArrayProcessingService) { }

  addItem(type: string) {
    this.processingService.addItem(type, 'real-estate', this.applicantRealEstates, this.respondentRealEstates);
  }

  removeItem(id: string, type: string) {
    this.processingService.removeItem(id, type, this.applicantRealEstates, this.respondentRealEstates);
  }

  ngOnInit() {
  }

}
