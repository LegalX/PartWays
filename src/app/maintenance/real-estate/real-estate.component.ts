import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2';
import { FirebaseArrayProcessingService } from '../../shared/firebaseArrayProcessing.service';
import 'rxjs/add/operator/first';

@Component({
  selector: 'app-real-estate',
  templateUrl: './real-estate.component.html',
  styleUrls: [],
})
export class RealEstateComponent implements OnInit {
  @Input('applicantRealEstates') applicantRealEstates: Array<FirebaseObjectObservable<any>>;
  @Input('respondentRealEstates') respondentRealEstates: Array<FirebaseObjectObservable<any>>;

  constructor(private processingService: FirebaseArrayProcessingService) {}

  addItem(type: string) {
    this.processingService.addItem(type, 'real-estate', this.applicantRealEstates, this.respondentRealEstates);
  }

  removeItem(id: string, type: string) {
    this.processingService.removeItem(id, type, this.applicantRealEstates, this.respondentRealEstates);
  }

  ngOnInit() {
  }

}
