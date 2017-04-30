import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-legal-advice',
  templateUrl: './legal-advice.component.html',
  styleUrls: ['./legal-advice.component.css'],
})

export class LegalAdviceComponent implements OnInit {
  item: FirebaseObjectObservable<any>;
  constructor(private db: AngularFireDatabase) {
    // ToDo refactor
    this.item = db.object('/relationship/dev-data');
  }

  ngOnInit() {
  }

}
