import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-court-cases',
  templateUrl: './court-cases.component.html',
  styleUrls: ['./court-cases.component.css'],
})

export class CourtCasesComponent implements OnInit {
  item: FirebaseObjectObservable<any>;
  courtCases: Array<FirebaseObjectObservable<any>>;

  constructor(
    private db: AngularFireDatabase,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.item = this.db.object(`/application/${localStorage.getItem('applicationId')}/courtCases`);
    this.courtCases = this.route.snapshot.data['courtCases'];
    // console.log(this.courtCases[0].ongoingCases);
  }

}
