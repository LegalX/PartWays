import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-court-cases',
  templateUrl: './court-cases.component.html',
  styleUrls: ['./court-cases.component.css'],
})

export class CourtCasesComponent implements OnInit {
  item: FirebaseObjectObservable<any>;

  constructor(private db: AngularFireDatabase) {
  }

  ngOnInit() {
    this.item = this.db.object(`/application/${localStorage.getItem('applicationId')}/courtCases`);
  }

}
