import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-court-cases',
  templateUrl: './court-cases.component.html',
  styleUrls: ['./court-cases.component.css'],
})

export class CourtCasesComponent implements OnInit {
  item: FirebaseObjectObservable<any>;

  constructor(private af: AngularFire) {
  }

  ngOnInit() {
    this.item = this.af.database.object(`/application/${localStorage.getItem('applicationId')}/courtCases`);
  }

}
