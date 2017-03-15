import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-legal-advice',
  templateUrl: './legal-advice.component.html',
  styleUrls: ['./legal-advice.component.css'],
})

export class LegalAdviceComponent implements OnInit {
  item: FirebaseObjectObservable<any>;
  constructor(af: AngularFire) {
    this.item = af.database.object('/relationship/dev-data');
  }

  ngOnInit() {
  }

}
