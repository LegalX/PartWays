import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-relationship',
  templateUrl: './relationship.component.html',
  styleUrls: ['./relationship.component.css'],
})
export class RelationshipComponent implements OnInit {
  item: FirebaseObjectObservable<any>;
  relationship: any;
  isReadOnly = false;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.item = this.db.object(`/application/${localStorage.getItem('applicationId')}/relationship`);
  }
}
