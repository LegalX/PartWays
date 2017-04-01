import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2';
import 'rxjs/add/operator/first';
import { FirebaseArrayProcessingService } from '../../shared/firebaseArrayProcessing.service';

@Component({
  selector: 'app-motor-vehicles',
  templateUrl: './motor-vehicles.component.html',
})
export class MotorVehiclesComponent implements OnInit {
  @Input('applicantMotorVehicles') applicantMotorVehicles: Array<FirebaseObjectObservable<any>>;
  @Input('respondentMotorVehicles') respondentMotorVehicles: Array<FirebaseObjectObservable<any>>;
  index: number;

  constructor(private processingService: FirebaseArrayProcessingService) { }

  addItem(type: string) {
    this.processingService.addItem(type, 'motor-vehicles', this.applicantMotorVehicles, this.respondentMotorVehicles);
  }

  removeItem(id: string, type: string) {
    this.processingService.removeItem(id, type, this.applicantMotorVehicles, this.respondentMotorVehicles);
  }

  ngOnInit() {
  }

}
