import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-court-cases',
  templateUrl: './court-cases.component.html',
  styleUrls: ['./court-cases.component.css'],
})
export class CourtCasesComponent implements OnInit {
  item: FirebaseObjectObservable<any>;
  abc: boolean = true;

  constructor(private af: AngularFire) {
    this.item = af.database.object('/court-cases/dev-data');
    console.log(this.item);
  }

  ngOnInit() {
  }

}
